export type Route = {
    path: string
    name: string
    callback: (params: RouteParam) => void
}

export type RouteParam = {
    path: string
    params: Record<string, string>
    query?: Record<string, string | string[]>
}

export class Router {
    private routes: Route[]

    constructor(routes: Route[]) {
        this.routes = routes
        this.handleLinkClicks()
        window.addEventListener('popstate', () => this.match())
        this.match()
    }

    match(): void {
        const currentPath = window.location.pathname
        const queryString = window.location.search

        for (const route of this.routes) {
            const match = this.matchPath(route.path, currentPath, queryString)

            if (match) {
                route.callback(match)
                return
            }
        }

        const errorRoute = this.routes.find(item => item.path === '/404')
        if (errorRoute) {
            errorRoute.callback({ params: {}, path: '/404' })
        }

        console.warn('No matching route found for path:', currentPath)
    }

    addRoute(route: Route): void {
        this.routes.push(route)
    }

    navigate(path: string): void {
        history.pushState(null, '', path)
        this.match()
    }

    private handleLinkClicks(): void {
        document.addEventListener('click', (event) => {
            const target = (event.target as HTMLElement).closest('a')
            if (target && target instanceof HTMLAnchorElement) {
                const href = target.getAttribute('href')
                if (href && !href.startsWith('http')) {
                    event.preventDefault()
                    this.navigate(href)
                }
            }
        })
    }

    private pathToRegex(path: string): { regex: RegExp; paramNames: string[] } {
        const paramNames: string[] = []
        const escapedPath = path.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')

        const paramPath = escapedPath.replace(/\:([a-zA-Z0-9_]+)/g, (_, paramName) => {
            paramNames.push(paramName)
            return '([^/]+)'
        })

        const regex = new RegExp(`^${paramPath}$`)
        return { regex, paramNames }
    }

    private matchPath(routePath: string, testPath: string, queryString: string): RouteParam | null {
        const { regex, paramNames } = this.pathToRegex(routePath)
        const match = regex.exec(testPath)

        if (!match) return null

        const params: Record<string, string> = {}
        paramNames.forEach((name, index) => {
            params[name] = match[index + 1]
        })

        const query = this.parseQuery(queryString)

        return { params, path: testPath, query }
    }

    private parseQuery(queryString: string): Record<string, string | string[]> {
        const query: Record<string, string | string[]> = {}

        if (queryString.startsWith('?')) {
            const pairs = queryString.slice(1).split('&')
            pairs.forEach((pair) => {
                const [key, value] = pair.split('=').map(decodeURIComponent)

                if (!key) return

                if (query[key]) {
                    if (Array.isArray(query[key])) {
                        (query[key] as string[]).push(value)
                    } else {
                        query[key] = [query[key] as string, value]
                    }
                } else {
                    query[key] = value || ''
                }
            })
        }

        return query
    }
}