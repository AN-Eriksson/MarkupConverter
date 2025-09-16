import { describe, expect, it } from "vitest";
import { InlineStyleConverter } from "../src/converters/InlineStyleConverter"

describe('InlineStyleConverter', () => {
    it('should convert bold text', () => {
        const converter = new InlineStyleConverter()
        const result = converter.convert('**Hello 1DV610!**')
        expect(result).toBe('<strong>Hello 1DV610!</strong>')
    })

    it('should convert all instances of bold text in a line', () => {
        const converter = new InlineStyleConverter()
        const result = converter.convert('**Hello 1DV610!** This test checks that **all** bold text is converted')
        expect(result).toBe('<strong>Hello 1DV610!</strong> This test checks that <strong>all</strong> bold text is converted')
    })

    it('should convert emphasized/italic text', () => {
        const converter = new InlineStyleConverter()
        const result = converter.convert('*Hello 1DV610!*')
        expect(result).toBe('<em>Hello 1DV610!</em>')
    })

    it('should convert all instances of emphasized/italic text in a line', () => {
        const converter = new InlineStyleConverter()
        const result = converter.convert('*Hello 1DV610!* This test checks that *all* italic text is converted')
        expect(result).toBe('<em>Hello 1DV610!</em> This test checks that <em>all</em> italic text is converted')
    })


})