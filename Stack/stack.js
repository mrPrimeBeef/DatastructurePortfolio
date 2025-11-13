export default class Stack {
  head;
  #size;

  constructor() {
    this.head = null;
    this.#size = 0;
  }

  size() {
    return this.#size;
  }

  clear() {
    this.head = null;
    this.#size = 0;
  }

  push(data) {
    const newNode = new Node(data);
    if (this.head) {
      const currentHead = this.head;
      newNode.prev = currentHead;
      this.head = newNode;
    } else {
      this.head = newNode;
    }
    this.#size++;
  }

  pop() {
    if (this.head) {
      let returnNode = this.head;
      this.head = returnNode.prev;
      this.#size--;
      return returnNode;
    } else {
      return null;
    }
  }

  peek(){
    return this.head;
  }

  get(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.prev;
    }
    return current;
  }
}

function Node(data) {
  return {
    data: data,
    prev: null,
  };
}
