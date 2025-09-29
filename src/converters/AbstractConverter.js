/**
 * Abstract base class for all markup converters.
 *
 * This class defines the interface that all converters must implement and prevents
 * direct instantiation. All concrete converter classes must extend this class
 * and implement the convert() method.
 *
 * @abstract
 */
export class AbstractConverter {
  constructor() {
    if (new.target === AbstractConverter) {
      throw new Error(
        'AbstractConverter is an abstract class and can not be instantiated'
      )
    }
  }

  /**
   * Converts text using the specific converter implementation.
   *
   * @param {string} text - The input text to convert
   * @returns {string} - The converted text
   * @throws {TypeError} - If text is not a string
   */
  convert(text) {
    if (typeof text !== 'string') {
      throw new TypeError(`Expected string, received ${typeof text}`)
    }

    return this._runConvert(text)
  }

  /**
   * Converts input text using the specific converter's logic.
   * Contains the actual conversion logic.
   * This method must be implemented by subclasses.
   *
   * @abstract
   * @throws {Error} - If not implemented by subclass
   */
  // eslint-disable-next-line no-unused-vars
  _runConvert(text) {
    throw new Error('convert() must be implemented by subclass')
  }
}
