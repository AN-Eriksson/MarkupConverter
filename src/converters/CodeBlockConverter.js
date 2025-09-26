import { AbstractConverter } from './AbstractConverter'

export class CodeBlockConverter extends AbstractConverter {

    convert(text) {
        const textBlocks = text.split('\n\n')

        const taggedBlocks = textBlocks.map(block => {
            if (!this.#isCodeBlock(block)) {
                return block
            }

            console.log('block:' + block)
            
            console.log(block.substring(3, block.length - 3))


            return `${block}`
        })

        return taggedBlocks.join('\n\n')
    }

    #isCodeBlock(block) {
        return block.startsWith('```')
    }

}