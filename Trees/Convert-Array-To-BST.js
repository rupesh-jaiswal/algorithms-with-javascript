const Tree = require('./Trees');

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function convertArrayToBST(array) {
    if(!array.length) {
        return null;
    }
    const mid = Math.floor(array.length/2);
    let root = new TreeNode(array[mid]);
    root.left = convertArrayToBST(array.slice(0, mid));
    root.right = convertArrayToBST(array.slice(mid+1, array.length));
    return root;
}

const array = [2,3,6,7,9,10,13,16, 21];
let root = convertArrayToBST(array);
console.log(root);
const tree = new Tree();
tree.root= root;

tree.traverse('in-order');