/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and l = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let neww = [];
  let tmp = l;
  while (tmp) {
    neww.push(tmp.value);
    tmp = tmp.next;
  }
  neww = neww.filter((n) => n !== k);
  let z = { next: null };
  for (let i = neww.length; i; --i) {
    z.value = neww.pop();
    z = { next: z };
  }
  z = z.next;
  return z;
}

module.exports = removeKFromList;
