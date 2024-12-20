import { BaseComponent } from "../utils/page"
import { Breadcrumbs } from "./breadcrumbs"


export class AboutPage extends BaseComponent {
    constructor(private breadcrumbs: Breadcrumbs) {
        super('about')
        this.render()
    }

    private render() {

        this.breadcrumbs.render([
            {
                url: '/',
                name: 'Battles',
                current: false
            },
            {
                url: `/about`,
                name: 'About',
                current: true
            }
        ])

        const containerEl = this.createElement('article')
        const titleEl = this.createTitle('h1', 'About the Website')
        const approachTitle = this.createTitle('h2', 'My Approach')
        const whyShartTitle = this.createTitle('h2', 'Why I Share My Work')
        const joinMeTitle = this.createTitle('h2', 'Join Me on This Journey')

        const aboutMe = this.createParagraph(`
            Welcome to my CSSBattle showcase! I'm
            <a href="https://tun-lin-phyo.web.app" target="_blank">
                Tun Lin Phyo
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="var(--primary)" d="M3.771,13.38c-.198,.239-.483,.363-.771,.363-.224,0-.45-.075-.636-.229-1.502-1.24-2.363-3.068-2.363-5.015C0,4.916,2.916,2,6.5,2h5c3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5c-.552,0-1-.447-1-1s.448-1,1-1c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5H6.5c-2.481,0-4.5,2.019-4.5,4.5,0,1.348,.597,2.613,1.637,3.472,.426,.352,.486,.982,.134,1.408Zm17.866-2.895c-.426-.35-1.056-.29-1.408,.135-.352,.426-.292,1.057,.134,1.408,1.04,.858,1.637,2.124,1.637,3.472,0,2.481-2.019,4.5-4.5,4.5h-5c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5c.552,0,1-.447,1-1s-.448-1-1-1c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5h5c3.584,0,6.5-2.916,6.5-6.5,0-1.946-.861-3.774-2.363-5.015Z"/>
                </svg></a>, a passionate front-end developer
            dedicated to mastering the art of CSS. This website is a curated collection of my solutions
            to challenges on
            <a href="https://cssbattle.dev" target="_blank">
                CSSBattle
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="16" height="16">
                    <path fill="var(--primary)" d="M3.771,13.38c-.198,.239-.483,.363-.771,.363-.224,0-.45-.075-.636-.229-1.502-1.24-2.363-3.068-2.363-5.015C0,4.916,2.916,2,6.5,2h5c3.584,0,6.5,2.916,6.5,6.5s-2.916,6.5-6.5,6.5c-.552,0-1-.447-1-1s.448-1,1-1c2.481,0,4.5-2.019,4.5-4.5s-2.019-4.5-4.5-4.5H6.5c-2.481,0-4.5,2.019-4.5,4.5,0,1.348,.597,2.613,1.637,3.472,.426,.352,.486,.982,.134,1.408Zm17.866-2.895c-.426-.35-1.056-.29-1.408,.135-.352,.426-.292,1.057,.134,1.408,1.04,.858,1.637,2.124,1.637,3.472,0,2.481-2.019,4.5-4.5,4.5h-5c-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5c.552,0,1-.447,1-1s-.448-1-1-1c-3.584,0-6.5,2.916-6.5,6.5s2.916,6.5,6.5,6.5h5c3.584,0,6.5-2.916,6.5-6.5,0-1.946-.861-3.774-2.363-5.015Z"/>
                </svg></a>,
            a platform that pits developers against creative coding tasks
            to refine their CSS skills.`)

        const myApproach = this.createParagraph(`
            While many participants on CSSBattle focus on minimizing character count—a practice known as
            “code golfing”—I take a different path. My goal is to achieve a 100% match with the target designs,
            emphasizing precision, clarity, and the use of the latest CSS patterns and best practices.`)

        const whyIShare = this.createParagraph(`
            I believe in the power of community and shared knowledge, and by showcasing my solutions,
            I aim to inspire others by demonstrating how modern CSS techniques can solve diverse and
            challenging problems. Additionally, I strive to foster learning by providing a resource for
            fellow developers to explore different approaches and acquire new CSS patterns. This platform
            also allows me to track my progress, documenting my journey of continuous improvement and adaptation
            to evolving web standards. Moreover, it enables me to connect with peers who share a passion for CSS
            and creative problem-solving, fostering meaningful engagement and collaboration.`)

        const joinMe = this.createParagraph(`
            Whether you’re a fellow CSS enthusiast, a beginner looking to enhance your skills, or
            someone interested in creative coding challenges, I invite you to explore my work. Feel
            free to reach out, share your thoughts, or collaborate on projects. Let’s push the boundaries
            of what’s possible with CSS together!`)

        containerEl.appendChild(titleEl)
        containerEl.appendChild(aboutMe)
        containerEl.appendChild(approachTitle)
        containerEl.appendChild(myApproach)
        containerEl.appendChild(whyShartTitle)
        containerEl.appendChild(whyIShare)
        containerEl.appendChild(joinMeTitle)
        containerEl.appendChild(joinMe)

        this.component.appendChild(containerEl)
    }

    private createParagraph(text: string) {
        const pEl = this.createElement('p', ['paragraph'])
        pEl.innerHTML = text

        return pEl
    }

    private createTitle(tagName: string, text: string) {
        const elem = this.createElement(tagName)
        elem.textContent = text

        return elem
    }
}