import { StaticArray } from "../StaticArray/staticarray.js";

export default class StaticArray {
  #array; // Det "skjulte" statiske array
  #size; // Antal faktiske elementer (brugte pladser)
  #capacity; // Aktuel kapacitet

  // capacity = 4 default if none given
  constructor(capacity = 4) {
    this.#capacity = capacity;
    this.#array = new StaticArray(this.#capacity);
    this.#size = 0;
  }

  get length(){
    return this.#size;
  }

}