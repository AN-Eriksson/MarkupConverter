import { AbstractConverter } from "./AbstractConverter";

export class HeadingConverter extends AbstractConverter {

    convert(inputText) {
        const lines = inputText.split('\n')

        const converted = lines.map(line => {
            if (line.startsWith('#')) {
                return this.#convertHeading(line)
            }

            return line
        })

        return converted.join('\n')
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