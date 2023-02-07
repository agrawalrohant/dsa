// Definition for singly-linked list.
//			function Node(data){
//				this.data = data
//				this.next = null
//			}

module.exports = {
  //param A : array of integers
  //return the head node in the linked list
  mergeKLists: function (A) {
    let minHeap = new MinHeap([]);
    for (let i = 0; i < A.length; i++) {
      let head = A[i];
      let curr = head;
      while (curr.next != null) {
        minHeap.add(curr);
        curr = curr.next;
      }
      minHeap.add(curr);
    }
    let newHead = minHeap.poll();
    let current = newHead;
    while (minHeap.size() > 0) {
      current.next = minHeap.poll();
      current = current.next;
    }
    current.next = null;
    return newHead;
  },
};

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
        this.values[leftChildIndex].data < this.values[largestIndex].data
      ) {
        // reassign largest index to left child index
        largestIndex = leftChildIndex;
      }

      // if the right child > element at largest index (either parent or left child)
      if (
        this.values[rightChildIndex] &&
        this.values[largestIndex] &&
        this.values[rightChildIndex].data <= this.values[largestIndex].data
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
      this.values[currentIndex].data < this.values[parentIndex].data
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
    if (this.values.length > 0) {
      // since leaves start at floor(nodes / 2) index, we work from the leaves up the heap
      for (let i = Math.floor(this.values.length / 2); i >= 0; i--) {
        this.shiftDown(i);
      }
    }
  }
}
