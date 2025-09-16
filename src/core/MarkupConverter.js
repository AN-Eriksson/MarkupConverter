import { HeadingConverter } from "../converters/HeadingConverter"
import { InlineStyleConverter } from "../converters/InlineStyleConverter"

export class MarkupConverter {
    #converters

    constructor() {
        this.#converters = new Map([
            ['heading', new HeadingConverter()],
            ['inlineStyle', new InlineStyleConverter()]
        ])
    }


    convert(text) {
        let result = text

        for (const [name, converter] of this.#converters) {
            result = converter.convert(result)
        }

        return result
    }
}