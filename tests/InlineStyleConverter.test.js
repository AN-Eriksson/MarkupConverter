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

    it('should convert strikethrough text', () => {
        const converter = new InlineStyleConverter()
        const result = converter.convert('~~Hello 1DV610!~~')
        expect(result).toBe('<del>Hello 1DV610!</del>')
    })

    it('should convert all instances of strikethrough text in a line', () => {
        const converter = new InlineStyleConverter()
        const result = converter.convert('~~Hello 1DV610!~~ This test checks that ~~all~~ strikethrough text is converted')
        expect(result).toBe('<del>Hello 1DV610!</del> This test checks that <del>all</del> strikethrough text is converted')
    })

    it('should convert bold, italic, and strikethrough text in a line', () => {
        const converter = new InlineStyleConverter()
        const result = converter.convert('**Hello 1DV610!** This test checks that *all of* italic and ~~strikethrough~~ text is converted')
        expect(result).toBe('<strong>Hello 1DV610!</strong> This test checks that <em>all of</em> italic and <del>strikethrough</del> text is converted')
    })

    it('should convert inline code text', () => {
        const converter = new InlineStyleConverter()
        const result = converter.convert('Use `console.log()` to debug your code')
        expect(result).toBe('Use <code>console.log()</code> to debug your code')
    })

    it('should convert all instances of inline code in a line', () => {
        const converter = new InlineStyleConverter()
        const result = converter.convert('Use `console.log()` and `alert()` methods in `JavaScript`')
        expect(result).toBe('Use <code>console.log()</code> and <code>alert()</code> methods in <code>JavaScript</code>')
    })

    it('should convert inline code with other inline styles', () => {
        const converter = new InlineStyleConverter()
        const result = converter.convert('This is **bold with `inline code`** and *italic with `more code`*')
        expect(result).toBe('This is <strong>bold with <code>inline code</code></strong> and <em>italic with <code>more code</code></em>')
    })


})