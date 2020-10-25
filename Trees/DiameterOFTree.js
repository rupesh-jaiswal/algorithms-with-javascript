const Tree = require('./Trees');

function diameterOFTree(root, ptr) {
    if(!root) {
        return 0;
    }
    const left = diameterOFTree(root.left, ptr);
    const right = diameterOFTree(root.right, ptr);
    if(left+right > ptr) {
        ptr= left+right;
    }

    return Math.max(left,right)+1;
}

const tree = new Tree();
tree.add(1);
tree.add(2);
tree.add(3);
// tree.add(4);
// tree.add(5);
// tree.add(6);
// tree.add(7);
// tree.add(8);
// tree.add(9);
// tree.add(10);
// tree.add(11);
// tree.add(12);
// tree.add(13);
// tree.add(14);
// tree.add(15);
// tree.add(16);
// tree.remove(9);
// tree.remove(10);
// tree.remove(11);
// tree.remove(12);
// tree.remove(13);
// tree.remove(14);

console.log(diameterOFTree(tree.root, 0));