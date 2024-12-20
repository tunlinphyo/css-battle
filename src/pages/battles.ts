import { BaseComponent } from "../utils/page"
import { Breadcrumbs } from "./breadcrumbs"
import { Battles } from '../utils/battles'
import { Battle, List } from "../utils/data"

export class BattlesPage extends BaseComponent {
    private currentNavList: List[] = []
    private navListEl: HTMLElement | null = null

    constructor(id: string, private breadcrumbs: Breadcrumbs, private battles: Battles) {
        super('battles')
        this.render(Number(id))
    }

    private render(id: number) {
        const battle = this.battles.battles(id)
        if (!battle) return

        this.breadcrumbs.render([
            {
                url: '/',
                name: 'Battles',
                current: false
            },
            {
                url: `/battles/${id}`,
                name: battle.name,
                current: true
            }
        ])

        const navEl = this.renderNav(this.battles.list(), id)

        const sectionEl = this.createElement('section', ['content'])

        this.renderList(id, battle.items, sectionEl)

        this.component.appendChild(navEl)
        this.component.appendChild(sectionEl)

        this.scrollIntoView(navEl)
    }

    private scrollIntoView(navEl:HTMLElement) {
        const artiveEl = this.getElement('.active', navEl)
        if (artiveEl) {
            artiveEl.scrollIntoView({
                behavior: 'instant',
                block: 'center'
            })
        }
    }

    private renderList(id: number, list: (Battle | undefined)[], parentEl: HTMLElement) {
        const listEl = this.createElement('ul', ['list'])
        for (const item of list) {
            if (!item) continue

            const itemEl = this.createElement('li')
            const cardEl = this.createElement('a', ['card'], { href: `/battles/${id}/${item.id}` })

            // /battles/${item.id}.png
            cardEl.innerHTML = `
                <img src="https://cssbattle.dev/targets/${item.id}.png" alt="Image of ${item.name}"/>
                <div class="name">${item.name}</div>
            `

            itemEl.appendChild(cardEl)
            listEl.appendChild(itemEl)
        }
        parentEl.appendChild(listEl)
    }

    private renderNav(newList: List[], currentId: number): HTMLElement {
        if (!this.navListEl) {
            const navEl = this.createElement('nav', ['nav'])
            const toggleButton = this.createElement('button', ['btn-menu'])
            toggleButton.addEventListener('click', () => {
                navEl.classList.toggle('show')
            })
            navEl.appendChild(toggleButton)

            const navListEl = this.createElement('ul', ['list'])
            navEl.appendChild(navListEl)
            this.navListEl = navListEl
            this.component.appendChild(navEl)
        }

        const navListContainer = this.navListEl
        const oldList = this.currentNavList
        const newListMap = new Map<number, List>()
        newList.forEach(item => newListMap.set(item.id, item))

        const oldListMap = new Map<number, HTMLElement>()
        Array.from(navListContainer.children).forEach((child, index) => {
            const listItem = oldList[index]
            if (listItem) {
                oldListMap.set(listItem.id, child as HTMLElement)
            }
        })

        newList.forEach((item, index) => {
            const existingItem = oldList[index]
            const existingNode = navListContainer.children[index] as HTMLElement | undefined

            if (existingItem && existingItem.id === item.id) {
                if (existingNode) {
                    const isActive = item.id === currentId
                    existingNode.classList.toggle('active', isActive)
                }
            } else {
                const newNavItemEl = this.createNavItem(item, currentId === item.id)
                if (existingNode) {
                    navListContainer.replaceChild(newNavItemEl, existingNode)
                } else {
                    navListContainer.appendChild(newNavItemEl)
                }
            }
        })

        if (oldList.length > newList.length) {
            for (let i = newList.length; i < oldList.length; i++) {
                const child = navListContainer.children[newList.length] as HTMLElement
                if (child) {
                    navListContainer.removeChild(child)
                }
            }
        }

        this.currentNavList = [...newList]

        return navListContainer.parentElement as HTMLElement
    }

    private createNavItem(item: List, isActive: boolean): HTMLElement {
        const itemEl = this.createElement('li')
        itemEl.classList.toggle('active', isActive)

        const aEl = this.createElement('a', [], { href: `/battles/${item.id}` })
        aEl.textContent = item.name

        itemEl.appendChild(aEl)
        return itemEl
    }
}