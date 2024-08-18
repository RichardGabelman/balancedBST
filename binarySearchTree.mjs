class Node {
  constructor() {
    this.value = null;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }

  buildTree(arr) {


    return;
  }

  prettyPrint(node, prefix = "", isLeft = true) {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
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