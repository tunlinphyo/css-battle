import './style.css'
import { BattlePage } from './pages/battle'
import { BattlesPage } from './pages/battles'
import { Route, Router } from './utils/router'
import { Breadcrumbs } from './pages/breadcrumbs'
import { Battles } from './utils/battles'
import { ThemeToggle } from './pages/theme'
import { AboutPage } from './pages/about'

document.addEventListener('DOMContentLoaded', () => {
    const breadcrumbs = new Breadcrumbs()
    const battles = new Battles()
    const theme = new ThemeToggle()

    const routes: Route[] = [
        {
            path: '/',
            name: 'Home',
            callback: () => {
                withViewTransition(() => {
                    new BattlesPage('1', breadcrumbs, battles)
                })
            }
        },
        {
            path: '/battles/:id',
            name: 'Battles',
            callback: ({ params }) => {
                withViewTransition(() => {
                    new BattlesPage(params.id, breadcrumbs, battles)
                })
            }
        },
        {
            path: '/battles/:id/:battleId',
            name: 'Battles',
            callback: ({ params }) => {
                withViewTransition(() => {
                    new BattlePage(params.id, params.battleId, breadcrumbs, battles, theme)
                })
            }
        },
        {
            path: '/about',
            name: 'About',
            callback: () => {
                withViewTransition(() => {
                    new AboutPage(breadcrumbs)
                })
            }
        },
        {
            path: '/404',
            name: 'Not Found',
            callback: () => {
                console.log('Route not found')
            }
        }
    ]

    const router = new Router(routes)
    router.match()
})

function withViewTransition(callback: () => void) {
    if (!document.startViewTransition) {
        return callback()
    }
    document.startViewTransition(callback)
}
