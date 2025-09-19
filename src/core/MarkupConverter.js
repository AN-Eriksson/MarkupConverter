import { HeadingConverter } from "../converters/HeadingConverter"
import { InlineStyleConverter } from "../converters/InlineStyleConverter"
import { ListConverter } from "../converters/ListConverter"
import { ParagraphConverter } from "../converters/ParagraphConverter"

export class MarkupConverter {
    #converters

    constructor() {
        this.#converters = new Map([
            ['heading', new HeadingConverter()],
            ['lists', new ListConverter],
            ['paragraph', new ParagraphConverter],
            ['inlineStyle', new InlineStyleConverter()],
            
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