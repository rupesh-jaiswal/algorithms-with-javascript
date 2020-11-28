const BinarySearchTree = require('./BinarySearchTree');

function countLeaves(root) {
    if(!root) {
        return 1;
    }
    let a=0, b=0;
    a=countLeaves(root.left);
    b=countLeaves(root.right);
    return a+b;
}

const tree = new BinarySearchTree();
tree.add(10);
tree.add(6);
tree.add(16);
tree.add(3);
tree.add(9);
tree.add(13);
tree.add(7);
tree.add(2);

console.log(countLeaves(tree.root));