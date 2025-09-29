import { AbstractConverter } from './AbstractConverter'

/**
 * Converts markdown lists to HTML list elements.
 *
 * This converter processes both ordered and unordered lists
 * by identifying list blocks and converting them to their corresponding HTML
 * structures.
 *
 * @extends AbstractConverter
 */
export class ListConverter extends AbstractConverter {
  /**
   * Converts markdown lists to HTML list elements.
   *
   * Processes text blocks separated by double newlines, identifying and converting
   * markdown list syntax to HTML. Supports both unordered lists (- item) and
   * ordered lists (1. item). Non-list blocks are left unchanged.
   *
   * @param {string} text - The input text containing markdown list syntax
   * @returns {string} - Text with markdown lists converted to HTML list elements
   * @override
   */
  _runConvert(text) {
    const textBlocks = text.split('\n\n')
    const taggedBlocks = textBlocks.map((block) => {
      if (this.#isUnorderedList(block)) {
        return this.#convertUnorderedList(block)
      }

      if (this.#isOrderedList(block)) {
        return this.#convertOrderedList(block)
      }

      return block
    })

    return taggedBlocks.join('\n\n')
  }

  #isUnorderedList(textBlock) {
    const firstLine = textBlock.split('\n')[0]
    return firstLine.startsWith('- ')
  }

  #isOrderedList(textBlock) {
    const firstLine = textBlock.split('\n')[0]
    return firstLine.trim().match(/^\d+\.\s/)
  }

  #convertUnorderedList(block) {
    const lines = block.split('\n')

    const listItems = lines.map((line) => {
      const itemTextContent = line.substring(2)
      return `<li>${itemTextContent}</li>`
    })

    const joinedList = listItems.join('\n')
    return `<ul>\n${joinedList}\n</ul>`
  }

  #convertOrderedList(block) {
    const lines = block.split('\n')

    const listItems = lines.map((line) => {
      const itemTextContent = line.substring(3)
      return `<li>${itemTextContent}</li>`
    })

    const joinedList = listItems.join('\n')
    return `<ol>\n${joinedList}\n</ol>`
  }
}
