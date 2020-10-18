const Tree = require('./Trees');
const Stack = require('./Stack');
function zigzagTraversal(root) {
    
    if(!root) {
        return;
    }
    const currentLevel = new Stack();
    const nextLevel  = new Stack();
    let leftToRight = 1;
    currentLevel.push(root);
    while(!currentLevel.isEmpty()) {
        const temp = currentLevel.pop();
        if(temp) {
            console.log(temp.data);
            if(leftToRight) {
                if(temp.left) nextLevel.push(temp.left);
                if(temp.right) nextLevel.push(temp.right);
            }else {
                if(temp.right) nextLevel.push(temp.right);
                if(temp.left) nextLevel.push(temp.left);
            }
        }
        if(currentLevel.isEmpty()) {
            currentLevel.head = nextLevel.head;
            nextLevel.head= null;
            leftToRight = 1-leftToRight;
        }
    }
}

const tree = new Tree();
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
tree.add(6);
tree.add(7);
tree.add(8);
tree.add(9);

zigzagTraversal(tree.root);