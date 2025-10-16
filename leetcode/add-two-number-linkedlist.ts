 //Definition for singly-linked list.
 // https://leetcode.com/problems/add-two-numbers/
 class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let carry=0;
    const head = new ListNode();
    let cur = head;
    while(l1!==null && l2!==null) {
        
        const sum = l1.val + l2.val + carry;
        carry = Math.floor(sum/10);
        const remainder = sum%10;
        cur.val = remainder;
        
      
        l1= l1.next;
        l2 = l2.next;
        cur.next = new ListNode();
        if(l1==null && l2 ==null && carry==0){
            cur.next = null
        } else {
            cur= cur.next;
        }
    }
    while(l1!==null) {
        
        const sum = l1.val + carry;
        carry = Math.floor(sum/10);
        const remainder = sum%10;
        cur.val = remainder;
        cur.next = new ListNode();
        l1=l1.next;
        if(l1==null && carry==0) {
            cur.next = null;
        } else {
            cur=cur.next;
        }
    }
    while(l2!==null) {
        
        const sum = l2.val + carry;
        carry = Math.floor(sum/10);
        const remainder = sum%10;
        cur.val = remainder;
        cur.next = new ListNode();
        l2= l2.next;
        if(l2==null && carry==0) {
            cur.next = null;
        } else {
            cur=cur.next;
        }
    }
    if(carry!==0 ){
        cur.val = carry
    }

    return head;
};