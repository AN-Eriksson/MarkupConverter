import { AbstractConverter } from "./AbstractConverter";

export class HeadingConverter extends AbstractConverter {

    convert(input) {
        // return '<h1>Hello 1DV610!</h1>'

        const lines = input.split('\n') // split into lines

        const converted = lines.map(line => { // map the lines and run conversion
            if (line.startsWith('#')) {
                return this.#convertHeading(line)
            }

            return line
        })

        return converted.join('\n') // Reassemble to string

    }

    #convertHeading(line) {
        let numberOfHashChars = 0


        for (let i = 0; i < line.length; i++) { // Count number of hashes (heading level 1-6)
            if (line[i] === '#') {
                numberOfHashChars++
            }
        }

        const headingTextContent = line.substring(numberOfHashChars + 1) // Get the text after the hashes

        return `<h${numberOfHashChars}>${headingTextContent}</h${numberOfHashChars}>`



    }
}