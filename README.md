# Markup Converter

A JavaScript library for converting markup formats.

## Installation
```bash
npm install markup-converter
```

### Using the Main Converter
```javascript
import { MarkupConverter } from 'markup-converter'

const converter = new MarkupConverter()
const html = converter.convert('# Hello **World**!')
// Output: <h1>Hello <strong>World</strong>!</h1>
```

### Using Individual Converters
```javascript
import { HeadingConverter, InlineStyleConverter } from 'markup-converter'

// Use only heading conversion
const headingConverter = new HeadingConverter()
const headingHtml = headingConverter.convert('# My Heading')
// Output: <h1>My Heading</h1>

// Use only inline style conversion
const styleConverter = new InlineStyleConverter()
const styledHtml = styleConverter.convert('This is **bold** and *italic*')
// Output: This is <strong>bold</strong> and <em>italic</em>
```

### Complete Example
```javascript
import { MarkupConverter } from 'markup-converter'

const converter = new MarkupConverter()
const markdown = `# My Blog Post

This is an introduction paragraph with **bold** and *italic* text.

## Section Title

Another paragraph with ~~strikethrough~~ text.`

const html = converter.convert(markdown)
console.log(html)
// Output:
// <h1>My Blog Post</h1>
// 
// <p>This is an introduction paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
// 
// <h2>Section Title</h2>
// 
// <p>Another paragraph with <del>strikethrough</del> text.</p>
```

## Features
- Convert headings (# ## ###)
- Convert bold text (**text**)
- Convert italic text (*text*)
- Convert strikethrough text (~~text~~)
- Convert paragraphs (wrap plain text in `<p>` tags)
- Select individual converters for specific use cases

### Flexible Architecture
You can use the complete `MarkupConverter` for full markdown processing, or import individual converters to handle only specific formatting:

```javascript
// Full conversion pipeline
import { MarkupConverter } from 'markup-converter'

// Cherry-pick specific converters
import { HeadingConverter, InlineStyleConverter } from 'markup-converter'
```

This modular approach allows you to:
- Build custom conversion pipelines
- Handle specific markdown features in isolation

## API Reference

### MarkupConverter

#### `constructor()`
Creates a new MarkupConverter instance with all converters.

#### `convert(text: string): string`
Converts markdown text to HTML.

**Parameters:**
- `text` - The markdown text to convert

**Returns:**
- HTML string

### Individual Converters

All converters extend `AbstractConverter` and implement the same interface:

- `HeadingConverter` - Converts `# ## ###` to `<h1> <h2> <h3>`
- `InlineStyleConverter` - Converts `**bold**`, `*italic*`, `~~strikethrough~~`
- `ParagraphConverter` - Wraps plain text in `<p>` tags

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