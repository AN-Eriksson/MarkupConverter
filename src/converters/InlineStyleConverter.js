import { AbstractConverter } from "./AbstractConverter"

export class InlineStyleConverter extends AbstractConverter {

    convertLine(line) {
        if (line.includes('**')) {
            line = this.#convertToBold(line)
        }

        if (line.includes('*')) {
            line = this.#convertToItalic(line)
        }

        return line
    }


    #convertToBold(line) { }

    #convertToItalic(line) { }

}