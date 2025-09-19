import { AbstractConverter } from "./AbstractConverter"

export class ListConverter extends AbstractConverter {

    convert(text) {
        const textBlocks = text.split('\n\n')
        const taggedBlocks = textBlocks.map(block => {

            if (this.#isUnorderedList(block)) {
                console.log(block)
                return this.#convertUnorderedList(block)
            }

            // if (this.#isOrderedList(block)) {
            //     return this.#convertOrderedList(block)
            // }

            return block
        })

        return taggedBlocks.join('\n\n')
    }

    #isUnorderedList(textBlock) {
        const firstLine = textBlock.split('\n')[0]
        return firstLine.startsWith('- ')
    }

    #isOrderedList(textBlock) {
        const firstLine = textBlock.split(('\n'))[0]
        return firstLine.trim().match(/^\d+\.\s/)
    }

    #convertUnorderedList(block) {
        const lines = block.split('\n')

        const listItems = lines.map(line => {
            const itemTextContent = line.substring(2)
            return `<li>${itemTextContent}</li>`
        })

        const joinedList = listItems.join('\n')

        console.log(joinedList)
        console.log(`<ul>\n${joinedList}\n</ul>`)

        return `<ul>\n${joinedList}\n</ul>`
    }


}