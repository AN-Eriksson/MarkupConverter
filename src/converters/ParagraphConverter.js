import { AbstractConverter } from "./AbstractConverter";

export class ParagraphConverter extends AbstractConverter {
    /**
     * Converts text blocks into HTML paragraphs while preserving headings
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
            const lines = block.split('\n')

            const linesWithoutHeadings = lines.filter(line => {
                return !this.#isHeading(line)
            })

            if (linesWithoutHeadings.length > 0) {
                const textContent = linesWithoutHeadings.join('\n')
                return `<p>${textContent}</p>`
            }

            return block
        })

        return taggedBlocks.join('\n\n')
    }

    #isHeading(line) {
        if (line.startsWith('<h') || line.startsWith('#')) {
            return true
        }

        return false
    }
}