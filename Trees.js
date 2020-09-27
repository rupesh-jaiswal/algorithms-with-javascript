const Stack = require('./Stack');

class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }

    addNode(root, newNode, queue) {
        if(!root) {
            root = newNode;
            return;
        }
        if(!root.left) {
            root.left = newNode;
            return;
        }
        if(!root.right) {
            root.right = newNode;
            return;
        }
        queue.push(root.left);
        queue.push(root.right);
        const nodeToInspect = queue.shift();
        this.addNode(nodeToInspect, newNode, queue);
    }
    add(data) {
        const newNode = new TreeNode(data);
        if(this.root) {
            this.addNode(this.root, newNode, []);
        }else {
            this.root = newNode;
        }
        
    }


    findDeepestNode(root) {
        const queue = [];
        if(!root) {
            return;
        }
        queue.push({
            node: root,
            position: '',
        });
        let temp;
        while(queue.length) {
            root = queue.shift();
            const { position, node } =root;
            if(position) {
                temp = node[position];
            }else {
                temp= node;
            }
            if(temp.left) {
                queue.push({
                    node: temp,
                    position: 'left',
                });
            }
            if(temp.right) {
                queue.push({
                    node: temp,
                    position: 'right',
                });
            }
        }
        return root;
    }
    remove(data) {
        if(!this.root) {
            return;
        }
        if(this.root.data===data) {
            if(!this.root.left && !this.root.right) {
                this.root = null;
            }
        }else {
            const queue = [];
            let isFound = true;
            let foundNodeInfo = {}
            queue.push(this.root);
            while(queue.length) {
                root = queue.shift();
                
                if(root.left) {
                    if(root.left.data === data) {
                        isFound=true;
                        foundNodeInfo= {
                            parent: root,
                            position: 'left', 
                        };
                        break;
                    }
                    queue.push(root.left);
                }
                if(root.right) {
                    if(root.right.data === data) {
                        isFound=true;
                        foundNodeInfo= {
                            parent: root,
                            position: 'right', 
                        };
                        break;
                    }
                    queue.push(root.right);
                }
            }
            if(isFound) {
                // if found get the deepest node parent with position of its leaf
                const {parent, position} = foundNodeInfo;
                const deepestNode = this.findDeepestNode(parent[position]);
                const { position: deepestNodeposition, node}  = deepestNode;
                if(deepestNodeposition) {
                    parent[position].data = node[deepestNodeposition].data;
                    node[deepestNodeposition]=null;
                }else {
                    parent[position] = null;
                }
            }
        }    
    }
    // traversing
    preOrder(root) {
        if(root) {
            console.log(root.data);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.data);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.data);
        }
    }

    preOrderNonRecursive(root) {
        const stack = new Stack();
        while(true) {
            while(root) {
                console.log(root.data);
                stack.push(root);
                root = root.left;
            }
            if(stack.isEmpty()) {
                break;
            }
            root = stack.pop();
            root = root.right;
        }
    }

    inOrderNonRecursive(root) {
        const stack = new Stack();
        while(true) {
            while(root) {
                stack.push(root);
                root = root.left;
            }
            if(stack.isEmpty()) {
                break;
            }
            root = stack.pop();
            console.log(root.data);
            root = root.right;
        }
    }
    
    postOrderNonRecursive(root) {
        const stack = new Stack();
        let previous = null;
        do {
            while(root) {
                stack.push(root);
                root = root.left;
            }
            while(root==null && !stack.isEmpty()) {
                root = stack.peek();
                if(root.right===null || root.right == previous) {
                    console.log(root.data);
                    stack.pop();
                    previous = root;
                    root=null;
                }else {
                    root = root.right;
                }
            }
        }while(!stack.isEmpty());
    }
    // findmax and min
    findMax = (root) => {
        let rootVal, left, right, max = 0;

        if(root) {
            rootVal = root.data;
            left = this.findMax(root.left);
            right = this.findMax(root.right);
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
    
    findMin = (root) => {
        let rootVal, left, right, min = Infinity;

        if(root) {
            rootVal = root.data;
            left = this.findMin(root.left);
            right = this.findMin(root.right);
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

    getMax() {
        return this.findMax(this.root);
    }


    getMin() {
        return this.findMin(this.root);
    }

    levelOrder (root) {
        const queue = [];
        if(!root) {
            return;
        }
        queue.push(root);
        while(queue.length>0) {
            root = queue.shift();
            console.log(root.data);
            if(root.left) {
                queue.push(root.left);
            }
            if(root.right) {
                queue.push(root.right);
            }
        }
    }

    findSizeRecursively(root) {
        if(!root) {
            return 0;
        }
        return this.findSizeRecursively(root.left) + 1+ this.findSizeRecursively(root.right);
    }
    size() {
        return this.findSizeRecursively(this.root);
    }
    findInBinaryTreeUsingRecursion(root, data) {
        if(root==null) {
            return false;
        }else {
            if(root.data === data) {
                return true;
            }
            const temp  = this.findInBinaryTreeUsingRecursion(root.left, data);
            if(temp) {
                return temp;
            }
            return this.findInBinaryTreeUsingRecursion(root.right, data);
        }
    }


    isPresent(data) {
        return this.findInBinaryTreeUsingRecursion(this.root, data);
    }

    findHeightRecursively(root) {
        if(!root) {
            return 0;
        }

        const leftHeight = this.findHeightRecursively(root.left);
        const rightHeight = this.findHeightRecursively(root.right);
        if(leftHeight>rightHeight) {
            return leftHeight+1;
        }
        return rightHeight+1;
    }

    findHeightWithoutRecursion(root) {
        const queue = [];
        if(!root) {
            return 0;
        }
        let level = 0;
        queue.push(root);
        queue.push(null);
        while(queue.length>0) {
            root = queue.shift();
            if(root===null) {
                if(queue.length>0) {
                    queue.push(null);
                }
                level++;
            }else {
                if(root.left) {
                    queue.push(root.left);
                }
                if(root.right) {
                    queue.push(root.right);
                }
            }
        }
        return level;
    }
    height() {
        //return this.findHeightRecursively(this.root);
        return this.findHeightWithoutRecursion(this.root);
    }

    traverse(order) {
        switch(order) {
            case 'pre-order': 
                //this.preOrder(this.root);
                this.preOrderNonRecursive(this.root);
                break;
            case 'in-order': 
                console.log('recursive');
                this.inOrder(this.root);
                console.log('non-recursive');
                this.inOrderNonRecursive(this.root);
                break;
            
            case 'post-order' :
                console.log('recursive');
                this.postOrder(this.root);
                console.log('non-recursive');
                this.postOrderNonRecursive(this.root);
                break;

            default: this.levelOrder(this.root);
        }
    }

    noOfLeaves() {
        return this.findNoOfLeavesRecursively(this.root);
    }

    noOfFullNodes() {
        const nodOFFullnodes =  this.findNoOFFullNodesRecursively(this.root);
        return nodOFFullnodes;
    }

    findNoOFFullNodesRecursively(root) {
        if(!root) {
            return 0;
        }
        console.log(root);
        if(root.right && root.left) {
            return (this.findNoOFFullNodesRecursively(root.left)+this.findNoOFFullNodesRecursively(root.right)+1);
        }
        if(root.left) {
            return this.findNoOFFullNodesRecursively(root.left);
        }
        if(root.right) {
            return this.findNoOFFullNodesRecursively(root.right);
        }
        return 0;
    }
    findNoOfLeavesRecursively(root) {
        if(!root) {
            return 0;
        }
        if(!root.left && !root.right) {
            return 1;
        }
        return this.findNoOfLeavesRecursively(root.left) + this.findNoOfLeavesRecursively(root.right);
    }
}

const tree = new Tree();
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
tree.add(9);
tree.add(10);
console.log('level-order');
tree.traverse();
// console.log(tree.isPresent(3));
// console.log(tree.isPresent(9));
// console.log(tree.height());
// console.log(tree.getMax());
// console.log(tree.getMin());
// console.log('In-order');
// tree.traverse('in-order');
// console.log('Post-order');
// tree.traverse('post-order');
// console.log('after delete');
// tree.remove(3);
// tree.traverse();
console.log('no of leaves: ', tree.noOfLeaves());
console.log('no of full nodes: ', tree.noOfFullNodes());
