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
npm run lint
npm run format
```

### Project Structure
```
src/
├── core/
│   └── MarkupConverter.js      # Main converter class
├── converters/
│   ├── AbstractConverter.js    # Base class for all converters
│   ├── SpecializedConverter.js # Specialized converters
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
- Run linter and formatter before committing

### Code Quality Commands

```bash
# Run tests
npm test                    # Run all tests
npm run test:watch          # Run tests in watch mode

# Code quality
npm run lint               # Check code style and catch errors
npm run lint:fix           # Automatically fix linting issues
npm run format             # Format code with Prettier
npm run format:check       # Check if code is properly formatted

# Run everything before committing
npm run lint && npm run format && npm test
```

### Testing
- Write unit tests for individual converters
- Write integration tests for full pipeline
- Run `npm test` before submitting
- Ensure `npm run lint` passes without errors

### Pull Request Process
1. Fork the repo
2. Create a feature branch
3. Make changes with tests
4. **Run `npm run lint && npm run format && npm test`**
5. Update documentation if needed
6. Submit PR with clear description

### Pre-commit Checklist
Before submitting your PR, ensure:
- [ ] All tests pass (`npm test`)
- [ ] No linting errors (`npm run lint`)
- [ ] Code is properly formatted (`npm run format`)
- [ ] Documentation is updated if needed
- [ ] New features have tests

## Questions?

Feel free to open an issue for any questions!