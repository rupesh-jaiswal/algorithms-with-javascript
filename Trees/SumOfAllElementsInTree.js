const Tree = require('./Trees');

function findSumRecursively(root) {
    if(!root) {
        return 0;
    }
    return (root.data + findSumRecursively(root.left) + findSumRecursively(root.right));
}

function findSumNonRecursive(root) {
    if(!root) {
        return 0;
    }
    let sum = 0;
    const queue = [];
    queue.push(root);
    while(queue.length) {
        const temp = queue.shift();
        sum+=temp.data;
        if(temp.left) {
            queue.push(temp.left);
        }
        if(temp.right) {
            queue.push(temp.right);
        }
    }
    return sum;
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

console.log('sum found recursively: ', findSumRecursively(tree.root) );
console.log('sum found non recursively: ', findSumNonRecursive(tree.root) )