/*
Problem: Given pointers to two nodes in a binary search tree, find the lowest common
ancestor (LCA). Assume that both values already exist in the tree.

Solution:
The main idea of the solution is: while traversing BST from root to bottom, the first node we
encounter with value between α and β, i.e., α < node → data < β, is the Least Common
Ancestor(LCA) of α and β (where α < β). So just traverse the BST in pre-order, and if we find a
node with value in between α and β, then that node is the LCA. If its value is greater than both α
and β, then the LCA lies on the left side of the node, and if its value is smaller than both α and β,
then the LCA lies on the right side.
*/


function findLCA(root,a,b) {
    while(true) {
        if((a.data<root.data && root.data<b.data) || (b.data<root.data && root.data<a.data)) {
            return root;
        }
        if(a.data<root.data) {
            root=root.left;
        }else {
            root=root.right;
        }
    }
}