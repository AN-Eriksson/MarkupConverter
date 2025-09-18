import { AbstractConverter } from "./AbstractConverter";

export class ParagraphConverter extends AbstractConverter {

    convert(text) {
        console.log(text)
        const textBlocks = text.split('\n\n')

        console.log(textBlocks)

        const taggedBlocks = textBlocks.map(block => {
            const lines = block.split('\n')
            const textContent = lines.join('\n')
            console.log(textContent)
            // return `<p>${content}</p>`
        })


        return taggedBlocks.join('\n\n')
    }

}