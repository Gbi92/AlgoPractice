class MyNode {
  data: number;
  next: MyNode | null;

  constructor(data: number, next: MyNode | null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  head: MyNode | null = null;
  tail: MyNode | null = null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(data: number) {
    const node = new MyNode(data, null);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  insert(data: number, position: number) {
    if (position === 0) {
      const newHead = new MyNode(data, this.head);
      return newHead;
    }
    for (let node = head, i = 0; node !== null; node = node.next, i++) {
      if (i === position - 1) {
        const inserted = new MyNode(data, node.next);
        node.next = inserted;

        return head;
      }
    }
  }
}

const list = new LinkedList();
list.insert(2, 0);

const node_three = new MyNode(3, null);
const node_two = new MyNode(2, node_three);
const node_one = new MyNode(1, node_two);

const node_four = new MyNode(4, null);
node_three.next = node_four;

for (
  let node: MyNode | null = node_one, i = 0;
  node !== null;
  node = node.next, i++
) {}

let head: MyNode | null = node_one;
while (head !== null) {
  head = head.next;
}
