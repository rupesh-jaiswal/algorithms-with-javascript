const { LinkedList } = require('./LinkedList');
const Tree = require('./Trees');
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function findMiddleElement(head) {
    let slowPtr = head;
    let fastPtr = head;
    while(fastPtr.next!==null && fastPtr.next.next!==null) {
        fastPtr=fastPtr.next.next;
        slowPtr=slowPtr.next;
    }

    return slowPtr;
}

function convertToBST(head) {
    if(!head || !head.next) {
        return head? new TreeNode(head.data): null;
    }
    let p, q;
    let temp = findMiddleElement(head);
    let root = new TreeNode(temp.data);
    p = head;
    while(p && p.next!=temp) {
        p=p.next;
    }
    if(p) {
        p.next = null;
    }
    q= temp.next;
    temp.next=null;
    root.left = convertToBST(head);
    root.right = convertToBST(q);
    return root;
}

const linkedList = new LinkedList();
linkedList.addNodeAtLast(2);
linkedList.addNodeAtLast(3);
linkedList.addNodeAtLast(6);
linkedList.addNodeAtLast(7);
linkedList.addNodeAtLast(9);
linkedList.addNodeAtLast(10);
linkedList.addNodeAtLast(13);
linkedList.addNodeAtLast(16);

let root = convertToBST(linkedList.head);
console.log(root);

const tree = new Tree();
tree.root = root;

tree.traverse();