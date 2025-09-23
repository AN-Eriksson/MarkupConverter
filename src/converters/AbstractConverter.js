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
            throw new Error("AbstractConverter is an abstract class and can not be instantiated")
        }
    }

    /**
     * Converts input text using the specific converter's logic.
     * 
     * This method must be implemented by subclasses.
     * 
     * @abstract
     * @throws {Error} - If not implemented by subclass
     */
    convert() {
        throw new Error('convert() must be implemented by subclass')
    }
}