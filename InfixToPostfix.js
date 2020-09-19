

const Stack = require('./Stack');

function isLeftParenthesis(str) {
    const leftParenthesis = ["(", "{", "["];
    return leftParenthesis.includes(str);
}

function isRightParenthesis(str) {
    const rightParenthesis = [")","}","]"];
    return rightParenthesis.includes(str);
}
function isSpace(str) {
    return (str==" ");
};

function isOperator(str) {
    const basicOperators = ["*", "/", "-", "+"];
    return basicOperators.includes(str);
}
function infixToPostfix(str) {
    const stack = new Stack();
    let i=0;
    let postFix = "";
    const length = str.length;
    while(i!==length) {
        const character = str.charAt(i);
        if(!isSpace(character)) {
            if(isRightParenthesis(character)) {
                while(!stack.isEmpty() && !isLeftParenthesis(stack.peek()) ) {
                    postFix+=stack.pop();
                    
                }
                stack.pop();
            }else if (isOperator(character)) {
                while(true) {
                    if(stack.isEmpty() || isLeftParenthesis(stack.peek())) {
                        break;
                    }
                    postFix+=stack.pop();
                }

                if(isLeftParenthesis(stack.peek())) {
                    stack.pop();
                }
                stack.push(character);

            }else if(isLeftParenthesis(character)) {
                stack.push(character);
            }else {
                postFix+=character;
            }
        }
        i++;
    }
    while(!stack.isEmpty()) {
        postFix+=stack.pop();
    }

    return postFix;
}
const string1 = "A * B - (C + D) + E";
const string2 = "2 + 3*4";
console.log(infixToPostfix(string2));


