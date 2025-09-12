import { describe, expect, it } from "vitest";
import { MarkupConverter } from "../src/core/MarkupConverter";

describe('MarkupConverter', () => {
    it('should convert markdown heading to html heading', () => {
        const converter = new MarkupConverter()
        const result = converter.convert('# Hello 1DV610!')
        expect(result).toContain('<h1>Hello 1DV610!</h1>')
    } )
})