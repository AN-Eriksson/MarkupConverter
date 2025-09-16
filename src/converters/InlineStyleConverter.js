import { AbstractConverter } from "./AbstractConverter"

export class InlineStyleConverter extends AbstractConverter {

    convertLine(line) {
        if (line.includes('**')) {
            line = this.#convertBold(line)
        }

        if (line.includes('*')) {
            line = this.#convertItalic(line)
        }

        // if (line.includes('~~')) {
        //     line = this.#convertStrikethrough(line)
        // }

        return line
    }


    #convertBold(line) {
        let resultingLine = line

        while (resultingLine.includes('**')) {
            const firstOccurance = resultingLine.indexOf('**')
            const secondOccurrence = resultingLine.indexOf('**', firstOccurance + 2)

            // If there is no second occurance, stop the loop.
            if (secondOccurrence === -1) {
                break
            }

            const textContent = resultingLine.substring(firstOccurance + 2, secondOccurrence)

            const textBefore = resultingLine.substring(0, firstOccurance)
            const textAfter = resultingLine.substring(secondOccurrence + 2)

            resultingLine = textBefore + `<strong>${textContent}</strong>` + textAfter
        }

        return resultingLine
    }

    #convertItalic(line) {
        let resultingLine = line

        while (resultingLine.includes('*')) {
            const firstOccurance = resultingLine.indexOf('*')
            const secondOccurrence = resultingLine.indexOf('*', firstOccurance + 1)

            // If there is no second occurance, stop the loop.
            if (secondOccurrence === -1) {
                break
            }

            const textContent = resultingLine.substring(firstOccurance + 1, secondOccurrence)

            const textBefore = resultingLine.substring(0, firstOccurance)
            const textAfter = resultingLine.substring(secondOccurrence + 1)

            resultingLine = textBefore + `<em>${textContent}</em>` + textAfter
        }

        return resultingLine
    }

    #convertStrikethrough(line) {
        // Find index of first and second ~~
        // convert substring with textcontent to html, ~~ textcontent ~~ ---> <del>textcontent</del>
        // Search again until no more ~~.
    }

}