// question --> https://www.scaler.com/academy/mentee-dashboard/class/52312/assignment/problems/9294?navref=cl_tt_nv

module.exports = {
  //param A : array of integers
  //param B : array of integers
  //return an integer
  solve: function (A, B) {
    // 1. Sort on th basis of time
    let sortedCars = [];
    for (let i = 0; i < A.length; i++) {
      sortedCars.push(new Car(i, A[i], B[i]));
    }
    sortedCars.sort((a, b) => {
      return a.time - b.time;
    });
    let minHeap = new MinHeap([]);
    let slots = [];
    for (let i = 0; i < sortedCars.length; i++) {
      if (slots.length < sortedCars[i].time) {
        // just add new entry
        minHeap.add(sortedCars[i]);
        slots.push(sortedCars[i]);
      } else if (slots.length == sortedCars[i].time) {
        // try replacing
        if (minHeap.peek().profit < sortedCars[i].profit) {
          minHeap.poll();
          minHeap.add(sortedCars[i]);
          slots[slots.length - 1] = sortedCars[i];
        }
      }
    }
    let overallProfit = 0;
    while (minHeap.size() != 0) {
      overallProfit =
        (overallProfit + (minHeap.poll().profit % 1000000007)) % 1000000007;
    }
    return overallProfit;
  },
};

class Car {
  carNumber;
  time;
  profit;
  constructor(c, t, p) {
    this.carNumber = c;
    this.time = t;
    this.profit = p;
  }
}

class MinHeap {
  constructor(array) {
    this.createHeap(array);
  }

  // index of the parent node
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  // index of the left child node
  leftChild(index) {
    return index * 2 + 1;
  }

  // index of the right child node
  rightChild(index) {
    return index * 2 + 2;
  }

  // returns true if index is of a node that has no children
  isLeaf(index) {
    return (
      index >= Math.floor(this.values.length / 2) &&
      index <= this.values.length - 1
    );
  }

  swap(index1, index2) {
    let temp = this.values[index1];
    this.values[index1] = this.values[index2];
    this.values[index2] = temp;
    // Alternate code : swap using ES6 destructuring
    /*[this.values[index1], this.values[index2]] = [
            this.values[index2],
            this.values[index1],
          ];*/
  }

  shiftDown(index) {
    // if the node at index has children
    if (!this.isLeaf(index)) {
      // get indices of children
      let leftChildIndex = this.leftChild(index),
        rightChildIndex = this.rightChild(index),
        // start out largest index at parent index
        largestIndex = index;

      // if the left child > parent
      if (
        this.values[leftChildIndex] &&
        this.values[largestIndex] &&
        this.values[leftChildIndex].profit < this.values[largestIndex].profit
      ) {
        // reassign largest index to left child index
        largestIndex = leftChildIndex;
      }

      // if the right child > element at largest index (either parent or left child)
      if (
        this.values[rightChildIndex] &&
        this.values[largestIndex] &&
        this.values[rightChildIndex].profit <= this.values[largestIndex].profit
      ) {
        // reassign largest index to right child index
        largestIndex = rightChildIndex;
      }

      // if the largest index is not the parent index
      if (largestIndex !== index) {
        // swap
        this.swap(index, largestIndex);
        // recursively move down the heap
        this.shiftDown(largestIndex);
      }
    }
  }

  shiftUp(index) {
    let currentIndex = index,
      parentIndex = this.parent(currentIndex);

    // while we haven't reached the root node and the current element is greater than its parent node
    while (
      currentIndex > 0 &&
      this.values[currentIndex].profit < this.values[parentIndex].profit
    ) {
      // swap
      this.swap(currentIndex, parentIndex);
      // move up the binary heap
      currentIndex = parentIndex;
      parentIndex = this.parent(parentIndex);
    }
  }

  // insert a new element in heap
  add(element) {
    // add element to the end of the heap
    this.values.push(element);
    // move element up until it's in the correct position
    this.shiftUp(this.values.length - 1);
  }

  // returns value of min without removing
  peek() {
    return this.values[0];
  }

  size() {
    return this.values.length;
  }

  // removes and returns min element
  poll() {
    if (this.values.length < 1) return "heap is empty";

    // get min and last element
    const min = this.values[0];
    const end = this.values.pop();
    // reassign first element to the last element
    if (this.values.length > 0) {
      this.values[0] = end;
      // heapify down until element is back in its correct position
      this.shiftDown(0);
    }

    // return the min
    return min;
  }

  createHeap(array) {
    this.values = array;
    if (this.values.length > 0)
      // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
      for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
        this.shiftDown(i);
      }
  }
}
