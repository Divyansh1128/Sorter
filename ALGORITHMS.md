# Sorting Algorithms Documentation

This document provides detailed information about each sorting algorithm implemented in the visualizer.

## 📊 Algorithm Comparison

| Algorithm | Best Case | Average Case | Worst Case | Space | Stable | In-Place |
|-----------|-----------|--------------|------------|-------|--------|----------|
| Bubble Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ | ✅ |
| Selection Sort | O(n²) | O(n²) | O(n²) | O(1) | ❌ | ✅ |
| Insertion Sort | O(n) | O(n²) | O(n²) | O(1) | ✅ | ✅ |
| Merge Sort | O(n log n) | O(n log n) | O(n log n) | O(n) | ✅ | ❌ |
| Quick Sort | O(n log n) | O(n log n) | O(n²) | O(log n) | ❌ | ✅ |
| Heap Sort | O(n log n) | O(n log n) | O(n log n) | O(1) | ❌ | ✅ |

## 🔵 Bubble Sort

### Description
Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.

### How it Works
1. Compare adjacent elements
2. Swap if they're in wrong order
3. Continue through the array
4. Repeat until no swaps are needed

### Characteristics
- **Simple** to understand and implement
- **Inefficient** for large datasets
- **Stable** sorting algorithm
- **In-place** sorting

### Use Cases
- Educational purposes
- Small datasets
- Nearly sorted data

---

## 🟡 Selection Sort

### Description
Selection Sort divides the input list into two parts: a sorted portion at the left end and an unsorted portion at the right end. It repeatedly selects the smallest element from the unsorted portion.

### How it Works
1. Find the minimum element in unsorted array
2. Swap it with the first element
3. Move the boundary of sorted array
4. Repeat until entire array is sorted

### Characteristics
- **Simple** implementation
- **Not stable** by default
- **In-place** sorting
- **Consistent** O(n²) performance

### Use Cases
- Small datasets
- Memory-constrained environments
- When write operations are costly

---

## 🟢 Insertion Sort

### Description
Insertion Sort builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms.

### How it Works
1. Start with second element
2. Compare with previous elements
3. Insert in correct position
4. Repeat for all elements

### Characteristics
- **Efficient** for small datasets
- **Stable** sorting algorithm
- **In-place** sorting
- **Adaptive** - performs well on nearly sorted data

### Use Cases
- Small datasets
- Nearly sorted data
- Online algorithm (can sort as it receives data)

---

## 🔴 Merge Sort

### Description
Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.

### How it Works
1. Divide array into two halves
2. Recursively sort both halves
3. Merge the sorted halves
4. Return merged result

### Characteristics
- **Stable** sorting algorithm
- **Consistent** O(n log n) performance
- **Not in-place** - requires additional memory
- **Divide and conquer** approach

### Use Cases
- Large datasets
- When stability is required
- External sorting
- Linked lists

---

## 🟣 Quick Sort

### Description
Quick Sort is a divide-and-conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.

### How it Works
1. Choose a pivot element
2. Partition array around pivot
3. Recursively sort sub-arrays
4. Combine results

### Characteristics
- **Fast** average case performance
- **In-place** sorting
- **Not stable** by default
- **Worst case** O(n²) when pivot is always smallest/largest

### Use Cases
- General-purpose sorting
- Large datasets
- When average case performance matters
- System libraries (with optimizations)

---

## 🟠 Heap Sort

### Description
Heap Sort is a comparison-based sorting technique based on Binary Heap data structure. It first builds a max heap from the input data, then repeatedly extracts the maximum element.

### How it Works
1. Build a max heap from input data
2. Extract maximum element (root)
3. Place it at end of array
4. Heapify remaining elements
5. Repeat until heap is empty

### Characteristics
- **Consistent** O(n log n) performance
- **In-place** sorting
- **Not stable**
- **Not adaptive** - doesn't perform better on nearly sorted data

### Use Cases
- When consistent performance is needed
- Memory-constrained environments
- Priority queue implementation
- Real-time systems

---

## 🎯 Choosing the Right Algorithm

### For Educational Purposes
- **Bubble Sort**: Easiest to understand
- **Selection Sort**: Simple selection concept
- **Insertion Sort**: Natural sorting approach

### For Small Datasets (< 50 elements)
- **Insertion Sort**: Fast and simple
- **Selection Sort**: Minimal swaps

### For Large Datasets
- **Merge Sort**: Guaranteed O(n log n), stable
- **Quick Sort**: Fast average case
- **Heap Sort**: Consistent performance

### For Nearly Sorted Data
- **Insertion Sort**: O(n) best case
- **Bubble Sort**: Can terminate early

### When Stability Matters
- **Merge Sort**: Stable and efficient
- **Insertion Sort**: Stable and simple
- **Bubble Sort**: Stable but slow

### When Memory is Limited
- **Heap Sort**: O(1) space, O(n log n) time
- **Quick Sort**: O(log n) space on average
- **Selection Sort**: O(1) space, simple

---

## 🔧 Implementation Notes

### Visualization Considerations
- All algorithms use `await` for smooth animations
- Comparisons and swaps are highlighted
- Statistics are tracked in real-time
- Speed can be adjusted for better understanding

### Performance in Visualizer
- Algorithms are intentionally slowed for visualization
- Real-world performance would be much faster
- Array size affects visualization smoothness

### Color Coding
- **Orange**: Elements being compared
- **Red**: Elements being swapped
- **Purple**: Pivot element (Quick Sort)
- **Green**: Sorted elements