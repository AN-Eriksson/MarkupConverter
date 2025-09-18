import { describe, it, expect } from 'vitest'
import { ParagraphConverter } from '../src/converters/ParagraphConverter.js'

describe('ParagraphConverter', () => {
    it('should wrap plain text in paragraph tags', () => {
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
        const expected = `<p>First paragraph.
This is the second line of the first paragraph.</p>

<p>Second paragraph.
This is the second line of the second paragraph</p>`
        const result = converter.convert(input)
        expect(result).toBe(expected)
    })

    it('should ignore headings and not wrap them in paragraph tags', () => {
        const converter = new ParagraphConverter()
        const input = `<h1>Main Heading</h1>

This is a paragraph that should be wrapped.

<h2>Sub Heading</h2>

Another paragraph here.

<h3>Another Heading</h3>`

        const expected = `<h1>Main Heading</h1>

<p>This is a paragraph that should be wrapped.</p>

<h2>Sub Heading</h2>

<p>Another paragraph here.</p>

<h3>Another Heading</h3>`

        const result = converter.convert(input)
        expect(result).toBe(expected)
    })
})