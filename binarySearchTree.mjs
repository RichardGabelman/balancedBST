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
    let curr = this.root;

    while (curr) {
      if (value === curr.data) {
        return curr;
      }
      if (value < curr.data) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return null;
  }

  levelOrder(callback) {
    if (typeof callback !== "function") {
      throw new Error(
        `levelOrder expected a function but received ${typeof callback}`
      );
    }

    if (this.root === null) {
      return;
    }

    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      let curr = queue.shift();
      callback(curr);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  inOrder(callback, root = this.root) {
    if (typeof callback !== "function") {
      throw new Error(
        `inOrder expected a function but received ${typeof callback}`
      );
    }

    if (root === null) {
      return;
    }

    this.inOrder(callback, root.left);
    callback(root);
    this.inOrder(callback, root.right);
  }

  preOrder(callback, root = this.root) {
    if (typeof callback !== "function") {
      throw new Error(
        `preOrder expected a function but received ${typeof callback}`
      );
    }

    if (root === null) {
      return;
    }
    callback(root);
    this.preOrder(callback, root.left);
    this.preOrder(callback, root.right);
  }

  postOrder(callback, root = this.root) {
    if (typeof callback !== "function") {
      throw new Error(
        `postOrder expected a function but received ${typeof callback}`
      );
    }

    if (root === null) {
      return;
    }

    this.postOrder(callback, root.left);
    this.postOrder(callback, root.right);
    callback(root);
  }

  height(node = this.root) {
    if (node === null) {
      return 0;
    }
    if (node.left === null && node.right === null) {
      return 0;
    }
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  depth(node) {
    return this.height() - this.height(node);
  }

  isBalanced() {
    if (this.root === null) {
      return null;
    }
    const difference = Math.abs(this.height(this.root.left) - this.height(this.root.right));
    return (difference <= 1);
  }

  rebalance() {
    const values = [];
    this.inOrder(values.push);
    console.log(values);
    return;
  }
}
