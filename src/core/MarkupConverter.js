import { HeadingConverter } from "../converters/HeadingConverter"

export class MarkupConverter {
    #converters = []

    constructor() {
        this.#converters = [
            new HeadingConverter()
        ]
    }


    convert(text) {
        return this.#converters[0].convert(text)
    }
}