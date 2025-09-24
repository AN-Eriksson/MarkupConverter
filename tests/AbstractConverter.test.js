import { describe, it, expect } from 'vitest'
import { AbstractConverter } from '../src/converters/AbstractConverter.js'

describe('AbstractConverter', () => {
  it('should throw error when instantiated', () => {
    expect(() => new AbstractConverter()).toThrow()
  })
})
