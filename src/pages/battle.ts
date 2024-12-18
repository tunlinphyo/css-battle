import { BaseComponent } from "../utils/page"
import { Breadcrumbs } from "./breadcrumbs"
import { Battles } from '../utils/battles'
import { AceEditor } from "../utils/editor"
import { Theme, ThemeToggle } from "./theme";

export class BattlePage extends BaseComponent {
    private editor: AceEditor | undefined;
    constructor(id: string, battleId: string, private breadcrumbs: Breadcrumbs, private battles: Battles, private theme: ThemeToggle) {
        super('battle')
        this.render(Number(id), Number(battleId))
        this.eventListeners()
    }

    private eventListeners() {
        this.theme.onThemeChange((theme: Theme) => {
            if (this.editor) {
                this.editor.setTheme(theme == Theme.Light ? AceEditor.LIGHT : AceEditor.DARK)
            }
        })
    }

    private render(id: number, battleId: number) {
        const battle = this.battles.battles(id)
        const item = this.battles.battle(battleId)
        if (!(battle && item)) return

        this.breadcrumbs.render([
            {
                url: '/',
                name: 'Battles',
                current: false
            },
            {
                url: `/battles/${id}`,
                name: `${battle.name}`,
                current: false
            },
            {
                url: `/battles/${id}/${battleId}`,
                name: item.name,
                current: true
            }
        ])

        const nameEl = this.createElement('h2')
        nameEl.textContent = item.name

        const [viewEl, iframeEl] = this.createView()
        const codeViewEl = this.createCodeview(item.code, iframeEl)

        const codeEl = this.createElement('div', ['battle-code'])
        const copyBtn = this.copyButton()

        codeEl.appendChild(codeViewEl)
        codeEl.appendChild(copyBtn)

        const detailEl = this.createElement('div', ['battle-detail'])
        const pEl = this.createElement('p')
        pEl.innerHTML = `
            To get your score, just copy the code and paste it on
            <a href="https://cssbattle.dev/play/${item.id}" target="_blank">
                the CSSBattle website
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="var(--primary)" d="M3.771,13.38c-.198,.239-.483,.363-.771,.363-.224,0-.45-.075-.636-.229-1.502-1.24-2.363-3.068-2.363-5.015C0,4.916,2.916,2,6.5,2h5c3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5c-.552,0-1-.447-1-1s.448-1,1-1c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5H6.5c-2.481,0-4.5,2.019-4.5,4.5,0,1.348,.597,2.613,1.637,3.472,.426,.352,.486,.982,.134,1.408Zm17.866-2.895c-.426-.35-1.056-.29-1.408,.135-.352,.426-.292,1.057,.134,1.408,1.04,.858,1.637,2.124,1.637,3.472,0,2.481-2.019,4.5-4.5,4.5h-5c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5c.552,0,1-.447,1-1s-.448-1-1-1c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5h5c3.584,0,6.5-2.916,6.5-6.5,0-1.946-.861-3.774-2.363-5.015Z"/>
                </svg>.
            </a>
            You can also make changes to the code here and see the updates right away!
        `

        detailEl.appendChild(nameEl)
        detailEl.appendChild(viewEl)
        detailEl.appendChild(pEl)

        this.component.appendChild(codeEl)
        this.component.appendChild(detailEl)

        this.insertHTMLIntoIframe(iframeEl, item.code)
    }

    private createCodeview(initCode: string, iframeEl: HTMLIFrameElement) {
        const container = this.createElement('div', ['code-view'])

        this.editor = new AceEditor({
            container,
            theme: this.theme.getCurrentTheme() == Theme.Light ? AceEditor.LIGHT : AceEditor.DARK,
            value: initCode,
        });

        this.editor.onChange((value: string) => {
            this.insertHTMLIntoIframe(iframeEl, value)
        })

        return container
    }

    private createView(): [HTMLElement, HTMLIFrameElement] {
        const containerEl = this.createElement('div', ['view-container'])
        const iframeEl = this.createElement<HTMLIFrameElement>('iframe', [], { width: '400px', height: '300px' })

        containerEl.appendChild(iframeEl)

        return [containerEl, iframeEl]
    }

    private insertHTMLIntoIframe(iframe: HTMLIFrameElement, htmlContent: string): void {
        if (!iframe.contentDocument || !iframe.contentWindow) {
            console.error("Iframe is not loaded or accessible.")
            return
        }

        const iframeDoc = iframe.contentDocument
        iframeDoc.open()
        iframeDoc.write("")
        iframeDoc.close()

        iframeDoc.open()
        iframeDoc.write(htmlContent)
        iframeDoc.close()
    }

    private copyButton() {
        const copyButton = this.createElement('button', ['copy-button'])
        copyButton.innerHTML = `<span>
            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="18" height="18">
                <path fill="currentColor" d="m16,2h-.171c-.413-1.164-1.525-2-2.829-2h-2c-1.304,0-2.416.836-2.829,2h-.171c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h8c2.757,0,5-2.243,5-5V7c0-2.757-2.243-5-5-5Zm-5,0h2c.552,0,1,.449,1,1s-.448,1-1,1h-2c-.552,0-1-.449-1-1s.448-1,1-1Zm8,17c0,1.654-1.346,3-3,3h-8c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h.172c.413,1.164,1.524,2,2.828,2h2c1.304,0,2.415-.836,2.828-2h.172c1.654,0,3,1.346,3,3v12Z"/>
            </svg>
        </span>`

        copyButton.addEventListener("click", () => {
            if (!this.editor) return
            const codeToCopy = this.editor.getValue()
            navigator.clipboard.writeText(codeToCopy)
            .then(() => {
                console.log("Code copied to clipboard!")
                copyButton.classList.add('copied')
                const timeout = setTimeout(() => {
                    clearTimeout(timeout)
                    copyButton.classList.remove('copied')
                }, 1000)
            })
            .catch((err) => {
                console.error("Failed to copy code: ", err)
            })
        });

        return copyButton
    }
}