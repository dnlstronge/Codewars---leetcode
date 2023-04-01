
// difficulty (medium)


// unsure but signgular linked list will be e.g , 3, 4, 5, 6, 7 etc, left always left than midpoint and right always greater
/* coulndnt the index of each be found and used to switch the values to each other, I can see were you might split at mid point which would save traversing 
the whole list but I implemented it like this */


const reversed = (list, left, right) => {
    let leftdp = list.indexOf(left)
    //console.log(leftdp)
    let rightdp = list.indexOf(right)
    if(leftdp === -1 || rightdp === -1) {
      //console.log(list) 
      console.log(list)
      return list
    } else {
     //console.log(rightdp)
      list[leftdp] = right;
      list[rightdp] = left;
      
  console.log(list)
  return list
    }
}

reversed([1, 2, 3, 4, 5], 2, 4)
reversed([5], 1, 1)
reversed([1, 2, 3], 1, 3)
reversed([5, 6, 7, 8, 9, 10, 11, 12, 13], 12, 7)




/*

Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]
Example 2:

Input: head = [5], left = 1, right = 1
Output: [5]
 

Constraints:

The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n
 */
