# Contributing to Sorting Algorithm Visualizer

Thank you for your interest in contributing to the Sorting Algorithm Visualizer! This document provides guidelines and information for contributors.

## 🚀 Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature/fix
4. Make your changes
5. Test thoroughly
6. Submit a pull request

## 📋 Development Setup

Since this is a vanilla JavaScript project, setup is minimal:

```bash
# Clone the repository
git clone https://github.com/yourusername/sorting-visualizer.git
cd sorting-visualizer

# Start a local server (choose one)
python -m http.server 8000
# or
npx serve .
# or
npx live-server .
```

## 🎯 Ways to Contribute

### 1. Adding New Sorting Algorithms

To add a new sorting algorithm:

1. **Add to HTML**: Include the new option in the algorithm select dropdown
2. **Implement Algorithm**: Add the sorting method to the `SortingVisualizer` class
3. **Add Algorithm Info**: Update the `updateAlgorithmInfo` method with complexity and description
4. **Update Switch**: Add the new case to the switch statement in `startSorting`

Example structure for a new algorithm:
```javascript
async newSortingAlgorithm() {
    // Your implementation here
    // Use await this.compare(i, j) for comparisons
    // Use await this.swap(i, j) for swaps
    // Use await this.highlightBars([indices], 'className') for highlighting
}
```

### 2. UI/UX Improvements

- Enhance the visual design
- Improve responsiveness
- Add new themes or color schemes
- Optimize animations and transitions

### 3. Performance Optimizations

- Optimize rendering performance
- Improve algorithm implementations
- Reduce memory usage
- Enhance mobile performance

### 4. New Features

Some ideas for new features:
- Sound effects for comparisons/swaps
- Step-by-step mode
- Algorithm comparison mode
- Export visualization as GIF/video
- Custom array input
- More detailed statistics

## 🔧 Code Style Guidelines

### JavaScript
- Use ES6+ features
- Follow async/await patterns for animations
- Use meaningful variable names
- Add comments for complex logic
- Keep methods focused and small

### CSS
- Use modern CSS features (Grid, Flexbox, Custom Properties)
- Follow BEM naming convention where applicable
- Group related styles together
- Use consistent spacing and indentation

### HTML
- Use semantic HTML elements
- Ensure accessibility with proper ARIA labels
- Keep structure clean and organized

## 🧪 Testing

Before submitting a pull request:

1. **Manual Testing**:
   - Test all sorting algorithms
   - Verify responsiveness on different screen sizes
   - Check performance with different array sizes
   - Test all controls and interactions

2. **Cross-browser Testing**:
   - Chrome/Chromium
   - Firefox
   - Safari
   - Edge

3. **Mobile Testing**:
   - Test touch interactions
   - Verify responsive design
   - Check performance on mobile devices

## 📝 Pull Request Guidelines

### Before Submitting
- Ensure your code follows the style guidelines
- Test your changes thoroughly
- Update documentation if needed
- Add comments for complex logic

### PR Description
Include in your pull request:
- Clear description of changes
- Screenshots/GIFs for UI changes
- Testing steps
- Any breaking changes

### Example PR Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Performance improvement
- [ ] Documentation update

## Testing
- [ ] Tested on desktop browsers
- [ ] Tested on mobile devices
- [ ] All algorithms work correctly
- [ ] No console errors

## Screenshots
(If applicable)
```

## 🐛 Bug Reports

When reporting bugs, please include:
- Browser and version
- Operating system
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Console errors (if any)

## 💡 Feature Requests

For feature requests:
- Describe the feature clearly
- Explain the use case
- Consider implementation complexity
- Provide mockups if applicable

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/) - Web development reference
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) - For visualization improvements
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/) - For layout improvements

## 🤝 Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow
- Focus on the code, not the person

## 📞 Questions?

If you have questions about contributing:
- Open an issue for discussion
- Check existing issues and PRs
- Review the documentation

Thank you for contributing to make this project better! 🎉