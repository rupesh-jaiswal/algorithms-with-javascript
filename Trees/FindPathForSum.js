const Tree = require('./Trees');
// below function finds the path from root to all leafs
function findRootToLeaf(root, sum) {
    if(!root) {
        return false;
    }
    sum-=root.data;
    if (!root.left && !root.right) {
        return sum? false: true;
    }
    if(findRootToLeaf(root.left, sum)) {
        return true;
    }
    return findRootToLeaf(root.right, sum);
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

console.log(findRootToLeaf(tree.root, 6));