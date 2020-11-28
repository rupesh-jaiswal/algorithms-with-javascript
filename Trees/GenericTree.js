class GenericTreeNode {
    constructor(data) {
        this.data = data;
        this.firstChild = null;
        this.nextSibling = null;
        this.childCount = 0;
    }
    incrementChildCount() {
        this.childCount = this.childCount+1;
    }
}

class GenericTree {
    constructor(n) {
        this.n = n;
        this.root = null;
    }
    addChild(root, newNode) {
        let temp = root;
        if(temp.firstChild) {
            while(temp.nextSibling!==null) {
                temp = temp.nextSibling;
            }
            temp.nextSibling = newNode;
            root.incrementChildCount();
        }else {
            temp.firstChild = newNode;
            root.incrementChildCount();
        }
    }
    addSibling(root, newNode) {
        let temp = root;
        while(temp.nextSibling !==null) {
            temp = temp.nextSibling;
        }
        temp.nextSibling = newNode;
    }
    addNode(root, parent, newNode) {
        // add sibling

        //let temp = root;
        if(parent.childCount<this.n) {
            this.addSibling(root, newNode);
            parent.incrementChildCount();
            return;
        }

        if(root.childCount<this.n) {
            this.addChild(root, newNode);
            return;
        }
        if(root.nextSibling) {
            this.addNode(root.nextSibling, parent, newNode);
            return;
        }
        this.addNode(parent.firstChild.firstChild, parent.firstChild, newNode);
        // if()
        
        // if(root.childCount<this.n) {
        //     this.addChild(root, newNode);
        //     return;
        // }

        //this.addNode(root.firstChild, root, newNode);
        // if(root.firstChild.childCount<this.n) {
        //     this.addChild(root.firstChild, newNode);
        //     return;
        // }
        //this.addNode(root.firstChild.nextSibling, newNode);
    }
    add(data) {
        const newNode = new GenericTreeNode(data);
        if(!this.root) {
            this.root = newNode;
            return;
        }
        if(!this.root.firstChild) {
            this.root.firstChild = newNode;
            this.root.incrementChildCount();
            return;
        }
        this.addNode(this.root.firstChild, this.root,newNode);
    }

    display(root) {
        if(!root)
            return;
        console.log(root.data);
        this.display(root.firstChild);
        this.display(root.nextSibling);
    }

    displayChild(root) {
        if(!root) {
            return;
        }
    }
    displaySiblings(root) {

    }
    displayLevelOrder(root) {
        if(!root) {
            return;
        }
        console.log(root.data);
        if(root.firstChild) {
            this.displaySiblings(root.firstChild);
        }
        this.display(child)
    }

    traverse() {
        this.display(this.root);
    }

    
};

const genericTree = new GenericTree(4);
genericTree.add(1);
genericTree.add(2);
genericTree.add(3);
genericTree.add(4);
genericTree.add(5);
genericTree.add(6);
genericTree.add(7);
genericTree.add(8);
genericTree.add(9);
genericTree.add(10);
genericTree.add(11);
genericTree.add(12);
genericTree.add(13);
genericTree.add(14);
genericTree.add(15);
genericTree.add(16);
genericTree.add(17);
genericTree.add(18);
genericTree.add(19);
genericTree.add(20);
genericTree.add(21);
genericTree.add(22);
genericTree.add(23);
// genericTree.add(10);
// genericTree.add(11);
// genericTree.add(12);
// genericTree.add(13);
// genericTree.add(14);
genericTree.traverse();
console.log(genericTree.root);