class SortingVisualizer {
    constructor() {
        this.array = [];
        this.arraySize = 50;
        this.speed = 5;
        this.isRunning = false;
        this.comparisons = 0;
        this.swaps = 0;
        
        this.initializeElements();
        this.setupEventListeners();
        this.generateArray();
        this.updateAlgorithmInfo('bubble');
    }

    initializeElements() {
        this.arrayContainer = document.getElementById('array-container');
        this.algorithmSelect = document.getElementById('algorithm-select');
        this.arraySizeSlider = document.getElementById('array-size');
        this.speedSlider = document.getElementById('speed');
        this.generateBtn = document.getElementById('generate-btn');
        this.sortBtn = document.getElementById('sort-btn');
        this.stopBtn = document.getElementById('stop-btn');
        this.sizeValue = document.getElementById('size-value');
        this.speedValue = document.getElementById('speed-value');
        this.statusText = document.getElementById('status-text');
        this.comparisonsSpan = document.getElementById('comparisons');
        this.swapsSpan = document.getElementById('swaps');
    }

    setupEventListeners() {
        this.algorithmSelect.addEventListener('change', (e) => {
            this.updateAlgorithmInfo(e.target.value);
        });

        this.arraySizeSlider.addEventListener('input', (e) => {
            this.arraySize = parseInt(e.target.value);
            this.sizeValue.textContent = this.arraySize;
            if (!this.isRunning) {
                this.generateArray();
            }
        });

        this.speedSlider.addEventListener('input', (e) => {
            this.speed = parseInt(e.target.value);
            this.speedValue.textContent = this.speed;
        });

        this.generateBtn.addEventListener('click', () => {
            if (!this.isRunning) {
                this.generateArray();
            }
        });

        this.sortBtn.addEventListener('click', () => {
            if (!this.isRunning) {
                this.startSorting();
            }
        });

        this.stopBtn.addEventListener('click', () => {
            this.stopSorting();
        });
    }

    generateArray() {
        this.array = [];
        this.comparisons = 0;
        this.swaps = 0;
        this.updateStats();
        
        for (let i = 0; i < this.arraySize; i++) {
            this.array.push(Math.floor(Math.random() * 300) + 10);
        }
        
        this.renderArray();
        this.updateStatus('Array generated');
    }

    renderArray() {
        this.arrayContainer.innerHTML = '';
        const maxValue = Math.max(...this.array);
        const containerWidth = this.arrayContainer.clientWidth;
        const barWidth = Math.max(2, (containerWidth - (this.array.length * 2)) / this.array.length);
        
        this.array.forEach((value, index) => {
            const bar = document.createElement('div');
            bar.className = 'array-bar';
            bar.style.height = `${(value / maxValue) * 300}px`;
            bar.style.width = `${barWidth}px`;
            bar.textContent = this.arraySize <= 20 ? value : '';
            bar.id = `bar-${index}`;
            this.arrayContainer.appendChild(bar);
        });
    }

    async startSorting() {
        this.isRunning = true;
        this.comparisons = 0;
        this.swaps = 0;
        this.updateStats();
        this.updateStatus('Sorting...');
        
        this.sortBtn.disabled = true;
        this.stopBtn.disabled = false;
        this.generateBtn.disabled = true;
        
        const algorithm = this.algorithmSelect.value;
        
        try {
            switch (algorithm) {
                case 'bubble':
                    await this.bubbleSort();
                    break;
                case 'selection':
                    await this.selectionSort();
                    break;
                case 'insertion':
                    await this.insertionSort();
                    break;
                case 'merge':
                    await this.mergeSort(0, this.array.length - 1);
                    break;
                case 'quick':
                    await this.quickSort(0, this.array.length - 1);
                    break;
                case 'heap':
                    await this.heapSort();
                    break;
            }
            
            if (this.isRunning) {
                await this.highlightSorted();
                this.updateStatus('Sorting completed!');
            }
        } catch (error) {
            if (this.isRunning) {
                this.updateStatus('Sorting stopped');
            }
        }
        
        this.stopSorting();
    }

