import { Tree } from "./binarySearchTree.mjs";

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

function createArray(size) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  return arr;
}

const randArr = createArray(12);
const tree = new Tree(randArr);
prettyPrint(tree.root);

console.log(`isBalanced: ${tree.isBalanced()}`);

console.log("levelOrder:");
tree.levelOrder(printNodeValue);

console.log("preOrder:");
tree.preOrder(printNodeValue);

console.log("postOrder:");
tree.postOrder(printNodeValue);

console.log("inOrder:");
tree.inOrder(printNodeValue);

tree.insert(101);
tree.insert(202);
tree.insert(303);

prettyPrint(tree.root);

console.log(`isBalanced: ${tree.isBalanced()}`);

tree.rebalance();

prettyPrint(tree.root);

console.log("levelOrder:");
tree.levelOrder(printNodeValue);

console.log("preOrder:");
tree.preOrder(printNodeValue);

console.log("postOrder:");
tree.postOrder(printNodeValue);

console.log("inOrder:");
tree.inOrder(printNodeValue);
