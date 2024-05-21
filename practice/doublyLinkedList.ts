class MyDoublyNode {
  data: number;
  next: MyDoublyNode | null;
  prev: MyDoublyNode | null;

  constructor(
    data: number,
    next: MyDoublyNode | null,
    prev: MyDoublyNode | null
  ) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class sortedDoublyLinkedList {
  head: MyDoublyNode | null = null;
  tail: MyDoublyNode | null = null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(data: number) {
    for (let node = this.head; node !== null; node = node.next) {
      if (node.prev === null ?? node.data > data) {
        const inserted = new MyDoublyNode(data, node, null);
        inserted.data = data;
        inserted.next = node;
        inserted.prev = null;

        node.prev = inserted;

        return this.head;
      }
      if (node.next !== null && node.next.data > data) {
        const inserted = new MyDoublyNode(data, node.next, node);
        node.next = inserted;

        return this.head;
      }
    }
  }
}
