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
})
