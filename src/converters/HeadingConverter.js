import { AbstractConverter } from "./AbstractConverter";

export class HeadingConverter extends AbstractConverter {
    convertLine(line) {
        if (line.startsWith('#')) {
            return this.#convertHeading(line)
        }

        return line
    }


    #convertHeading(line) {
        let headingLevel = 0
        for (let i = 0; i < line.length; i++) {
            if (line[i] === '#') {
                headingLevel++
            }
        }

        const headingTextContent = line.substring(headingLevel + 1)

        return `<h${headingLevel}>${headingTextContent}</h${headingLevel}>`

    }
}