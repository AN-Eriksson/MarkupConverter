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