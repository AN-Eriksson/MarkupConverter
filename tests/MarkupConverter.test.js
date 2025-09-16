import { describe, expect, it } from "vitest";
import { MarkupConverter } from '../src/core/MarkupConverter'

describe('MarkupConverter', () => {
    it('should convert the test document correctly', () => {
        const converter = new MarkupConverter()
        const input = `# Main Title

## Subsection

Some introduction text.

### Smaller Header

- Item A
- Item B
  - Nested item
- Item C

1. First step
2. Second step
3. Third step

## Formatting Example

This text has **bold**, *italic*, and ~~strikethrough~~ words.`

        const expected = `<h1>Main Title</h1>
<h2>Subsection</h2>
<p>Some introduction text.</p>
<h3>Smaller Header</h3>
<ul>
<li>Item A</li>
<li>Item B
<ul>
<li>Nested item</li>
</ul>
</li>
<li>Item C</li>
</ul>
<ol>
<li>First step</li>
<li>Second step</li>
<li>Third step</li>
</ol>
<h2>Formatting Example</h2>
<p>This text has <strong>bold</strong>, <em>italic</em>, and <del>strikethrough</del> words.</p>`

        const result = converter.convert(input)
        expect(result).toBe(expected)
    })
})














