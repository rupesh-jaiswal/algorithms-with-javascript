const BinarySearchTree = require('./BinarySearchTree');

function rangePrinter(root, k1, k2) {
    if(!root) {
        return null;
    }

    if(root.data>=k1) {
        rangePrinter(root.left, k1, k2);
    }

    if(root.data>=k1 && root.data<=k2) {
        console.log(root.data);
    }
    if(root.data<=k2) {
        rangePrinter(root.right, k1,k2);
    }
}

const bst = new BinarySearchTree();
bst.add(10);
bst.add(6);
bst.add(13);
bst.add(7);
bst.add(2);
bst.add(16);
bst.add(3);
bst.add(9);

rangePrinter(bst.root, 4, 12);