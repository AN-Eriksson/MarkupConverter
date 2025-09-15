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
        // Find index of first and second **
        const firstOccurance = line.indexOf('**')
        const secondOccurrence = line.indexOf('**', firstOccurance + 2)

        const textToBold = line.substring(firstOccurance + 2, secondOccurrence)

        return `<strong>${textToBold}</strong>`

        // convert substring with textcontent to html, ** textcontent ** ---> <strong>textcontent</strong>
        // Search again until no more **.
        // How to handle that lists uses *?
    }

    #convertItalic(line) {
        // Find index of first and second *
        // convert substring with textcontent to html, * textcontent * ---> <em>textcontent</em>
        // Search again until no more *.
        // How to handle that lists uses *?
    }

    #convertStrikethrough(line) {
        // Find index of first and second ~~
        // convert substring with textcontent to html, ~~ textcontent ~~ ---> <del>textcontent</del>
        // Search again until no more ~~.
    }

}