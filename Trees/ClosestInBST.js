const BinarySearchTree = require('./BinarySearchTree');

function findClosestToAValue(root, k, prev) {
    if(!root) {
        return null;
    }
    if(root.data>k) {
        const left = findClosestToAValue(root.left, k, prev);
        if(left) {
            return left;
        }
    }

    if(root.data==k) {
        return root.data;
    }
    if(prev.value && prev.value< k && root.data>k) {
        if((k-prev.value) < (root.data-k)) {
            return prev.value;
        }
        return root.data;
    }

    if(prev.value && prev.value> k && root.data<k) {
        if((prev.value-k) < (k-root.data)) {
            return prev.value;
        }
        return root.data;
    }
    prev.value = root.data;
    return findClosestToAValue(root.right, k , prev);
    
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

const prev = {
    data: -Infinity,
};

console.log(findClosestToAValue(bst.root, 8, prev));