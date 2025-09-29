import { describe, it, expect } from 'vitest'
import { AbstractConverter } from '../src/converters/AbstractConverter.js'
import { HeadingConverter } from '../src/converters/HeadingConverter.js'
import { InlineStyleConverter } from '../src/converters/InlineStyleConverter.js'
import { ParagraphConverter } from '../src/converters/ParagraphConverter.js'
import { ListConverter } from '../src/converters/ListConverter.js'
import { CodeBlockConverter } from '../src/converters/CodeBlockConverter.js'

describe('AbstractConverter', () => {
  it('should throw error when instantiated', () => {
    expect(() => new AbstractConverter()).toThrow()
  })

  describe('Input validation for all converters', () => {
    const converters = [
      { name: 'HeadingConverter', instance: new HeadingConverter() },
      { name: 'InlineStyleConverter', instance: new InlineStyleConverter() },
      { name: 'ParagraphConverter', instance: new ParagraphConverter() },
      { name: 'ListConverter', instance: new ListConverter() },
      { name: 'CodeBlockConverter', instance: new CodeBlockConverter() }
    ]

    converters.forEach(({ name, instance }) => {
      describe(name, () => {
        it('should throw TypeError for non-string input', () => {
          const invalidInputs = [123, null, undefined, [], {}, true, () => {}]

          invalidInputs.forEach((value) => {
            expect(() => instance.convert(value)).toThrow(TypeError)
          })
        })
      })
    })
  })
})
