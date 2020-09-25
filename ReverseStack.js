const Stack = require('./Stack');
function reverse(stack) {

    if(stack.isEmpty()) {
        return;
    }
    const temp  = stack.pop();
    reverse(stack);
    insertAtBottom(stack,temp);
}
function insertAtBottom(stack,data) {
    if(stack.isEmpty()) {
        stack.push(data);
        return;
    }
    const temp = stack.pop();
    insertAtBottom(stack, data);
    stack.push(temp);
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.display();

reverse(stack);
console.log('after reverse');
stack.display();
