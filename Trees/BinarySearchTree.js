const Tree = require('./Trees');
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree extends Tree {
    constructor() {
        super();
        this.root = null;
    }

    addNode(root, newNode) {
        if(!root) {
            root = newNode;
            return;
        }

        if(root.data<newNode.data) {
            if(!root.right) {
                root.right = newNode;
                return;
            }
            this.addNode(root.right, newNode);
            return;
        }
        if(!root.left) {
            root.left = newNode;
            return;
        }
        return this.addNode(root.left, newNode);
    }
    add(data) {
        const newNode = new TreeNode(data);
        if(!this.root) {
            this.root = newNode;
            return;
        }
        //console.log(data);
        return this.addNode(this.root, newNode);
    }

    findMax(root) {
        if(!root) {
            return null;
        }
        if(!root.right) {
            return root;
        }
        return this.findMax(root.right);
    }

    findMin(root) {
        if(!root) {
            return null;
        }
        if(!root.left) {
            return root;
        }
        return this.findMin(root.left);
    }

    getMax() {
        return this.findMax(this.root);
    }


    getMin() {
        return this.findMin(this.root);
    }

    delete(root, data) {
        if(!root) {
            console.log('Element not found');
            return
        }
        if(root.data>data) {
            root.left = this.delete(root.left, data);
        }else if(root.data<data) {
            root.right = this.delete(root.right,data);
        }else {
            // found element
            let temp;
            if(root.left && root.right) {
                // find largest in left subtree
                temp = this.findMax(root.left);
                root.data = temp.data;
                root.left = this.delete(root.left, root.data);
            }else {
                if(root.left==null) {
                    root=root.right;
                }
                else if(root.right==null) {
                    root=root.left;
                }
            }
        }
        return root;
    }
    remove(data) {
        return this.delete(this.root, data);
    }
}

module.exports = BinarySearchTree;
// const tree = new BinarySearchTree();
// tree.add(10);
// tree.add(6);
// tree.add(16);
// tree.add(3);
// tree.add(9);
// tree.add(13);
// tree.add(7);
// tree.add(2);
// console.log('level-order');
// tree.traverse();
// console.log(tree.root)
// tree.remove(11);
// tree.traverse();
// console.log(tree.getMin());

// console.log('inorder');
// tree.traverse('in-order');