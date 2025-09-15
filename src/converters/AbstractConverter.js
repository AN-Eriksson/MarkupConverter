export class AbstractConverter {

    constructor() {
        if (new.target === AbstractConverter) {
            throw new Error("AbstractConverter is an abstract class and can not be instantiated")
        }
    }

    convert(inputText) {
        const lines = inputText.split('\n')
        const converted = lines.map(line => {
            return this.convertLine(line)
        })

        return converted.join('\n')
    }

    convertLine(line) {
        throw new Error('convertLine must be implemented in subclasses')
    }
}