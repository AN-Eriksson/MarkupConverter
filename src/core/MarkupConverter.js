import { HeadingConverter } from "../converters/HeadingConverter"
import { InlineStyleConverter } from "../converters/InlineStyleConverter"
import { ListConverter } from "../converters/ListConverter"
import { ParagraphConverter } from "../converters/ParagraphConverter"

/**
 * Main markup converter that controls all individual converters.
 * 
 * This class serves as the primary interface for converting markdown text to HTML.
 * It keeps a collection of specialized converters and applies them in the correct
 * sequence to produce properly formatted HTML output.
 */
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

    /**
     * Converts markdown text to HTML.
     * 
     * Processes the input text through all converters in sequence, with each converter
     * handling its specific markdown syntax. The order of conversion is important to
     * ensure proper HTML structure and avoid conflicts between different converters.
     * 
     * @param {string} text - The markdown text to convert
     * @returns {string} - The converted HTML text
     */
    convert(text) {
        let result = text

        for (const [name, converter] of this.#converters) {
            result = converter.convert(result)
        }

        return result
    }
}