# API Documentation

This document describes the internal API and structure of the Sorting Algorithm Visualizer.

## 🏗️ Class Structure

### SortingVisualizer

The main class that handles all visualization logic.

#### Constructor
```javascript
constructor()
```
Initializes the visualizer with default settings and sets up event listeners.

#### Properties

| Property | Type | Description |
|----------|------|-------------|
| `array` | `number[]` | Current array being sorted |
| `arraySize` | `number` | Size of the array (10-100) |
| `speed` | `number` | Animation speed (1-10) |
| `isRunning` | `boolean` | Whether sorting is in progress |
| `comparisons` | `number` | Number of comparisons made |
| `swaps` | `number` | Number of swaps made |

#### Core Methods

##### `generateArray()`
```javascript
generateArray(): void
```
Generates a new random array and renders it.

##### `renderArray()`
```javascript
renderArray(): void
```
Renders the current array as bars in the visualization container.

##### `startSorting()`
```javascript
async startSorting(): Promise<void>
```
Starts the sorting process with the selected algorithm.

##### `stopSorting()`
```javascript
stopSorting(): void
```
Stops the current sorting process and resets UI state.

#### Animation Methods

##### `sleep(ms)`
```javascript
async sleep(ms: number): Promise<void>
```
Creates a delay for animation timing.

##### `highlightBars(indices, className)`
```javascript
async highlightBars(indices: number[], className: string): Promise<void>
```
Highlights specific bars with a CSS class.

**Parameters:**
- `indices`: Array of bar indices to highlight
- `className`: CSS class to apply ('comparing', 'swapping', 'pivot')

##### `clearHighlights()`
```javascript
clearHighlights(): void
```
Removes all highlight classes from bars.

##### `swap(i, j)`
```javascript
async swap(i: number, j: number): Promise<void>
```
Swaps two elements with visual animation.

##### `compare(i, j)`
```javascript
async compare(i: number, j: number): Promise<boolean>
```
Compares two elements with visual highlighting.

**Returns:** `true` if `array[i] > array[j]`

#### Sorting Algorithms

##### `bubbleSort()`
```javascript
async bubbleSort(): Promise<void>
```
Implements bubble sort algorithm.

##### `selectionSort()`
```javascript
async selectionSort(): Promise<void>
```
Implements selection sort algorithm.

##### `insertionSort()`
```javascript
async insertionSort(): Promise<void>
```
Implements insertion sort algorithm.

##### `mergeSort(left, right)`
```javascript
async mergeSort(left: number, right: number): Promise<void>
```
Implements merge sort algorithm recursively.

##### `merge(left, mid, right)`
```javascript
async merge(left: number, mid: number, right: number): Promise<void>
```
Merges two sorted subarrays.

##### `quickSort(low, high)`
```javascript
async quickSort(low: number, high: number): Promise<void>
```
Implements quick sort algorithm recursively.

##### `partition(low, high)`
```javascript
async partition(low: number, high: number): Promise<number>
```
Partitions array for quick sort.

**Returns:** Pivot index after partitioning

##### `heapSort()`
```javascript
async heapSort(): Promise<void>
```
Implements heap sort algorithm.

##### `heapify(n, i)`
```javascript
async heapify(n: number, i: number): Promise<void>
```
Maintains heap property for heap sort.

#### Utility Methods

##### `updateStats()`
```javascript
updateStats(): void
```
Updates the statistics display (comparisons, swaps).

##### `updateStatus(message)`
```javascript
updateStatus(message: string): void
```
Updates the status indicator text.

##### `updateAlgorithmInfo(algorithm)`
```javascript
updateAlgorithmInfo(algorithm: string): void
```
Updates the algorithm information panel.

**Parameters:**
- `algorithm`: Algorithm key ('bubble', 'selection', 'insertion', 'merge', 'quick', 'heap')

---

## 🎨 CSS Classes

### Bar States
- `.array-bar`: Default bar styling
- `.array-bar.comparing`: Orange highlighting for comparisons
- `.array-bar.swapping`: Red highlighting for swaps
- `.array-bar.sorted`: Green highlighting for sorted elements
- `.array-bar.pivot`: Purple highlighting for pivot elements

### UI Components
- `.container`: Main container with max-width and centering
- `.header`: Glassmorphism header with logo and status
- `.controls`: Control panel with form elements
- `.visualization`: Main visualization area
- `.algorithm-info`: Information panel with stats
- `.legend`: Color legend for bar states

---

## 🔧 Configuration

### Algorithm Information Structure
```javascript
const algorithmInfo = {
  [key]: {
    name: string,           // Display name
    timeComplexity: string, // Big O notation
    spaceComplexity: string,// Space complexity
    description: string     // Algorithm description
  }
}
```

### Supported Algorithms
- `bubble`: Bubble Sort
- `selection`: Selection Sort
- `insertion`: Insertion Sort
- `merge`: Merge Sort
- `quick`: Quick Sort
- `heap`: Heap Sort

---

## 🎯 Events

### DOM Events
- Array size slider: Updates `arraySize` and regenerates array
- Speed slider: Updates animation `speed`
- Algorithm select: Updates algorithm information
- Generate button: Creates new random array
- Sort button: Starts sorting process
- Stop button: Stops current sorting

### Custom Events
The visualizer doesn't emit custom events but uses async/await for coordination.

---

## 🚀 Extension Points

### Adding New Algorithms
1. Add option to HTML select element
2. Implement async sorting method
3. Add algorithm info to `updateAlgorithmInfo`
4. Add case to `startSorting` switch statement

### Customizing Animations
- Modify `sleep()` duration calculation
- Adjust CSS transitions in stylesheet
- Change highlight colors and effects

### Adding Statistics
- Track additional metrics in sorting methods
- Update `updateStats()` method
- Add display elements to HTML

---

## 🐛 Error Handling

### Stopping Mechanism
All sorting algorithms check `this.isRunning` and throw an error if stopped:
```javascript
if (!this.isRunning) throw new Error('Stopped');
```

### Async Safety
All animation methods use `await` to ensure proper sequencing and allow for interruption.

---

## 📱 Responsive Design

### Breakpoints
- Mobile: `max-width: 768px`
- Tablet: `768px - 1024px`
- Desktop: `1024px+`

### Adaptive Features
- Grid layouts adjust to screen size
- Bar width scales with container
- Text size adjusts for readability
- Touch-friendly controls on mobile