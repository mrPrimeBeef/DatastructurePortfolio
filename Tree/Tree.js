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
    return this.#_root.appendChild(newNode);
  }

  // findValue(value) {
  //   if (this.#_root.value == value) {
  //     return this.#_root;
  //   } else {
  //     for (const child of this.#_root.childNodes) {
  //       child = this.findValue(value);
  //       if (child.value === value) {
  //         return child;
  //       }
  //     }
  //   }
  // }

  removeValue(value) {
    const node = this.findValue(value);
    node.parent.removeChild(node);
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

const tree = new Tree("rootNode");

const node1 = new nodeClass("1");
const node2 = new nodeClass("2");
const node3 = new nodeClass("3");
const node4 = new nodeClass("4");
const node5 = new nodeClass("5");

tree.root.appendChild(node1);
tree.root.appendChild(node2);

tree.root.firstChild().appendChild(node4);
tree.root.firstChild().appendChild(node3);
tree.root.firstChild().appendChild(node5);

// console.log(tree.findValue("3")); 

