import { describe, expect, it } from "vitest";
import { InlineStyleConverter } from "../src/converters/InlineStyleConverter"

describe('InlineStyleConverter', () => {
    it('should convert bold text', () => {
        const converter = new InlineStyleConverter()
        const result = converter.convert('**Hello 1DV610!**')
        expect(result).toBe('<strong>Hello 1DV610!</strong>')
    })

    it('should convert emphasized/italic text', () => {
        const converter = new InlineStyleConverter()
        const result = converter.convert('*Hello 1DV610!*')
        expect(result).toBe('<em>Hello 1DV610!</em>')
    })
})