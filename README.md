# Markup Converter

A JavaScript library for converting markup formats.

## Installation
```bash
npm install markup-converter
```

## Usage
```javascript
import { MarkupConverter } from 'markup-converter'

const converter = new MarkupConverter()
const html = converter.convert('# Hello **World**!')
// Output: <h1>Hello <strong>World</strong>!</h1>
```

## Features
- Convert headings (# ## ###)
- Convert bold text (**text**)
- Convert italic text (*text*)
- More features coming...

## Testing

This project uses a comprehensive testing approach:

- **Unit Tests**: Individual converters are tested in isolation (`tests/*Converter.test.js`)
- **Integration Tests**: The complete `MarkupConverter` pipeline is tested end-to-end (`tests/MarkupConverter.test.js`)

```bash
npm test                    # Run all tests
npm run test:watch          # Run tests in watch mode

# Run specific test types
npm test -- tests/HeadingConverter.test.js         # Unit tests for headings
npm test -- tests/InlineStyleConverter.test.js     # Unit tests for inline styles
npm test -- tests/MarkupConverter.test.js          # Integration tests for full pipeline
```