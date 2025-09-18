import { AbstractConverter } from "./AbstractConverter";

export class ParagraphConverter extends AbstractConverter {

    convert(text) {
        console.log(text)
        const textBlocks = text.split('\n\n')
    }

}