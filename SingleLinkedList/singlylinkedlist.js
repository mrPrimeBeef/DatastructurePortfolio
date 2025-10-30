
export default class singlyLinkedList {
  #array;
  #size;
  #capacity; 

  // 
  constructor(capacity = 4) {
    this.#capacity = capacity;
    this.#array = new StaticArray(this.#capacity);
    this.#size = 0;
  }

  size() {
    return this.#size;
  }

  capacity() {
    return this.#capacity;
  }

}
