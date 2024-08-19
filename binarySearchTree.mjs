class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

export class Tree {
  constructor(arr) {
    // Remove duplicates from arr
    arr = [...new Set(arr)];
    // Sort arr
    arr.sort((a, b) => {
      return a - b;
    });
    this.root = this.buildTree(arr);
  }

  buildTree(arr, start = 0, end = arr.length - 1) {
    if (start > end) {
      return null;
    }
    const mid = Math.round((start + end) / 2);
    const root = new Node(arr[mid]);
    root.left = this.buildTree(arr, start, mid - 1);
    root.right = this.buildTree(arr, mid + 1, end);

    return root;
  }

  insert(value) {
    return;
  }

  deleteItem(value) {
    return;
  }

  find(value) {
    return;
  }

  levelOrder(callback) {
    return;
  }

  inOrder(callback) {
    return;
  }

  preOrder(callback) {
    return;
  }

  postOrder(callback) {
    return;
  }

  height(node) {
    return;
  }

  depth(node) {
    return;
  }

  isBalanced() {
    return;
  }

  rebalance() {
    return;
  }
}
