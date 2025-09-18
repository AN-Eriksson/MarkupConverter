import { describe, it, expect } from 'vitest'
import { ParagraphConverter } from '../src/converters/ParagraphConverter.js'

describe('ParagraphConverter', () => {
    it.skip('should wrap plain text in paragraph tags', () => {
        const converter = new ParagraphConverter()
        const result = converter.convert('This is a simple paragraph.')
        expect(result).toBe('<p>This is a simple paragraph.</p>')
    })

    it('should wrap multiple paragraphs separated by blank lines', () => {
        const converter = new ParagraphConverter()
        const input = `First paragraph.
This is the second line of the first paragraph.

Second paragraph.
This is the second line of the second paragraph`
        const expected = `<p>First paragraph.</p>

<p>Second paragraph.</p>`
        const result = converter.convert(input)
        expect(result).toBe(expected)
    })
})