import StaticArray from "../StaticArray/staticarray.js";

export default class DynamicArray {
  #array; //  StaticArray
  #size; // Antal faktiske elementer (brugte pladser)
  #capacity; // Aktuel kapacitet af det StaticArray

  // capacity = 4 default if none given
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

  get(index) {
    this.#_checkIndex(index);
    return this.#array.get(index);
  }

  set(index, item) {
    this.#_checkIndex(index);
    return this.#array.set(index, item);
  }

  add(item) {
    if (this.#size >= this.#capacity) {
      this.grow();
    }
    this.#array[this.#size] = item;
    this.#size++;
  }

  grow() {
    const newCapacity = this.#capacity * 2;
    const newArray = new StaticArray(newCapacity);

    for (let i = 0; i < this.#size; i++) {
      newArray[i] = this.#array[i];
    }
    this.#array = newArray;
    this.#capacity = newCapacity;
  }

  insert(index, item) {
    if (index < 0 || index > this.#size) {
      throw new RangeError("Index out of bounds");
    }

    if (this.#size >= this.#capacity) {
      this.grow();
    }

    for (let i = this.#size; i > index; i--) {
      this.#array[i] = this.#array[i - 1];
    }

    this.#array[index] = item;
    this.#size++;
  }

  remove(index) {
    this.#_checkIndex(index);

    for (let i = index; i < this.#size - 1; i++) {
      this.#array[i] = this.#array[i + 1];
    }

    this.#array[this.#size - 1] = undefined;

    this.#size--;
  }

  clear() {
    const newArray = new StaticArray();
    this.#size = 0;
    this.#array = newArray;
  }

  addFirst(item) {
    if (this.#size >= this.#capacity) {
      this.grow();
    }

    for (let i = 0; i < this.#array.size; i++) {
      this.#array[i] = this.#array[i + 1];
    }
    this.#array[0] = item;
    this.#size++;
  }

  getFirst() {
    return this.#array[0];
  }

  getLast() {
    return this.#array[this.#size - 1];
  }

  removeFirst() {
    this.remove(0);
  }

  removeLast() {
    this.remove(this.#size - 1);
  }

  isEmpty() {
    return this.#size === 0; 
  }


                                             //TODO Implement and write tests
// - `addAll( items[] )` - modtager et array af elementer, og tilføjer dem alle til listen, udvider om nødvendigt
// - `removeRange( startIndex, endIndex )` - fjerner alle elementer fra og med startIndex til lige før endIndex

  shrink() {}

  #_checkIndex(index) {
    if (index < 0 || index >= this.#size) {
      throw new RangeError("Index out of bounds");
    }
  }
}
