import { describe, expect, it } from 'vitest'
import { MarkupConverter } from '../src/core/MarkupConverter'

/**
 * Integration tests for MarkupConverter
 * Tests the complete conversion pipeline with all converters working together
 *
 * Note: Individual converters have their own unit tests in separate files
 */
describe('MarkupConverter - Integration tests', () => {
  it('should convert the test document containing headers, paragraphs, inline styles, lists and code blocks correctly', () => {
    const converter = new MarkupConverter()
    const input = `# Main Title

## Subsection

Some introduction text.

### Code Example

Here's how to use it:

\`\`\`
const converter = new MarkupConverter()
const result = converter.convert(text)
\`\`\`

### Smaller Header

- Item A
- Item B
- Item C

1. First step
2. Second step
3. Third step

## Formatting Example

This text has **bold**, *italic*, and ~~strikethrough~~ words.`

    const expected = `<h1>Main Title</h1>

<h2>Subsection</h2>

<p>Some introduction text.</p>

<h3>Code Example</h3>

<p>Here's how to use it:</p>

<pre><code>
const converter = new MarkupConverter()
const result = converter.convert(text)
</code></pre>

<h3>Smaller Header</h3>

<ul>
<li>Item A</li>
<li>Item B</li>
<li>Item C</li>
</ul>

<ol>
<li>First step</li>
<li>Second step</li>
<li>Third step</li>
</ol>

<h2>Formatting Example</h2>

<p>This text has <strong>bold</strong>, <em>italic</em>, and <del>strikethrough</del> words.</p>`

    const result = converter.convert(input)
    expect(result).toBe(expected)
  })

  it('should convert the test document containing headers, paragraphs, and inline styles correctly', () => {
    const converter = new MarkupConverter()
    const input = `# Main Title

## Subsection

Some introduction text.

### Smaller Header

Another paragraph here.

## Formatting Example

This text has **bold**, *italic*, and ~~strikethrough~~ words.`

    const expected = `<h1>Main Title</h1>

<h2>Subsection</h2>

<p>Some introduction text.</p>

<h3>Smaller Header</h3>

<p>Another paragraph here.</p>

<h2>Formatting Example</h2>

<p>This text has <strong>bold</strong>, <em>italic</em>, and <del>strikethrough</del> words.</p>`

    const result = converter.convert(input)
    expect(result).toBe(expected)
  })

  it('should convert a complete markdown document with all supported features', () => {
    const converter = new MarkupConverter()
    const input = `# Lorem Ipsum Dolor Sit Amet

Lorem ipsum dolor sit amet, consectetur **adipiscing** elit. Sed do *eiusmod* tempor \`incididunt\` ut labore.

## Consectetur Adipiscing Elit

Ut enim ad minim veniam, quis ~~nostrud~~ exercitation ullamco laboris. Use \`console.log()\` for debugging:

\`\`\`
function example() {
  console.log("Hello World")
  return true
}
\`\`\`

### Duis Aute Irure

Excepteur sint occaecat cupidatat non proident:

- **Sunt** in culpa qui \`officia\`
- *Deserunt* mollit anim id est
- Laborum et ~~dolore~~ magna aliqua

### Sed Ut Perspiciatis

Unde omnis iste natus error sit \`voluptatem\`:

1. Accusantium **doloremque** laudantium
2. Totam rem *aperiam* eaque \`ipsa\`
3. Quae ab illo ~~inventore~~ veritatis
4. Et quasi **architecto** beatae vitae

## Neque Porro Quisquam

Est qui dolorem ipsum quia ~~dolor~~ sit amet. Use \`npm install\` to install:

- Sed quia *non* numquam \`eius\`
- **Modi** tempora incidunt ut labore
- Dolore ~~magnam~~ aliquam quaerat

### Ut Enim Minima

Veniam quis nostrum *exercitationem* ullam corporis. Run \`npm test\` and \`npm start\` commands.

## Quis Autem Vel

Eum iure reprehenderit qui in ea ~~voluptate~~ velit esse. Quam nihil molestiae **consequatur**!

Fugiat quo *voluptas* nulla pariatur? 🌟`

    const expected = `<h1>Lorem Ipsum Dolor Sit Amet</h1>

<p>Lorem ipsum dolor sit amet, consectetur <strong>adipiscing</strong> elit. Sed do <em>eiusmod</em> tempor <code>incididunt</code> ut labore.</p>

<h2>Consectetur Adipiscing Elit</h2>

<p>Ut enim ad minim veniam, quis <del>nostrud</del> exercitation ullamco laboris. Use <code>console.log()</code> for debugging:</p>

<pre><code>
function example() {
  console.log("Hello World")
  return true
}
</code></pre>

<h3>Duis Aute Irure</h3>

<p>Excepteur sint occaecat cupidatat non proident:</p>

<ul>
<li><strong>Sunt</strong> in culpa qui <code>officia</code></li>
<li><em>Deserunt</em> mollit anim id est</li>
<li>Laborum et <del>dolore</del> magna aliqua</li>
</ul>

<h3>Sed Ut Perspiciatis</h3>

<p>Unde omnis iste natus error sit <code>voluptatem</code>:</p>

<ol>
<li>Accusantium <strong>doloremque</strong> laudantium</li>
<li>Totam rem <em>aperiam</em> eaque <code>ipsa</code></li>
<li>Quae ab illo <del>inventore</del> veritatis</li>
<li>Et quasi <strong>architecto</strong> beatae vitae</li>
</ol>

<h2>Neque Porro Quisquam</h2>

<p>Est qui dolorem ipsum quia <del>dolor</del> sit amet. Use <code>npm install</code> to install:</p>

<ul>
<li>Sed quia <em>non</em> numquam <code>eius</code></li>
<li><strong>Modi</strong> tempora incidunt ut labore</li>
<li>Dolore <del>magnam</del> aliquam quaerat</li>
</ul>

<h3>Ut Enim Minima</h3>

<p>Veniam quis nostrum <em>exercitationem</em> ullam corporis. Run <code>npm test</code> and <code>npm start</code> commands.</p>

<h2>Quis Autem Vel</h2>

<p>Eum iure reprehenderit qui in ea <del>voluptate</del> velit esse. Quam nihil molestiae <strong>consequatur</strong>!</p>

<p>Fugiat quo <em>voluptas</em> nulla pariatur? 🌟</p>`

    const result = converter.convert(input)
    expect(result).toBe(expected)
  })
})