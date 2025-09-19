import { describe, expect, it } from "vitest";
import { MarkupConverter } from '../src/core/MarkupConverter'

/**
 * Integration tests for MarkupConverter
 * Tests the complete conversion pipeline with all converters working together
 * 
 * Note: Individual converters have their own unit tests in separate files
 */
describe('MarkupConverter - Integration tests', () => {
  it('should convert the test document containing headers, paragraphs, inline styles and lists correctly', () => {
    const converter = new MarkupConverter()
    const input = `# Main Title

## Subsection

Some introduction text.

### Smaller Header

- Item A
- Item B
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
<li>Item B</li>
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


  it('should convert the test document containing headers, paragraphs, and inline styles correctly', () => {
    const converter = new MarkupConverter()
    const input = `# Main Title

## Subsection

Some introduction text.

### Smaller Header

Another paragraph here.

## Formatting Example

This text has **bold**, *italic*, and ~~strikethrough~~ words.`

    const expected = `<h1>Main Title</h1>

<h2>Subsection</h2>

<p>Some introduction text.</p>

<h3>Smaller Header</h3>

<p>Another paragraph here.</p>

<h2>Formatting Example</h2>

<p>This text has <strong>bold</strong>, <em>italic</em>, and <del>strikethrough</del> words.</p>`

    const result = converter.convert(input)
    expect(result).toBe(expected)
  })
})














