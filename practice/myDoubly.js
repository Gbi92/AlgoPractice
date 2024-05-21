const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
var fs = require('fs');

class DoublyLinkedListNode {
      data;
      next = null;
      prev = null;
}

function sortedInsert(llist, data) {
  if(llist.data > data) {
      const inserted = new DoublyLinkedListNode();
      inserted.data = data;
      inserted.next = llist;
      inserted.prev = null;
      llist.prev = inserted;
      
      return inserted;
  }
  for (let node = llist.next; node !== null; node = node.next) {
      if (node.next !== null && node.next.data > data) {
          const inserted = new DoublyLinkedListNode();
          inserted.data = data;
          inserted.next = node.next;
          inserted.prev = node;
          node.next = inserted;
          
          return llist;
      }
      if(node.next === null) {
          const inserted = new DoublyLinkedListNode();
          inserted.data = data;
          inserted.next = null;
          inserted.prev = node;
          node.next = inserted;
          
          return llist;
      }
  }
}

function read() {
  return new Promise(function(resolve, reject) {
    const a = [];
    const rl = readline.createInterface({ input, output });
    rl.on('line', (input) => {
      a.push(parseInt(input));
      resolve(a);
    }); 
  });
}

async function main() {
  const a = await read();
  const head = new DoublyLinkedListNode();

  for (let i = 0, llist = head, prev = null; i < a[0]; i++, prev = llist, llist = new DoublyLinkedListNode(), prev.next = llist) {
      
      const llistItem = a[i +1]
      llist.data = llistItem;
      llist.prev = prev;
  }

  const data = a[a[0] + 1]

  let llist1 = sortedInsert(head, data);

  let str = '';
  for (let node = llist1; node !== null; node = node.next) {
    str += node.data + " ";
  }
}

main();