    stopSorting() {
        this.isRunning = false;
        this.sortBtn.disabled = false;
        this.stopBtn.disabled = true;
        this.generateBtn.disabled = false;
        this.clearHighlights();
    }

    async sleep(ms) {
        if (!this.isRunning) throw new Error('Stopped');
        const delay = 1000 / this.speed;
        return new Promise(resolve => setTimeout(resolve, delay));
    }

    async highlightBars(indices, className) {
        this.clearHighlights();
        indices.forEach(index => {
            const bar = document.getElementById(`bar-${index}`);
            if (bar) bar.classList.add(className);
        });
        await this.sleep(100);
    }

    clearHighlights() {
        const bars = document.querySelectorAll('.array-bar');
        bars.forEach(bar => {
            bar.classList.remove('comparing', 'swapping', 'pivot');
        });
    }

    async swap(i, j) {
        await this.highlightBars([i, j], 'swapping');
        [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
        
        const bar1 = document.getElementById(`bar-${i}`);
        const bar2 = document.getElementById(`bar-${j}`);
        const maxValue = Math.max(...this.array);
        
        bar1.style.height = `${(this.array[i] / maxValue) * 300}px`;
        bar2.style.height = `${(this.array[j] / maxValue) * 300}px`;
        
        if (this.arraySize <= 20) {
            bar1.textContent = this.array[i];
            bar2.textContent = this.array[j];
        }
        
        this.swaps++;
        this.updateStats();
    }

    async compare(i, j) {
        await this.highlightBars([i, j], 'comparing');
        this.comparisons++;
        this.updateStats();
        return this.array[i] > this.array[j];
    }

    // Sorting Algorithms
    async bubbleSort() {
        const n = this.array.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (await this.compare(j, j + 1)) {
                    await this.swap(j, j + 1);
                }
            }
        }
    }

    async selectionSort() {
        const n = this.array.length;
        for (let i = 0; i < n - 1; i++) {
            let minIdx = i;
            for (let j = i + 1; j < n; j++) {
                if (await this.compare(minIdx, j)) {
                    minIdx = j;
                }
            }
            if (minIdx !== i) {
                await this.swap(i, minIdx);
            }
        }
    }

    async insertionSort() {
        const n = this.array.length;
        for (let i = 1; i < n; i++) {
            await this.highlightBars([i], 'comparing');
            let j = i - 1;
            
            // Compare current element with previous elements
            while (j >= 0) {
                if (await this.compare(j, j + 1)) {
                    await this.swap(j, j + 1);
                } else {
                    break;
                }
                j--;
            }
        }
    }

    async mergeSort(left, right) {
        if (left >= right) return;
        
        const mid = Math.floor((left + right) / 2);
        await this.mergeSort(left, mid);
        await this.mergeSort(mid + 1, right);
        await this.merge(left, mid, right);
    }

    async merge(left, mid, right) {
        const leftArr = this.array.slice(left, mid + 1);
        const rightArr = this.array.slice(mid + 1, right + 1);
        
        let i = 0, j = 0, k = left;
        
        while (i < leftArr.length && j < rightArr.length) {
            await this.highlightBars([k], 'comparing');
            this.comparisons++;
            this.updateStats();
            
            if (leftArr[i] <= rightArr[j]) {
                this.array[k] = leftArr[i];
                i++;
            } else {
                this.array[k] = rightArr[j];
                j++;
            }
            
            const bar = document.getElementById(`bar-${k}`);
            const maxValue = Math.max(...this.array);
            bar.style.height = `${(this.array[k] / maxValue) * 300}px`;
            if (this.arraySize <= 20) {
                bar.textContent = this.array[k];
            }
            
            k++;
            await this.sleep(50);
        }
        
        while (i < leftArr.length) {
            this.array[k] = leftArr[i];
            const bar = document.getElementById(`bar-${k}`);
            const maxValue = Math.max(...this.array);
            bar.style.height = `${(this.array[k] / maxValue) * 300}px`;
            if (this.arraySize <= 20) {
                bar.textContent = this.array[k];
            }
            i++;
            k++;
        }
        
        while (j < rightArr.length) {
            this.array[k] = rightArr[j];
            const bar = document.getElementById(`bar-${k}`);
            const maxValue = Math.max(...this.array);
            bar.style.height = `${(this.array[k] / maxValue) * 300}px`;
            if (this.arraySize <= 20) {
                bar.textContent = this.array[k];
            }
            j++;
            k++;
        }
    }

    async quickSort(low, high) {
        if (low < high) {
            const pi = await this.partition(low, high);
            await this.quickSort(low, pi - 1);
            await this.quickSort(pi + 1, high);
        }
    }

    async partition(low, high) {
        const pivot = this.array[high];
        await this.highlightBars([high], 'pivot');
        
        let i = low - 1;
        
        for (let j = low; j < high; j++) {
            if (await this.compare(high, j)) {
                i++;
                if (i !== j) {
                    await this.swap(i, j);
                }
            }
        }
        
        await this.swap(i + 1, high);
        return i + 1;
    }

    async heapSort() {
        const n = this.array.length;
        
        // Build max heap
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            await this.heapify(n, i);
        }
        
        // Extract elements from heap one by one
        for (let i = n - 1; i > 0; i--) {
            await this.swap(0, i);
            await this.heapify(i, 0);
        }
    }

    async heapify(n, i) {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        
        if (left < n && await this.compare(left, largest)) {
            largest = left;
        }
        
        if (right < n && await this.compare(right, largest)) {
            largest = right;
        }
        
        if (largest !== i) {
            await this.swap(i, largest);
            await this.heapify(n, largest);
        }
    }

    async highlightSorted() {
        for (let i = 0; i < this.array.length; i++) {
            const bar = document.getElementById(`bar-${i}`);
            bar.classList.add('sorted');
            await this.sleep(20);
        }
    }

    updateStats() {
        this.comparisonsSpan.textContent = this.comparisons;
        this.swapsSpan.textContent = this.swaps;
    }

    updateStatus(message) {
        this.statusText.textContent = message;
    }

    updateAlgorithmInfo(algorithm) {
        const algorithmInfo = {
            bubble: {
                name: 'Bubble Sort',
                timeComplexity: 'O(n²)',
                spaceComplexity: 'O(1)',
                description: 'Bubble Sort repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted.'
            },
            selection: {
                name: 'Selection Sort',
                timeComplexity: 'O(n²)',
                spaceComplexity: 'O(1)',
                description: 'Selection Sort divides the input list into two parts: a sorted portion at the left end and an unsorted portion at the right end. It repeatedly selects the smallest element from the unsorted portion.'
            },
            insertion: {
                name: 'Insertion Sort',
                timeComplexity: 'O(n²)',
                spaceComplexity: 'O(1)',
                description: 'Insertion Sort builds the final sorted array one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort.'
            },
            merge: {
                name: 'Merge Sort',
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(n)',
                description: 'Merge Sort is a divide-and-conquer algorithm that divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.'
            },
            quick: {
                name: 'Quick Sort',
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(log n)',
                description: 'Quick Sort is a divide-and-conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot, placing it in its correct position.'
            },
            heap: {
                name: 'Heap Sort',
                timeComplexity: 'O(n log n)',
                spaceComplexity: 'O(1)',
                description: 'Heap Sort is a comparison-based sorting technique based on Binary Heap data structure. It first builds a max heap from the input data, then repeatedly extracts the maximum element.'
            }
        };

        const info = algorithmInfo[algorithm];
        document.getElementById('algo-name').textContent = info.name;
        document.getElementById('time-complexity').textContent = info.timeComplexity;
        document.getElementById('space-complexity').textContent = info.spaceComplexity;
        document.getElementById('algo-description').textContent = info.description;
    }
}

// Initialize the visualizer when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new SortingVisualizer();
});