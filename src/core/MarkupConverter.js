import { HeadingConverter } from "../converters/HeadingConverter"

export class MarkupConverter {
    #converters

    constructor() {
        this.#converters = new Map([
            ['heading', new HeadingConverter()]
        ])
    }


    convert(text) {
        return this.#converters.get('heading').convert(text)
    }
}