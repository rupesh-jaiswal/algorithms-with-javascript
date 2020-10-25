const BinarySearchTree = require('./BinarySearchTree');

function kthSmallest(root, k, counter) {
    if(!root) {
        return null;
    }
    const left = kthSmallest(root.left, k, counter);
    if(left) {
        return left;
    }
    counter.value = counter.value+1;
    if(counter.value ==k ) {
        return root;
    }
    return kthSmallest(root.right, k, counter);
}
let counter = {
    value: 0,
};

const bst = new BinarySearchTree();
bst.add(10);
bst.add(6);
bst.add(13);
bst.add(7);
bst.add(2);
bst.add(16);
bst.add(3);
bst.add(9);

console.log(kthSmallest(bst.root, 4,counter));