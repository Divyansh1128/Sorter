# Sorting Algorithm Visualizer

A beautiful, interactive web application that visualizes various sorting algorithms in real-time. Built with vanilla JavaScript, HTML5 Canvas, and modern CSS.

## 🚀 Features

- **6 Sorting Algorithms**: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort
- **Real-time Visualization**: Watch algorithms sort arrays with smooth animations
- **Interactive Controls**: Adjust array size, sorting speed, and generate new arrays
- **Algorithm Statistics**: View time/space complexity, comparisons, and swaps
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Beautiful glassmorphism design with smooth animations

## 🎯 Algorithms Included

| Algorithm | Time Complexity | Space Complexity | Stable |
|-----------|----------------|------------------|--------|
| Bubble Sort | O(n²) | O(1) | Yes |
| Selection Sort | O(n²) | O(1) | No |
| Insertion Sort | O(n²) | O(1) | Yes |
| Merge Sort | O(n log n) | O(n) | Yes |
| Quick Sort | O(n log n) | O(log n) | No |
| Heap Sort | O(n log n) | O(1) | No |

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and Canvas API
- **CSS3**: Modern styling with gradients, backdrop-filter, and animations
- **JavaScript (ES6+)**: Object-oriented programming with async/await
- **No Dependencies**: Pure vanilla implementation

## 🚀 Getting Started

### Option 1: Direct Download
1. Download all files to a folder
2. Open `index.html` in your web browser
3. Start visualizing sorting algorithms!

### Option 2: Local Server (Recommended)
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📱 How to Use

1. **Select Algorithm**: Choose from 6 different sorting algorithms
2. **Adjust Settings**: 
   - Array Size: 10-100 elements
   - Speed: 1-10 (1 = slowest, 10 = fastest)
3. **Generate Array**: Create a new random array
4. **Start Sorting**: Watch the algorithm work in real-time
5. **View Statistics**: Monitor comparisons, swaps, and complexity

## 🎨 Color Legend

- **Gray**: Unsorted elements
- **Orange**: Elements being compared
- **Red**: Elements being swapped
- **Green**: Sorted elements
- **Purple**: Pivot element (Quick Sort)

## 🏗️ Project Structure

```
sorting-visualizer/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Core JavaScript logic
├── netlify.toml        # Deployment configuration
└── README.md           # This file
```

## 🔧 Customization

### Adding New Algorithms
1. Add the algorithm option to the select element in `index.html`
2. Implement the sorting method in the `SortingVisualizer` class
3. Add algorithm info to the `updateAlgorithmInfo` method
4. Update the switch statement in `startSorting`

### Styling
- Modify `styles.css` to change colors, animations, or layout
- All CSS uses modern features like CSS Grid, Flexbox, and backdrop-filter
- Responsive design breakpoints are included

## 🌐 Live Demo

Visit the live demo: [Sorting Visualizer](https://zippy-granita-707e39.netlify.app)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new sorting algorithms
- Improve the UI/UX
- Fix bugs or optimize performance
- Add new features

## 📞 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ for learning and education