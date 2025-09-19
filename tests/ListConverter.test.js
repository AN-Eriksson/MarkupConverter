import { describe, it, expect } from 'vitest'
import { ListConverter } from '../src/converters/ListConverter.js'

describe('ListConverter', () => {
    it('should convert a simple unordered list', () => {
        const converter = new ListConverter()
        const input = `- Item 1
- Item 2
- Item 3`

        const expected = `<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>`

        const result = converter.convert(input)
        expect(result).toBe(expected)
    })

    it('should convert a simple ordered list', () => {
        const converter = new ListConverter()
        const input = `1. First item
2. Second item
3. Third item`

        const expected = `<ol>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ol>`

        const result = converter.convert(input)
        expect(result).toBe(expected)
    })
})