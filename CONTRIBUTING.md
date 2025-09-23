# Contributing to Markup Converter

Thank you for considering contributing to Markup Converter! 

## Code of Conduct

Please be respectful and constructive in all interactions.

## How to Contribute

### Reporting Bugs
- Use the GitHub issue tracker
- Include steps to reproduce
- Include expected vs actual behavior
- Include your Node.js version

### Suggesting Features
- Open an issue with the "enhancement" label
- Describe the use case
- Explain why it would be valuable

### Development Setup

```bash
git clone https://github.com/AN-Eriksson/MarkupConverter.git
cd markup-converter
npm install
npm test
```

### Project Structure
```
src/
├── core/
│   └── MarkupConverter.js      # Main converter class
├── converters/
│   ├── AbstractConverter.js    # Base class for all converters
│   ├── HeadingConverter.js     # Handles # headings
│   ├── InlineStyleConverter.js # Handles **bold**, *italic*, ~~strikethrough~~, `code`
│   ├── ListConverter.js        # Handles - and 1. lists
│   └── ParagraphConverter.js   # Wraps plain text in <p> tags
tests/                          # Test files
```

### Adding New Converters
To add a new converter:

1. Create `src/converters/YourConverter.js` extending `AbstractConverter`
2. Implement the `convert()` method
3. Add unit tests in `tests/YourConverter.test.js`
4. Add the converter to `MarkupConverter.js` constructor
5. Update integration tests

### Code Style
- Use ES6+ features
- Follow existing naming conventions
- Add JSDoc comments for public methods
- Ensure test coverage for new features

### Testing
- Write unit tests for individual converters
- Write integration tests for full pipeline
- Run `npm test` before submitting

### Pull Request Process
1. Fork the repo
2. Create a feature branch
3. Make changes with tests
4. Update documentation if needed
5. Submit PR with clear description

## Questions?

Feel free to open an issue for any questions!