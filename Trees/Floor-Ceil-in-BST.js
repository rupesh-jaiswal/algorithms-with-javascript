const BinarySearchTree = require('./BinarySearchTree');

function getFloorValue(root, data, prev) {
    if(!root) {
        return null;
    }
    let left = getFloorValue(root.left, data,prev);
    if(left) {
        return left;
    }
    if(root.data == data) {
        return root;
    }
    if(root.data>data) {
        return prev.value;
    }
    prev.value = root;
    return getFloorValue(root.right, data, prev);
}


function getCeilValue(root, data, prev) {
    if(!root) {
        return null;
    }
    const right = getCeilValue(root.right, data, prev);
    if(right) {
        return right;
    }
    if(root.data == data) {
        return root;
    }
    if(root.data<data) {
        return prev.value;
    }

    prev.value = root;
    return getCeilValue(root.left, data, prev);
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

let prev = {
    value: null,
}

console.log(getFloorValue(bst.root, 8, prev));
prev.value = null;

console.log(getCeilValue(bst.root, 4, prev));