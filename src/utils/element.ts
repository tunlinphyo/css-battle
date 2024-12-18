export abstract class BaseElement {
    public component: HTMLElement

    constructor(selector: string) {
        this.component = this.getElement(selector)
    }

    protected createElement<T extends HTMLElement>(elementName: string, classes: string[] = [], attributes: { [key: string]: string } = {}): T {
        const element = document.createElement(elementName) as T

        if (classes.length > 0) {
            element.classList.add(...classes)
        }

        for (const key in attributes) {
            if (attributes.hasOwnProperty(key)) {
                element.setAttribute(key, attributes[key])
            }
        }

        return element
    }

    protected replaceElement(oldElement: HTMLElement, newElement: HTMLElement) {
        if (oldElement.parentNode) {
            oldElement.parentNode.replaceChild(newElement, oldElement);
        } else {
            console.log('Parent node not found for the element to be replaced.');
            // throw new Error('Parent node not found for the element to be replaced.');
        }
    }

    protected getElement<T extends HTMLElement>(selector: string, parent: Document | HTMLElement = document): T {
        const element = parent.querySelector(selector) as T;
        if (!element) {
            console.log(`Element with selector ${selector} not found.`);
            // throw new Error(`Element with selector ${selector} not found.`);
        }
        return element;
    }
}