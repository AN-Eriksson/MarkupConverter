import { AbstractConverter } from './AbstractConverter'

/**
 * Converts markdown code blocks to HTML pre and code elements.
 *
 * This converter processes markdown code blocks (text enclosed in triple backticks)
 * and converts them to HTML <pre><code> elements. It works by splitting text into
 * blocks and identifying those that start with triple backticks.
 *
 * @extends AbstractConverter
 */
export class CodeBlockConverter extends AbstractConverter {
  /**
   * Converts markdown code blocks to HTML pre and code elements.
   *
   * Processes text blocks separated by double newlines, identifying code blocks
   * (text starting and ending with triple backticks) and converting them to
   * HTML <pre><code> elements. Non-code blocks are left unchanged.
   *
   * @param {string} text - The input text containing markdown code block syntax
   * @returns {string} -  Text with markdown code blocks converted to HTML elements
   * @override
   */
  _runConvert(text) {
    const textBlocks = text.split('\n\n')

    const taggedBlocks = textBlocks.map((block) => {
      if (!this.#isCodeBlock(block)) {
        return block
      }

      const textContent = block.substring(3, block.length - 3)

      return `<pre><code>${textContent}</code></pre>`
    })

    return taggedBlocks.join('\n\n')
  }

  #isCodeBlock(block) {
    return block && block.startsWith('```') && block.endsWith('```')
  }
}
