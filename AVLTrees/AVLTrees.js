class AVLTreeNode {
    constructor(data) {
        this.data = data;
        this.right = this.left = null;
        this.height = 0;
    }
}

class AVLTree {
    constructor(root) {
        this.root = null;
    }

    height(root) {
        if(!root) {
            return 0;
        }
        return root.height;
    }

    singleRotateLeft(x) {
        const w = x.left;
        x.left = w.right;
        w.right = x;
        x.height = Math.max(this.height(x.left), this.height(x.right))+1;
        w.height = Math.max(this.height(x.height), this.height(w.left))+1;
        return w;
    }

    singleRotateRight(x) {
        const w = x.right;
        x.right = w.left;
        w.left = x;
        x.height = Math.max(this.height(x.left), this.height(x.right))+1;
        w.height = Math.max(this.height(x.height), this.height(w.right))+1;
        return w;
    }

    doubleRotateleft(z) {
        z.left = this.singleRotateRight(z.left);
        return this.singleRotateLeft(z);
    }

    doubleRotateRight(z) {
        z.right = this.singleRotateLeft(z.right);
        return this.singleRotateRight(z);
    }
    addNode(root, newNode) {
        if(!root) {
            return newNode;
        }
        if(root.data>newNode.data) {
            root.left = this.addNode(root.left, newNode);
            if(Math.abs(this.height(root.left) - this.height(root.right)) ==2) {
                if(data<root.left.data) {
                    root = this.singleRotateLeft(root);
                }else {
                    root = this.doubleRotateleft(root);
                }
            }
        }else {
            root.right = this.addNode(root.right, newNode);
            if(Math.abs(this.height(root.left) - this.height(root.right)) ==2) {
                if(data<root.right.data) {
                    root = this.doubleRotateRight(root);
                }else {
                    root = this.singleRotateRight(root);
                }
            }
        }
        root.height =Math.max(this.height(root.left),this.height(root.right))+1;

        return root;
    }
    add(data) {
        const newNode = new AVLTreeNode(data);
        if(!this.root) {
            this.root = newNode;
            return;
        }
        this.addNode(this.root, newNode);
    }
}

const avltree = new AVLTree();
avltree.add(10);
avltree.add(7);
avltree.add(15);
avltree.add(6);
avltree.add(13);

console.log(avltree.root);