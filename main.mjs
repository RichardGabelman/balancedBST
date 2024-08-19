import { Tree } from "./binarySearchTree.mjs";

const tree = new Tree([1, 1, 2, 3, 4, 5, 10, 6, 7, 8, 9]);

function prettyPrint(node, prefix = "", isLeft = true) {
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

function printNodeValue(node) {
  console.log(node.data);
}

prettyPrint(tree.root);

tree.insert(100);
tree.insert(200);
tree.insert(400);
tree.insert(500000);

prettyPrint(tree.root);

tree.rebalance();

prettyPrint(tree.root);

