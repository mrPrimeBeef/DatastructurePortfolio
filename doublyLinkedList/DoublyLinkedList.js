export default class DoublyLinkedList {
  head;
  tail;
  #size;

  constructor() {
    this.head = null;
    this.tail = null;
    this.#size = 0;
  }

  set(index, data) {
    const targetNode = this.getNode(index);
    const oldData = targetNode.data;

    targetNode.data = data;

    return oldData;
  }

  size() {
    return this.#size;
  }

  addLast(data) {
    const newNode = new Node(data);

    if (this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.tail;

      current.next = newNode;
      newNode.prev = current;

      this.tail = newNode;
    }
    this.#size++;
  }

  addFirst(data) {
    const newNode = Node(data);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let current = this.head;

      current.prev = newNode;
      newNode.next = current;

      this.head = newNode;
    }
    this.#size++;
  }

  getFirstNode() {
    return this.head;
  }

  getFirst() {
    return this.head.data;
  }
  getLastNode() {
    return this.tail;
  }

  getLast() {
    return this.tail.data;
  }

  getNode(index) {
    this.checkIndex(index);

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
    return node.prev;
  }

  insert(index, data) {
    this.checkIndex(index);

    if (index === this.#size) {
      this.addLast(data);
      return;
    }

    if (index === 0) {
      this.addFirst(data);
      return;
    }
    const targetNode = this.getNode(index);
    const newNode = new Node(data);

    newNode.next = targetNode;
    newNode.prev = targetNode.prev;

    targetNode.prev.next = newNode;
    targetNode.prev = newNode;

    this.#size++;
  }

  insertBeforeNode(node, data) {
    if (node === null) {
      return;
    }
    const newNode = new Node(data);

    let temp = node.prev;

    node.prev = newNode;
    newNode.next = node;
    newNode.prev = temp;

    if (temp !== null) {
      temp.next = newNode;
    } else {
      this.head = newNode;
    }
    this.#size++;
  }

  insertAfterNode(node, data) {
    if (node === null) {
      return;
    }
    const newNode = new Node(data);

    let temp = node.next;

    node.next = newNode;
    newNode.prev = node;
    newNode.next = temp;

    if (temp !== null) {
      temp.prev = newNode;
    } else {
      this.tail = newNode;
    }
    this.#size++;
  }

  remove(index) {
    this.checkIndex(index);

    if (index === 0) {
      return this.removeFirst();
    }
    if (index === this.#size - 1) {
      return this.removeLast();
    }

    let targetNode = this.getNode(index);
    targetNode.prev.next = targetNode.next;
    targetNode.next.prev = targetNode.prev;

    targetNode.next = null;
    targetNode.prev = null;

    this.#size--;

    return targetNode;
  }

  removeFirst() {
    if (this.head === null) {
      return null;
    }

    if (this.head.next === null) {
      this.clear();
    } else {
      const targetNode = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      this.#size--;
      return targetNode;
    }
  }

  removeLast() {
    if (this.head === null) {
      return null;
    }

    if (this.head.next === null) {
      this.clear();
    } else {
      const targetNode = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.#size--;
      return targetNode;
    }
  }

  removeNode(node) {
    if (node === null) {
      return null;
    }
    if (this.head === node) {
      this.removeFirst();
      return;
    }
    if (this.tail === node) {
      this.removeLast();
      return;
    }

    node.prev.next = node.next;
    node.next.prev = node.prev;

    node.next = null;
    node.prev = null;

    this.#size--;
  }

  clear() {
    this.#size = 0;
    this.head = null;
    this.tail = null;
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

  checkIndex(index) {
    if (index < 0 || index >= this.#size) {
      throw new RangeError("Index out of bounds");
    }
  }
}

function Node(data) {
  return {
    data: data,
    next: null,
    prev: null,
  };
}
