import { AbstractConverter } from "./AbstractConverter"

export class ListConverter extends AbstractConverter {

    convert(text) {
        const textBlocks = text.split('\n\n')

        console.log('Text blocks:')
        console.log(textBlocks)

        // Ordered lists starts with 1. 
        // Unordered lists with - 
        console.log(textBlocks[0].startsWith('1. '))
        console.log(textBlocks[0].startsWith('- '))

        const listElements = textBlocks.map(block => {
            const lines = block.split('\n')

            console.log('Lines:')
            console.log(lines)
        })
    }

    #isOrderedList(line) {

    }

    #isUnorderedList(line) {

    }
}