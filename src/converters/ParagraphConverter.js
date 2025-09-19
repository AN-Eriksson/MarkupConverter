import { AbstractConverter } from "./AbstractConverter";

export class ParagraphConverter extends AbstractConverter {
    /**
     * Converts text blocks into HTML paragraphs while preserving headings and lists
     * Overrides AbstractConverter.convert() to handle block-level paragraph processing
     * 
     * @param {string} text - The input text to convert
     * @returns {string} Text with non-heading blocks wrapped in <p> tags
     * 
     * @override
     */
    convert(text) {
        const textBlocks = text.split('\n\n')

        const taggedBlocks = textBlocks.map(block => {
            if (this.#isListBlock(block)) {
                return block
            }

            if (this.#isHeadingBlock(block)) {
                return block
            }

            return `<p>${block}</p>`
        })

        return taggedBlocks.join('\n\n')
    }

    #isListBlock(block) {
        return block.startsWith('<ul>') || block.startsWith('<ol>')
    }

    #isHeadingBlock(block) {
        return block.startsWith('<h') || block.startsWith('#')
    }
}