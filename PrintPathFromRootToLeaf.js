const Tree = require('./Trees');

function printRootToLeaf(root, path,pathLen) {
    if(!root) {
        return;
    }

    path[pathLen++] = root.data;
    if(!root.left && !root.right) {
        printPath(path, pathLen);
    }
    printRootToLeaf(root.left, path,pathLen);
    printRootToLeaf(root.right, path,pathLen);
}
function printPath(path, len) {
    console.log(path.slice(0, len).join(', '));
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

printRootToLeaf(tree.root, [], 0);