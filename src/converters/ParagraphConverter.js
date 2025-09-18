import { AbstractConverter } from "./AbstractConverter";

export class ParagraphConverter extends AbstractConverter {

    convert(text) {
        const textBlocks = text.split('\n\n')

        const taggedBlocks = textBlocks.map(block => {
            const lines = block.split('\n')

            const linesWithoutHeadings = lines.filter(line => {
                return !this.#isHeading(line)
            })


            const textContent = linesWithoutHeadings.join('\n')
            return `<p>${textContent}</p>`
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