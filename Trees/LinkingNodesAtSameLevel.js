const BinarySearchTree = require('./BinarySearchTree');

function linkingNodesAtSameLevel(root) {
    if(!root) {
        return null;
    }
    const queue = [];
    let currentlevelCount = 1;
    let nextLevelCount=0;
    queue.push(root);
    let prev;
    while(queue.length) {
        const temp = queue.shift();
        if(temp.left) {
            queue.push(temp.left);
            nextLevelCount++;
        }
        if(temp.right) {
            queue.push(temp.right);
            nextLevelCount++;
        }
        if(prev) {
            prev.next = temp;
        }
        prev=temp;
        currentlevelCount--;
        if(currentlevelCount==0) {
            currentlevelCount=nextLevelCount;
            nextLevelCount=0;
            prev=null;
        }
    }
}

const tree = new BinarySearchTree();
tree.add(10);
tree.add(6);
tree.add(16);
tree.add(3);
tree.add(9);
tree.add(13);
tree.add(7);
tree.add(2);

linkingNodesAtSameLevel(tree.root);
console.log(tree.root);