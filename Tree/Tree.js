import nodeClass from "./nodeClass.js";
export default class Tree {
  #_root;

  constructor(root) {
    this.#_root = new nodeClass(root);
  }

  get root() {
    return this.#_root;
  }

  addValue(value) {
    const newNode = new nodeClass(value);
    if (this.#_root) {
      this.#_root.appendChild(newNode);
    } else {
      this.#_root = newNode;
    }
    return newNode;
  }
  // Queue (BFS): Søger niveau for niveau
  // Stack (DFS): Søger dybt ned først
  findValue(value) {
    //BFS
    const queue = [this.#_root];

    while (queue.length > 0) {
      const node = queue.shift();

      if (node.value === value) {
        return node;
      }
      for (const child of node.childNodes) {
        queue.push(child);
      }
    }

    return null;
  }

  removeValue(value) {
    const node = this.findValue(value);
    if (node) {
      node.parent.removeChild(node);
    } else {
      return null;
    }
  }

  dump() {
    for (const child of this.#_root.childNodes) {
      console.log(child.value);
      if (child.hasChildNodes()) {
        child.dump();
      }
    }
  }
}
