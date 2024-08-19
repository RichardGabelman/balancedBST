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

  insert(value, root = this.root) {
    if (root === null) {
      return new Node(value);
    }

    if (value === root.data) {
      console.log("No duplicate values!");
      return root;
    }

    if (value < root.data) {
      root.left = this.insert(value, root.left);
    } else {
      root.right = this.insert(value, root.right);
    }

    return root;
  }

  deleteItem(value, root = this.root) {
    if (root === null) {
      return root;
    }

    if (root.data > value) {
      root.left = this.deleteItem(value, root.left);
    } else if (root.data < value) {
      root.right = this.deleteItem(value, root.right);
    } else {
      if (root.left === null) {
        return root.right;
      }
      if (root.right === null) {
        return root.left;
      }

      function getSuccessor(curr) {
        curr = curr.right;
        while (curr !== null && curr.left !== null) {
          curr = curr.left;
        }
        return curr;
      }

      let succ = getSuccessor(root);
      root.data = succ.data;
      root.right = this.deleteItem(succ.data, root.right);
    }
    return root;
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
