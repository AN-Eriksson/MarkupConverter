import { AbstractConverter } from './AbstractConverter'

/**
 * Converts plain text blocks into HTML paragraphs while preserving existing HTML elements.
 *
 * This converter processes text by splitting it into blocks separated by double newlines,
 * then wraps non-HTML blocks in paragraph tags. It preserves headings and lists that
 * have already been converted to HTML by other converters.
 *
 * @extends AbstractConverter
 */
export class ParagraphConverter extends AbstractConverter {
  /**
   * Converts text blocks into HTML paragraphs while preserving headings and lists
   *
   * @param {string} text - The input text to convert
   * @returns {string} - Text with plain text blocks wrapped in <p> tags
   *
   * @override
   */
  convert(text) {
    const textBlocks = text.split('\n\n')

    const taggedBlocks = textBlocks.map((block) => {
      if (this.#isListBlock(block)) {
        return block
      }

      if (this.#isHeadingBlock(block)) {
        return block
      }

      return `<p>${block}</p>`
    })

    return taggedBlocks.join('\n\n')
  }

  #isListBlock(block) {
    return block.startsWith('<ul>') || block.startsWith('<ol>')
  }

  #isHeadingBlock(block) {
    return block.startsWith('<h') || block.startsWith('#')
  }
}
