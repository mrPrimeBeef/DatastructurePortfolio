import { Node } from "./node.js";
export class Tree {
  #_root;

  constructor(root) {
    this.#_root = new Node(root);
  }

  get root(){
    return this.#_root;
  }
  // - `addValue( value )` - der opretter en ny node med den givne value, og tilføjer den et sted i træet - du bestemmer selv hvor!
  addValue(value){
    new Node(value);

  }
  // - `findValue( value )` - der leder efter den givne value i træet, og returnerer den (første) Node der har den
  // - `removeValue( value )` - der finder og fjerner Noden med den givne value fra træet

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

const node1 = new Node("1");
const node2 = new Node("2");
const node3 = new Node("3");

tree.root.appendChild(node1);
tree.root.appendChild(node2);

tree.root.firstChild().appendChild(node3);

tree.dump();
