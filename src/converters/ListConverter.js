import { AbstractConverter } from "./AbstractConverter"

export class ListConverter extends AbstractConverter {

    convert(text) {
        const textBlocks = text.split('\n\n')

        console.log('Text blocks:')
        console.log(textBlocks)

        const taggedBlocks = textBlocks.map(block => {

            if (this.#isUnorderedList(block)) {
                return this.#convertUnorderedList(block)
            }

            if (this.#isOrderedList(block)) {
                return this.#convertOrderedList(block)
            }

            return block
        })

        return taggedBlocks.join('\n\n')
    }

    #isOrderedList(textBlock) {
        const firstLine = textBlock.split(('\n'))[0]
        return firstLine.trim().match(/^\d+\.\s/)
    }

    #isUnorderedList(textBlock) {
        const firstLine = textBlock.split('\n')[0]
        return firstLine.startsWith('- ')

    }
}