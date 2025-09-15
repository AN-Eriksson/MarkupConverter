import { describe, expect, it } from "vitest";
import { MarkupConverter } from "../src/core/MarkupConverter";

describe('MarkupConverter', () => {
    it('should convert markdown heading to html heading', () => {
        const converter = new MarkupConverter()
        const result = converter.convert('# Hello 1DV610!')
        expect(result).toContain('<h1>Hello 1DV610!</h1>')
    })

    it('should convert the headings in a multi-line markdown text', () => {
        const converter = new MarkupConverter()
        const result = converter.convert('# Hello 1DV610!\n## This is a MarkupConverter.\n### It converts between Markup formats!\n#### I chose this module to get some string manipulation practice.\n##### Will it be useful?\n###### Who knows!')
        expect(result).toContain('<h1>Hello 1DV610!</h1>\n<h2>This is a MarkupConverter.</h2>\n<h3>It converts between Markup formats!</h3>\n<h4>I chose this module to get some string manipulation practice.</h4>\n<h5>Will it be useful?</h5>\n<h6>Who knows!</h6>')
    })
})