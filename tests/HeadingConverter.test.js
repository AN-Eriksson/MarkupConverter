import { describe, expect, it } from "vitest";
import { HeadingConverter } from "../src/converters/HeadingConverter";

describe('HeadingConverter', () => {
    it('should convert markdown heading to html heading', () => {
        const converter = new HeadingConverter()
        const result = converter.convert('# Hello 1DV610!')
        expect(result).toBe('<h1>Hello 1DV610!</h1>')
    })

    it('should convert the headings in a multi-line markdown text', () => {
        const converter = new HeadingConverter()
        const input = `# Hello 1DV610!
## This is a MarkupConverter.
### It converts between Markup formats!
#### I chose this module to get some string manipulation practice.
##### Will it be useful?
###### Who knows!`
        const expected = `<h1>Hello 1DV610!</h1>
<h2>This is a MarkupConverter.</h2>
<h3>It converts between Markup formats!</h3>
<h4>I chose this module to get some string manipulation practice.</h4>
<h5>Will it be useful?</h5>
<h6>Who knows!</h6>`

        const result = converter.convert(input)
        expect(result).toBe(expected)
    })
})