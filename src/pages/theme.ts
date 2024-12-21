// theme-toggle.ts
import { BaseElement } from "../utils/element"

export enum Theme {
    OS = 'os',
    Light = 'light',
    Dark = 'dark',
}

export type ThemeChangeListener = (newTheme: Theme) => void

export class ThemeToggle extends BaseElement {
    private static readonly STORAGE_KEY = 'preferred-theme'
    private currentTheme: Theme = Theme.OS
    private osMediaQuery: MediaQueryList | null = null
    private themeBtn: HTMLButtonElement
    private listEl: HTMLUListElement

    private themeChangeListeners: Set<ThemeChangeListener> = new Set()

    private icons = {
        os: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="18" height="16">
                <path fill="currentColor" d="M0,9c0-.552,.448-1,1-1H3.108c.147-.874,.472-1.721,1.006-2.471l-1.478-1.478c-.391-.391-.391-1.023,0-1.414s1.023-.391,1.414,0l1.478,1.478c.751-.534,1.598-.859,2.471-1.006V1c0-.552,.448-1,1-1s1,.448,1,1V3.108c.874,.147,1.725,.466,2.477,1.001l1.473-1.473c.391-.391,1.023-.391,1.414,0s.391,1.023,0,1.414L3.963,15.45c-.195,.195-.451,.293-.707,.293s-.512-.098-.707-.293c-.391-.391-.391-1.023,0-1.414l1.56-1.56c-.535-.751-.854-1.602-1.001-2.477H1c-.552,0-1-.448-1-1ZM23.707,.293c-.391-.391-1.023-.391-1.414,0L.293,22.293c-.391,.391-.391,1.023,0,1.414,.195,.195,.451,.293,.707,.293s.512-.098,.707-.293L23.707,1.707c.391-.391,.391-1.023,0-1.414Zm-.283,10.954c.32-.15,.538-.458,.572-.81,.034-.353-.121-.696-.407-.904-.858-.625-1.833-1.066-2.897-1.315-.335-.078-.69,.022-.934,.267l-8.392,8.391c-.244,.244-.345,.597-.267,.933,.843,3.646,4.047,6.191,7.792,6.191,1.695,0,3.32-.53,4.697-1.533,.286-.208,.441-.553,.407-.904-.034-.353-.251-.66-.572-.811-1.842-.861-3.033-2.727-3.033-4.752s1.19-3.891,3.033-4.753Z"/>
            </svg>`,
        light: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="18" height="18">
                <path fill="currentColor" d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Zm1-13V1c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1Zm0,19v-3c0-.55-.45-1-1-1s-1,.45-1,1v3c0,.55,.45,1,1,1s1-.45,1-1ZM5,12c0-.55-.45-1-1-1H1c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1Zm19,0c0-.55-.45-1-1-1h-3c-.55,0-1,.45-1,1s.45,1,1,1h3c.55,0,1-.45,1-1ZM6.71,6.71c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm14,14c.39-.39,.39-1.02,0-1.41l-2-2c-.39-.39-1.02-.39-1.41,0s-.39,1.02,0,1.41l2,2c.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Zm-16,0l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29ZM18.71,6.71l2-2c.39-.39,.39-1.02,0-1.41s-1.02-.39-1.41,0l-2,2c-.39,.39-.39,1.02,0,1.41,.2,.2,.45,.29,.71,.29s.51-.1,.71-.29Z"/>
            </svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="18" height="16">
                <path fill="currentColor" d="M22.386,12.003c-.402-.167-.871-.056-1.151,.28-.928,1.105-2.506,1.62-4.968,1.62-3.814,0-6.179-1.03-6.179-6.158,0-2.397,.532-4.019,1.626-4.957,.33-.283,.439-.749,.269-1.149-.17-.401-.571-.655-1.015-.604C5.285,1.573,1,6.277,1,11.978c0,6.062,4.944,10.993,11.022,10.993,5.72,0,10.438-4.278,10.973-9.951,.042-.436-.205-.848-.609-1.017Z"/>
            </svg>`
    }

    constructor(selector: string = '#theme-toggle') {
        super(selector)
        this.themeBtn = this.createElement<HTMLButtonElement>('button', ['btn-theme-toggle'])
        this.listEl = this.createElement('ul', ['list', 'theme-select'])
        this.init()
    }

