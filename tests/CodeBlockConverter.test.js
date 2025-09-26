import { describe, it, expect, beforeEach } from 'vitest'
import { CodeBlockConverter } from '../src/converters/CodeBlockConverter.js'

describe('CodeBlockConverter', () => {
  let converter

  beforeEach(() => {
    converter = new CodeBlockConverter()
  })

  it('should convert markdown code block to HTML', () => {
    const input = '```\nconst x = 1\nconsole.log(x)\n```'
    const expected = '<pre><code>\nconst x = 1\nconsole.log(x)\n</code></pre>'

    expect(converter.convert(input)).toBe(expected)
  })

  it('should handle empty code block', () => {
    const input = '```\n```'
    const expected = '<pre><code>\n</code></pre>'

    expect(converter.convert(input)).toBe(expected)
  })

  it('should convert multiple code blocks in same text', () => {
    const input = '```\ncode1\n```\n\nSome text\n\n```\ncode2\n```'
    const expected =
      '<pre><code>\ncode1\n</code></pre>\n\nSome text\n\n<pre><code>\ncode2\n</code></pre>'

    expect(converter.convert(input)).toBe(expected)
  })

  it('should leave non-code-block text unchanged', () => {
    const input = 'Regular text\n\n```\ncode here\n```\n\nMore text'
    const expected =
      'Regular text\n\n<pre><code>\ncode here\n</code></pre>\n\nMore text'

    expect(converter.convert(input)).toBe(expected)
  })
})
