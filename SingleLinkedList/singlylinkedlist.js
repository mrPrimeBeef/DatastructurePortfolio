export default class SinglyLinkedList {
  head;
  #size;

  constructor() {
    this.head = null;
    this.#size = 0;
  }
  set(index, data) {
    if (index < 0 || index >= this.#size) {
      return false;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    current.data = data;
    return true;
  }

  size() {
        return this.#size;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      
      this.#size++;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this.#size++;
  }

  insert(index, data) {
    const newNode = Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.#size++;
      return;
    }

    let current = this.head;

    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.#size++;
  }

  getFirstNode() {
    return this.head;
  }

  getFirst() {
    return this.head.data;
  }
  getLastNode() {
    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    return current;
  }

  getLast() {
    const lastNode = this.getLastNode();
    return lastNode ? lastNode.data : null;
  }

  getNode(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  get(index) {
    const node = this.getNode(index);
    return node ? node.data : null;
  }

  getNextNode(node) {
    return node.next;
  }

  getPreviousNode(node) {
    if (!node || node === this.head) return null;
    let current = this.head;
    while (current && current.next !== node) {
      current = current.next;
    }
    return current;
  }

  insertBefore(node, data) {
    const newNode = Node(data);

    if (this.head === node) {
      newNode.next = this.head;
      this.head = newNode;
      this.#size++;
      return;
    }

    let current = this.head;
    while (current.next !== node) {
      current = current.next;
    }

    newNode.next = node;
    current.next = newNode;
    this.#size++;
  }

  insertAfter(node, data) {
    const newNode = Node(data);

    let current = this.head;
    while (current !== node) {
      current = current.next;
    }

    newNode.next = current.next;
    current.next = newNode;
    this.#size++;
  }
  removeNode(node) {
    if (this.head === null) {
      return null;
    }
    if (this.head === node) {
      const data = this.head.data;
      this.head = this.head.next;
      this.#size--;
      return data;
    }

    let current = this.head;
    while (current.next !== null && current.next !== node) {
      current = current.next;
    }

    if (current.next === null) {
      return null;
    }

    const data = current.next.data;
    current.next = current.next.next;
    this.#size--;
    return data;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }
    const data = this.head;
    this.head = this.head.next;
    this.#size--;
    return data;
  }

  removeLast() {
    if (this.head === null) {
      return null;
    }

    if (this.head.next === null) {
      const data = this.head;
      this.head = null;
      this.#size--;
      return data;
    }

    let current = this.head;
    while (current.next.next !== null) {
      current = current.next;
    }

    const data = current.next.data;
    current.next = null;
    this.#size--;
    return data;
  }

  remove(index) {
    if (this.head === null || index < 0 || index >= this.#size) {
      return null;
    }

    if (index === 0) {
      const data = this.head.data;
      this.head = this.head.next;
      this.#size--;
      return data;
    }

    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }

    const data = current.next.data;
    current.next = current.next.next;
    this.#size--;
    return data;
  }

  clear() {
    this.#size = 0;
    this.head = null;
  }

  printList() {
    let current = this.head;
    let output = "";

    while (current) {
      output += `[${current.data}] -> `;
      current = current.next;
    }

    output += "null";
    console.log(output);
  }

  // checkIndex(index) {
  //   if (index < 0 || index >= this.#size) {
  //     throw new RangeError("Index out of bounds");
  //   }
  // }
}

function Node(data) {
  return {
    data: data,
    next: null,
  };
}

// const list = new SinglyLinkedList();

// list.add('A');
// list.add('B');
// list.add('C');

// list.printList();
// console.log(list);
