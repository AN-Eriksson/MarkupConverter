import { AbstractConverter } from "./AbstractConverter";

export class HeadingConverter extends AbstractConverter {
    convert(text) {
        const lines = text.split('\n')

        const convertedLines = lines.map(line => {
            if (this.#isMarkdownHeading(line)) {
                return this.#convertHeading(line)
            }

            return line
        })

        return convertedLines.join('\n')
    }

    #isMarkdownHeading(line) {
        return line.trim().match(/^#{1,6}\s+/)
    }

    #convertHeading(line) {
        const headingLevel = this.#getHeadingLevel(line)
        const headingTextContent = this.#getHeadingText(line, headingLevel)

        return `<h${headingLevel}>${headingTextContent}</h${headingLevel}>`
    }

    #getHeadingLevel(line) {
        let headingLevel = 0
        for (let i = 0; i < line.length; i++) {
            if (line[i] === '#') {
                headingLevel++
            }
        }

        return headingLevel
    }

    #getHeadingText(line, headingLevel) {
        return line.substring(headingLevel + 1)

    }
}