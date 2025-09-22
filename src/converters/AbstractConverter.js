export class AbstractConverter {

    constructor() {
        if (new.target === AbstractConverter) {
            throw new Error("AbstractConverter is an abstract class and can not be instantiated")
        }
    }

    convert() {
        throw new Error('convert() must be implemented by subclass')
    }
}