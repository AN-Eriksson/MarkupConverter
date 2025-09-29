import { AbstractConverter } from './AbstractConverter.js'

/**
 * Converts markdown headings to HTML heading tags.
 *
 * This converter processes markdown heading syntax and converts
 * them to their corresponding HTML heading tags. It supports
 * heading levels 1 through 6 and preserves the heading text content.
 *
 * @extends AbstractConverter
 */
export class HeadingConverter extends AbstractConverter {
  /**
   * Converts markdown headings to HTML heading tags.
   *
   * Processes the input text line by line, identifying markdown heading syntax
   * and converting it to HTML heading tags. Lines that are not headings are
   * left unchanged.
   *
   * @param {string} text - The input text containing markdown heading syntax
   * @returns {string} - Text with markdown headings converted to HTML heading tags
   * @override
   */
  _runConvert(text) {
    const lines = text.split('\n')

    const convertedLines = lines.map((line) => {
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
