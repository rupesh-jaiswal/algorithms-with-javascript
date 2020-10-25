const Tree = require("./Trees");

//  in this we will construct a binary tree from inorder and preorder
class TreeNode {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function buildBinaryTreeWithPreAndIn(preorder, inorder, inorderStart, inorderEnd) {
    if(inorderStart>inorderEnd-1) {
        return null;
    }
    const data = preorder.shift();
    const newNode = new TreeNode(data);
    const inOrderIndex = inorder.slice(inorderStart, inorderEnd).indexOf(data) + inorderStart;
    newNode.left = buildBinaryTreeWithPreAndIn(preorder, inorder, inorderStart, inOrderIndex);
    newNode.right = buildBinaryTreeWithPreAndIn(preorder, inorder, inOrderIndex+1, inorderEnd);
    return newNode;
}

function buildBinaryTreeWithPostAndIn(postOrder, inorder, inorderStart, inorderEnd)
{
    if(inorderStart>inorderEnd-1) {
        return null;
    }
    const data = postOrder.pop();
    const newNode = new TreeNode(data);
    const inOrderIndex = inorder.slice(inorderStart, inorderEnd).indexOf(data) + inorderStart;
    newNode.right = buildBinaryTreeWithPostAndIn(postOrder, inorder, inOrderIndex+1, inorderEnd);
    newNode.left = buildBinaryTreeWithPostAndIn(postOrder, inorder, inorderStart, inOrderIndex);

    return newNode;
}
function buildBinaryTreeWithLevelAndIn(levelOrder, inorder, inorderStart, inorderEnd) {
    if(inorderStart>inorderEnd-1) {
        return null;
    }
    const data = levelOrder.shift();
    const newNode = new TreeNode(data);
    const inOrderIndex = inorder.slice(inorderStart, inorderEnd).indexOf(data) + inorderStart;
    let left, right;
    if(levelOrder.length) {
        left = levelOrder.shift();
    }
    if(levelOrder.length) {
        right = levelOrder.shift();
    }
    if(left) {
        levelOrder.unshift(left);
        newNode.left = buildBinaryTreeWithLevelAndIn(levelOrder, inorder, inorderStart, inOrderIndex);
    }
    if(right) {
        levelOrder.unshift(right);
        newNode.right = buildBinaryTreeWithLevelAndIn(levelOrder, inorder, inOrderIndex+1, inorderEnd);

    }

    return newNode;


}

const tree = new Tree();
const preorder = "A B D E C F".split(' ');
const inorder = "D B E A F C". split(' ');
const postorder = "D E B F C A".split(' ');
const levelorder = "A B C D E F".split(' ');
//tree.root = buildBinaryTreeWithPreAndIn(preorder, inorder, 0, inorder.length);
// tree.root = buildBinaryTreeWithPostAndIn(postorder, inorder, 0, inorder.length);
tree.root = buildBinaryTreeWithLevelAndIn(levelorder, inorder, 0, inorder.length);
tree.traverse('in-order');