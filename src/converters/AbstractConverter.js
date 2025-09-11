export class AbstractConverter {

    constructor() {
        if (new.target === AbstractConverter) {
            throw new Error("AbstractConverter is an abstract class and can not be instantiated")
        }
    }

    convert(text) {}
}