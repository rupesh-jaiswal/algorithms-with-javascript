const Tree = require('./Trees');

function MirrorBinaryTree(root) {
    if(root) {
        MirrorBinaryTree(root.left);
        MirrorBinaryTree(root.right);
        const temp  = root.left;
        root.left = root.right;
        root.right = temp;
    }
    return root;
}

const tree = new Tree();
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);

tree.add(7);
tree.add(8);
tree.add(9);
tree.traverse();
console.log('after mirror');
MirrorBinaryTree(tree.root);
tree.traverse();