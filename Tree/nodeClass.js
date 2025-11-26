export default class nodeClass {
  #_parent;
  #_childNodes = [];
  #_value;

  constructor(value, parent = null, childNodes = null) {
    this.#_parent = parent;
    this.#_childNodes = childNodes || [];
    this.#_value = value;
  }

  get value() {
    return this.#_value;
  }

  get childNodes() {
    return this.#_childNodes;
  }

  get parent() {
    return this.#_parent;
  }

  set parent(node) {
    this.#_parent = node;
  }

  firstChild() {
    return this.#_childNodes[0];
  }

  lastChild() {
    return this.#_childNodes[this.#_childNodes.length - 1];
  }

  hasChildNodes() {
    return this.#_childNodes?.length > 0;
  }

  appendChild(child) {
    this.#_childNodes.push(child);
    child.parent = this;
  }

  removeChild(child) {
    this.#_childNodes = this.#_childNodes.filter((node) => node !== child);
    child.childNodes.parent = child.parent;
    child.parent = null;
  
  }

  replaceChild(newChild, oldChild) {
    if (oldChild.parent.childNodes.length > 0) {
      this.#_childNodes.push(newChild);
      newChild.parent = oldChild.parent;

      for (const child of oldChild.childNodes) {
        newChild.appendChild(child);
      }
      this.removeChild(oldChild);
    }
  }
  dump() {
    for (const child of this.#_childNodes) {
      console.log(child.value);
      if (child.hasChildNodes()) {
        child.dump();
      }
    }
  }
}
