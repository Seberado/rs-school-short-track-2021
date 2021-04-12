const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */
class Queue {
  constructor() {
    this.length = 0;
    this.top = null;
    this.tail = null;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);
    node.value = element;
    if (!this.tail) {
      this.tail = node;
      this.top = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
  }

  dequeue() {
    // const node = new ListNode();
    // node.next = null;
    if (!this.top) return null;
    const deleted = this.top;
    if (this.top === this.tail) {
      this.tail = null;
    }
    this.top = this.top.next;
    this.length -= 1;
    return deleted.value;
  }
}

module.exports = Queue;
