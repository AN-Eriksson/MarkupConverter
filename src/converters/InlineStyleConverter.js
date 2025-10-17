import { AbstractConverter } from './AbstractConverter.js'

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
  _runConvert(inputText) {
    const lines = inputText.split('\n')
    const converted = lines.map((line) => {
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
      const openingTagIndex = this.#findOpeningTagIndex(resultingLine, tag)
      const closingTagIndex = this.#findClosingTagIndex(
        resultingLine,
        tag,
        openingTagIndex,
        tagLength
      )

      if (this.#hasNoClosingTag(closingTagIndex)) {
        break
      }

      const textContent = this.#extractTextContent(
        resultingLine,
        openingTagIndex,
        tagLength,
        closingTagIndex
      )

      const textBefore = this.#extractTextBeforeElement(
        resultingLine,
        openingTagIndex
      )
      const textAfter = this.#extractTextAfterElement(
        resultingLine,
        closingTagIndex,
        tagLength
      )

      resultingLine = this.#assembleResultingLine(
        textBefore,
        htmlTag,
        textContent,
        textAfter
      )
    }

    return resultingLine
  }

  #findOpeningTagIndex(resultingLine, tag) {
    return resultingLine.indexOf(tag)
  }

  #findClosingTagIndex(resultingLine, tag, openingTagIndex, tagLength) {
    return resultingLine.indexOf(tag, openingTagIndex + tagLength)
  }

  #hasNoClosingTag(closingTagIndex) {
    return closingTagIndex === -1
  }

  #extractTextContent(resultingLine, openingTag, tagLength, closingTag) {
    return resultingLine.substring(openingTag + tagLength, closingTag)
  }

  #extractTextBeforeElement(resultingLine, openingTag) {
    return resultingLine.substring(0, openingTag)
  }

  #extractTextAfterElement(resultingLine, closingTag, tagLength) {
    return resultingLine.substring(closingTag + tagLength)
  }

  #assembleResultingLine(textBefore, htmlTag, textContent, textAfter) {
    return textBefore + `<${htmlTag}>${textContent}</${htmlTag}>` + textAfter
  }
}