    private init() {
        const savedTheme = localStorage.getItem(ThemeToggle.STORAGE_KEY) as Theme | null
        if (savedTheme && Object.values(Theme).includes(savedTheme)) {
            this.currentTheme = savedTheme
        } else {
            this.currentTheme = Theme.OS
        }

        this.applyTheme(this.currentTheme)

        this.renderToggle()

        const layerEl = this.createElement('div', ['theme-layer'])

        if (this.currentTheme === Theme.OS) {
            this.listenToOSThemeChanges()
        }

        this.component.appendChild(layerEl)

        this.themeBtn.addEventListener('click', () => {
            this.component.classList.add('active')
        })
        layerEl.addEventListener('click', () => {
            this.component.classList.remove('active')
        })
    }

    private renderToggle() {
        this.component.innerHTML = ''

        const themes: { value: Theme, label: string }[] = [
            { value: Theme.OS, label: 'OS Default' },
            { value: Theme.Light, label: 'Light' },
            { value: Theme.Dark, label: 'Dark' },
        ]

        themes.forEach(theme => {
            const itemEl = this.createElement('li', ['theme-option'], { 'data-theme': theme.value })
            itemEl.innerHTML = `
                ${this.icons[theme.value]}
                <span>${theme.label}</span>
            `
            itemEl.classList.toggle('active', this.currentTheme == theme.value)

            this.listEl.appendChild(itemEl)

            itemEl.addEventListener('click', () => {
                this.setTheme(theme.value)
                this.component.classList.remove('active')
            })
        })

        this.component.appendChild(this.themeBtn)
        this.component.appendChild(this.listEl)
    }

    private setTheme(theme: Theme) {
        if (theme === this.currentTheme) return

        if (this.currentTheme === Theme.OS && this.osMediaQuery) {
            this.osMediaQuery.removeEventListener('change', this.handleOSThemeChange)
            this.osMediaQuery = null
        }

        this.currentTheme = theme
        localStorage.setItem(ThemeToggle.STORAGE_KEY, theme)

        this.applyTheme(theme)
        // this.emitThemeChange(theme)

        if (theme === Theme.OS) {
            this.listenToOSThemeChanges()
        }
    }

    private applyTheme(theme: Theme) {
        const root = document.documentElement

        root.classList.remove('theme-light', 'theme-dark')

        if (theme === Theme.Light) {
            root.classList.add('theme-light')
        } else if (theme === Theme.Dark) {
            root.classList.add('theme-dark')
        } else if (theme === Theme.OS) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
            root.classList.add(prefersDark ? 'theme-dark' : 'theme-light')
        }

        this.setThemeIcon(theme)
        this.emitThemeChange(this.getCurrentTheme())
    }

    private setThemeIcon(theme: Theme) {
        this.themeBtn.innerHTML = `<span>${this.icons[theme]}</span>`
        const options = this.listEl.querySelectorAll('.theme-option')
        Array.from(options).forEach(option => {
            const data = (option as HTMLElement).dataset.theme
            option.classList.toggle('active', data === theme)
        })
    }

    private listenToOSThemeChanges() {
        if (window.matchMedia) {
            this.osMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
            this.osMediaQuery.addEventListener('change', this.handleOSThemeChange)
        }
    }

    private handleOSThemeChange = () => {
        if (this.currentTheme === Theme.OS) {
            this.applyTheme(this.currentTheme)
        }
    }

    public getCurrentTheme(): Theme {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const theme = Theme.OS == this.currentTheme
            ? prefersDark ? Theme.Dark : Theme.Light
            : this.currentTheme
        return theme
    }

    public resetToOSTheme() {
        this.setTheme(Theme.OS)
    }

    public onThemeChange(listener: ThemeChangeListener) {
        this.themeChangeListeners.add(listener)
    }

    public offThemeChange(listener: ThemeChangeListener) {
        this.themeChangeListeners.delete(listener)
    }

    private emitThemeChange(newTheme: Theme) {
        this.themeChangeListeners.forEach(listener => {
            try {
                listener(newTheme)
            } catch (error) {
                console.error('Error in theme change listener:', error)
            }
        })
    }
}