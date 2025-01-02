import { BaseElement } from "../utils/element"

export interface Breadcrumb {
    url: string;
    name: string;
    current: boolean;
}

export class Breadcrumbs extends BaseElement {
    private currentBreadcrumbs: Breadcrumb[] = []

    constructor() {
        super('#breadcrumbs')
    }

    render(newList: Breadcrumb[]) {
        const oldList = this.currentBreadcrumbs
        const parent = this.component
        const maxLength = Math.max(oldList.length, newList.length)

        for (let i = 0; i < maxLength; i++) {
            const oldItem = oldList[i]
            const newItem = newList[i]
            const existingNode = parent.children[i]

            if (newItem && oldItem) {
                if (this.hasBreadcrumbChanged(oldItem, newItem)) {
                    console.log("CHANGE", oldItem, newItem)
                    const newBreadcrumbEl = this.createBreadcrumb(newItem, i === 0)
                    console.log(newBreadcrumbEl)
                    parent.replaceChild(newBreadcrumbEl, existingNode)

                    if (!newItem.current) {
                        const deviderEl = this.createDivider()
                        parent.insertBefore(deviderEl, newBreadcrumbEl.nextSibling)
                    } else {
                        if (existingNode.nextSibling && (existingNode.nextSibling as HTMLElement).classList.contains('breadcrumb-devider')) {
                            parent.removeChild(existingNode.nextSibling)
                        }
                    }
                }
            } else if (newItem && !oldItem) {
                console.log("ONLY_NEW", newItem, !oldItem)
                const newBreadcrumbEl = this.createBreadcrumb(newItem, i === 0)
                parent.appendChild(newBreadcrumbEl)

                if (!newItem.current) {
                    const deviderEl = this.createDivider()
                    parent.appendChild(deviderEl)
                }
            } else if (oldItem && !newItem) {
                console.log("ONLY_OLD", oldItem, !oldItem)
                parent.removeChild(existingNode)
                if (existingNode.nextSibling && (existingNode.nextSibling as HTMLElement).classList.contains('breadcrumb-devider')) {
                    parent.removeChild(existingNode.nextSibling)
                }
            }
        }

        this.currentBreadcrumbs = [...newList]
    }

    private hasBreadcrumbChanged(oldItem: Breadcrumb, newItem: Breadcrumb): boolean {
        return oldItem.url !== newItem.url || oldItem.name !== newItem.name || oldItem.current !== newItem.current
    }

    private createDivider(): HTMLElement {
        const dividerEl = this.createElement('li', ['breadcrumb-devider'])
        dividerEl.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="24" height="24">
            <path fill="var(--primary)" d="M10.811,18.707,9.4,17.293,14.689,12,9.4,6.707l1.415-1.414L16.1,10.586a2,2,0,0,1,0,2.828Z"/>
        </svg>
        `
        return dividerEl
    }

    private createBreadcrumb(data: Breadcrumb, isRoot: boolean): HTMLElement {
        const elem = this.createElement('li', ['breadcrumb'])
        const linkEl = this.createElement('a', [], { href: data.url })

        if (isRoot) {
            linkEl.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="var(--primary)" d="M6.2,2.44L18.1,14.34L20.22,12.22L21.63,13.63L19.16,16.1L22.34,19.28C22.73,19.67 22.73,20.3 22.34,20.69L21.63,21.4C21.24,21.79 20.61,21.79 20.22,21.4L17,18.23L14.56,20.7L13.15,19.29L15.27,17.17L3.37,5.27V2.44H6.2M15.89,10L20.63,5.26V2.44H17.8L13.06,7.18L15.89,10M10.94,15L8.11,12.13L5.9,14.34L3.78,12.22L2.37,13.63L4.84,16.1L1.66,19.29C1.27,19.68 1.27,20.31 1.66,20.7L2.37,21.41C2.76,21.8 3.39,21.8 3.78,21.41L7,18.23L9.44,20.7L10.85,19.29L8.73,17.17L10.94,15Z"></path>
            </svg>
            <span class="lg-only">Battles</span>`
        } else {
            linkEl.textContent = data.name
        }

        elem.classList.toggle('disabled', data.current)

        elem.appendChild(linkEl)
        return elem
    }
}