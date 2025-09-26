# Markup Converter

A JavaScript library for converting markup to HTML.

## Installation
```bash
npm install @an-eriksson/markup-converter
```

### Using the Main Converter
```javascript
import { MarkupConverter } from '@an-eriksson/markup-converter'

const converter = new MarkupConverter()
const html = converter.convert('# Hello **World**!')
// Output: <h1>Hello <strong>World</strong>!</h1>
```

### Using Individual Converters
```javascript
import { HeadingConverter, InlineStyleConverter } from '@an-eriksson/markup-converter'

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
import { MarkupConverter } from '@an-eriksson/markup-converter'

const converter = new MarkupConverter()
const markdown = `# My Blog Post

This is an introduction paragraph with **bold** and *italic* text.

## Code Example

\`\`\`
const greet = () => "Hello World!"
\`\`\`

### Features

- Easy to use
- **Lightweight** library  
- Supports \`inline code\`

### Steps

1. Install the package
2. Import and use

## Conclusion

Another paragraph with ~~strikethrough~~ text.`

const html = converter.convert(markdown)
console.log(html)
// Output:
// <h1>My Blog Post</h1>
//
// <p>This is an introduction paragraph with <strong>bold</strong> and <em>italic</em> text.</p>
//
// <h2>Code Example</h2>
//
// <pre><code>
// const greet = () => "Hello World!"
// </code></pre>
//
// <h3>Features</h3>
//
// <ul>
// <li>Easy to use</li>
// <li><strong>Lightweight</strong> library</li>
// <li>Supports <code>inline code</code></li>
// </ul>
//
// <h3>Steps</h3>
//
// <ol>
// <li>Install the package</li>
// <li>Import and use</li>
// </ol>
//
// <h2>Conclusion</h2>
//
// <p>Another paragraph with <del>strikethrough</del> text.</p>
```

## Features
- Convert headings (# ## ###)
- Convert bold text (**text**)
- Convert italic text (*text*)
- Convert strikethrough text (~~text~~)
- Convert inline code (`code`)
- Convert code blocks (``` code ```)
- Convert unordered lists (- item)
- Convert ordered lists (1. item)
- Convert paragraphs (wrap plain text in `<p>` tags)
- Select individual converters for specific use cases

### Flexible Architecture
You can use the complete `MarkupConverter` for full markdown processing, or import individual converters to handle only specific formatting:

```javascript
// Full conversion pipeline
import { MarkupConverter } from '@an-eriksson/markup-converter'

// Cherry-pick specific converters
import { HeadingConverter, InlineStyleConverter } from '@an-eriksson/markup-converter'
```

This modular approach allows you to:
- Build custom conversion pipelines
- Handle specific markdown features in isolation

### Available Converters

This library includes several specialized converters that can be used individually or together:

### HeadingConverter
Converts markdown headings to HTML heading tags.

**Converts:**
- `# Heading 1` → `<h1>Heading 1</h1>`
- `## Heading 2` → `<h2>Heading 2</h2>`
- `### Heading 3` → `<h3>Heading 3</h3>`

### InlineStyleConverter
Handles all inline text formatting within paragraphs and other content.

**Converts:**
- `**bold text**` → `<strong>bold text</strong>`
- `*italic text*` → `<em>italic text</em>`
- `~~strikethrough~~` → `<del>strikethrough</del>`
- `` `inline code` `` → `<code>inline code</code>`

### CodeBlockConverter
Converts markdown code blocks to HTML pre and code elements.
````markdown
```
function example() {
  return "Hello World"
}
```
````

→
````html
<pre><code>
function example() {
  return "Hello World"
}
</code></pre>
````

### ListConverter
Converts both ordered and unordered lists.

**Converts:**
```markdown
- Item 1
- Item 2
- Item 3
```
→
```html
<ul>
<li>Item 1</li>
<li>Item 2</li>
<li>Item 3</li>
</ul>
```

```markdown
1. First item
2. Second item
3. Third item
```
→
```html
<ol>
<li>First item</li>
<li>Second item</li>
<li>Third item</li>
</ol>
```

### ParagraphConverter
Wraps plain text blocks in paragraph tags while preserving other HTML elements.

**Converts:**
```markdown
This is a paragraph.

This is another paragraph.
```
→
```html
<p>This is a paragraph.</p>

<p>This is another paragraph.</p>
```

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
- `CodeBlockConverter` - Converts code blocks to `<pre><code>`
- `InlineStyleConverter` - Converts `**bold**`, `*italic*`, `~~strikethrough~~`, `` `inline code` ``
- `ListConverter` - Converts `- item` and `1. item` to `<ul>` and `<ol>`
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
npm test -- tests/CodeBlockConverter.test.js       # Unit tests for code blocks
npm test -- tests/InlineStyleConverter.test.js     # Unit tests for inline styles
npm test -- tests/ParagraphConverter.test.js       # Unit tests for paragraphs
npm test -- tests/ListConverter.test.js            # Unit tests for lists
npm test -- tests/MarkupConverter.test.js          # Integration tests for full pipeline
```