const Tree = require('./Trees');

function findLevelWithMaxSum(root) {
    if(!root) {
        return 0;
    }
    const queue = [];
    let currentSum = 0;
    let maxSum = 0;
    let maxLevel = 0;
    let level = 0;
    queue.push(root)
    queue.push(null);
    let temp;
    while(queue.length) {
        temp = queue.shift();
        if(temp===null) {
            if(currentSum>maxSum) {
                maxSum=currentSum;
                maxLevel = level;
            }
            currentSum=0;
            if(queue.length) {
                queue.push(null);
            }
            level++;
        }else {
            currentSum+=temp.data;
            if(temp.left) {
                queue.push(temp.left);
            }
            if(temp.right) {
                queue.push(temp.right);
            }
        }
    }
    return maxLevel;
}

const tree = new Tree();
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);

// tree.add(7);
// tree.add(8);
// tree.add(9);
console.log(findLevelWithMaxSum(tree.root));