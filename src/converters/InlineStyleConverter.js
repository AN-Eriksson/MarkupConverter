import { AbstractConverter } from "./AbstractConverter"

/**
 * Converts inline markdown formatting to HTML tags.
 * 
 * This converter processes inline text formatting such as bold, italic, strikethrough,
 * and inline code. It works line-by-line to find markdown syntax and replace it with
 * appropriate HTML tags while preserving the text content.
 * 
 * @extends AbstractConverter
 */
export class InlineStyleConverter extends AbstractConverter {

    /**
     * Converts inline markdown formatting to HTML tags.
     * 
     * Processes the input text line by line, converting markdown syntax for bold (**text**),
     * italic (*text*), strikethrough (~~text~~), and inline code (`text`) to their
     * corresponding HTML tags.
     * 
     * @param {string} inputText - The input text containing markdown inline formatting
     * @returns {string} Text with markdown inline formatting converted to HTML tags
     * @override
     */
    convert(inputText) {
        const lines = inputText.split('\n')
        const converted = lines.map(line => {
            return this.#convertLine(line)
        })

        return converted.join('\n')
    }

    #convertLine(line) {
        if (line.includes('**')) {
            line = this.#convertInlineStyle('**', line)
        }

        if (line.includes('*')) {
            line = this.#convertInlineStyle('*', line)
        }

        if (line.includes('~~')) {
            line = this.#convertInlineStyle('~~', line)
        }

        if (line.includes('`')) {
            line = this.#convertInlineStyle('`', line)
        }

        return line
    }

    #convertInlineStyle(tag, line) {
        let resultingLine = line
        const tagLength = tag.length

        const htmlTagMap = {
            '**': 'strong',
            '*': 'em',
            '~~': 'del',
            '`': 'code'
        }

        const htmlTag = htmlTagMap[tag]

        while (resultingLine.includes(tag)) {
            const openingTag = resultingLine.indexOf(tag)
            const closingTag = resultingLine.indexOf(tag, openingTag + tagLength)

            if (closingTag === -1) {
                break
            }

            const textContent = resultingLine.substring(openingTag + tagLength, closingTag)

            const textBefore = resultingLine.substring(0, openingTag)
            const textAfter = resultingLine.substring(closingTag + tagLength)

            resultingLine = textBefore + `<${htmlTag}>${textContent}</${htmlTag}>` + textAfter
        }

        return resultingLine
    }
}