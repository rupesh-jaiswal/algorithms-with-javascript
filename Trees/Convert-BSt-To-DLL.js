const BinarySearchTree = require('./BinarySearchTree');


let prev = null;
function convertBSTtoDLL(p, head) {
    if(!p) {
        return;
    }
    convertBSTtoDLL(p.left, head);
    if(prev==null) {
        head.root = p;
    }else {
        prev.right = p;
        p.left = prev;
    }
    prev = p;
    convertBSTtoDLL(p.right, head);
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

function printDLL(head) {
    while(head!==null) {
        console.log(head.data);
        head = head.right;
    }
}
let head = {
    root:null
}
convertBSTtoDLL(bst.root, head);
console.log(head.root);
printDLL(head.root);