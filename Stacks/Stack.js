// stack using linked list

const { LinkedList }  = require('../LinkedList/LinkedList');
class Stack extends LinkedList{

    constructor() {
        super();
        this.head = null;
    }
    
    push(data) {
        this.addNodeAtFirst(data);
        this.top = super.head;
    }

    pop() {
        if(!this.head) {
            return;
        }
        const deleted = this.deleteFirst();
        return deleted;
    }

    peek() {
        if(!this.head) {
            return;
        }
        return this.head.data;
    }

    display() {
        this.displayList();
    }
    isEmpty() {
        if(!this.head) {
            return true;
        }
        return false;
    }
}

module.exports = Stack;
// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.display();
// console.log('top element', stack.peek());
// stack.pop();
// console.log('after delete');
// stack.display();