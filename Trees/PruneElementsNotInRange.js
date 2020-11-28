const BinarySearchTree = require('./BinarySearchTree');

function PruneElementNotInRange(root, a, b) {
    if(!root) {
        return null;
    }
    root.left = PruneElementNotInRange(root.left, a, b);
    root.right = PruneElementNotInRange(root.right, a, b);

    if(root.data>=a && root.data<=b) {
        return root;
    }

    if(root.data<a) {
        return root.right;
    }
    if(root.data>b) {
        return root.left;
    }
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

PruneElementNotInRange(tree.root, 7, 13);
tree.traverse('in-order');