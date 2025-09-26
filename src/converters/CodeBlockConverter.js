import { AbstractConverter } from './AbstractConverter'

export class CodeBlockConverter extends AbstractConverter {

    convert(text) {
        const textBlocks = text.split('\n\n')

        const taggedBlocks = textBlocks.map(block => {
            if (!this.#isCodeBlock(block)) {
                return block
            }

            const trimmedBlock = block.substring(3, block.length - 3)

            return `<pre><code>${trimmedBlock}</code></pre>`
        })

        return taggedBlocks.join('\n\n')
    }

    #isCodeBlock(block) {
        return block.startsWith('```')
    }

}