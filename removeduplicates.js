const deleteDuplicates = function(head) {
  let temp = head;
    while (temp != null) {
        while(temp.next != null && temp.next.val == temp.val) {
           temp.next = temp.next.next;
        }
        temp = temp.next;
    }
    return head;
}   

/*
Success
Details 
Runtime: 76 ms, faster than 95.92% of JavaScript online submissions for Remove Duplicates from Sorted List.
Memory Usage: 40.4 MB, less than 88.53% of JavaScript online submissions for Remove Duplicates from Sorted List.
*/
