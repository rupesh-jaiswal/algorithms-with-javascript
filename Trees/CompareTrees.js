const Tree = require('./Trees');

function AreStructuryllySameTrees(root1, root2) {
    if(!root1 && !root2) {
        return true;
    }
    if(!root1 || !root2) {
        return false;
    }
    return (root1.data === root2.data) && AreStructuryllySameTrees(root1.left, root2.left) && AreStructuryllySameTrees(root1.right, root2.right);
}

const tree1 = new Tree();
tree1.add(1);

const tree2 = new Tree();
console.log(AreStructuryllySameTrees(tree1.root, tree2.root));