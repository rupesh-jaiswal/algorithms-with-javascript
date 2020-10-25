const BinarySearchTree = require('./BinarySearchTree');
const Tree = require('./Trees');

const findMax = (root) => {
    let rootVal, left, right, max = 0;

    if(root) {
        rootVal = root.data;
        left = findMax(root.left);
        right = findMax(root.right);
        if(left>right) {
            max=left;
        }else {
            max=right;
        }

        if(max<rootVal) {
            max= rootVal;
        }
    }
    return max;
}

const findMin = (root) => {
    let rootVal, left, right, min = Infinity;

    if(root) {
        rootVal = root.data;
        left = findMin(root.left);
        right = findMin(root.right);
        if(left<right) {
            min=left;
        }else {
            min=right;
        }

        if(min>rootVal) {
            min= rootVal;
        }
    }
    return min;
}

function isBST(root) {
    if(!root) {
        return true;
    }
    if(root.left && findMax(root.left)>root.data) {
        return false;
    }
    if(root.right && findMin(root.right)<root.data) {
        return false;
    }
    if(!isBST(root.left) || !isBST(root.right)) {
        return false;
    }
    return true;
}

function isBST1(root, min, max) {
    if(!root) {
        return true;
    }
    return (root.data>min && root.data>max) && (isBST1(root.left, min, root.data)) && isBST1(root.right, root.data, max);
}

function isBST2(root, prev) {
    if(!root) {
        return true;
    }
    if(!isBST2(root.left, prev)) {
        return false;
    }
    if(root.data<prev.data) {
        return false;
    }
    prev.data=root.data;
    return isBST2(root.right, prev);
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


//console.log(isBST(bst.root));
//console.log(isBST1(bst.root, findMin(bst.root), findMax(bst.root)));
console.log(isBST2(bst.root, {data: -Infinity}));
const tree = new Tree();
tree.add(6);
tree.add(2);
tree.add(8);
tree.add(1);
tree.add(9);

//console.log(isBST(tree.root));
//console.log(isBST1(tree.root, findMin(tree.root), findMax(tree.root)));
console.log(isBST2(tree.root, {data: -Infinity}));