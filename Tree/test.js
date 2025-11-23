import assert from 'assert';
import { Tree } from './tree.js';
import { Node } from './node.js';

describe('Node', function() {
  describe('constructor', function() {
    it('should create a node with a value', function() {
      const node = new Node('test');
      assert.equal(node.value, 'test');
    });

    it('should have empty childNodes initially', function() {
      const node = new Node('test');
      assert.equal(node.childNodes.length, 0);
    });

    it('should have null parent initially', function() {
      const node = new Node('test');
      assert.equal(node.parent, null);
    });
  });

  describe('#firstChild()', function() {
    it('should return the first child', function() {
      const parent = new Node('parent');
      const child1 = new Node('child1');
      const child2 = new Node('child2');
      parent.appendChild(child1);
      parent.appendChild(child2);
      assert.equal(parent.firstChild(), child1);
    });

    it('should return undefined if no children', function() {
      const node = new Node('test');
      assert.equal(node.firstChild(), undefined);
    });
  });

  describe('#lastChild()', function() {
    it('should return the last child', function() {
      const parent = new Node('parent');
      const child1 = new Node('child1');
      const child2 = new Node('child2');
      parent.appendChild(child1);
      parent.appendChild(child2);
      assert.equal(parent.lastChild(), child2);
    });

    it('should return undefined if no children', function() {
      const node = new Node('test');
      assert.equal(node.lastChild(), undefined);
    });
  });

  describe('#hasChildNodes()', function() {
    it('should return true if node has children', function() {
      const parent = new Node('parent');
      const child = new Node('child');
      parent.appendChild(child);
      assert.equal(parent.hasChildNodes(), true);
    });

    it('should return false if node has no children', function() {
      const node = new Node('test');
      assert.equal(node.hasChildNodes(), false);
    });
  });

  describe('#appendChild()', function() {
    it('should add a child to the node', function() {
      const parent = new Node('parent');
      const child = new Node('child');
      parent.appendChild(child);
      assert.equal(parent.childNodes.length, 1);
      assert.equal(parent.childNodes[0], child);
    });

    it('should set the child\'s parent', function() {
      const parent = new Node('parent');
      const child = new Node('child');
      parent.appendChild(child);
      assert.equal(child.parent, parent);
    });

    it('should add multiple children', function() {
      const parent = new Node('parent');
      const child1 = new Node('child1');
      const child2 = new Node('child2');
      const child3 = new Node('child3');
      parent.appendChild(child1);
      parent.appendChild(child2);
      parent.appendChild(child3);
      assert.equal(parent.childNodes.length, 3);
    });
  });

  describe('#removeChild()', function() {
    it('should remove a child from the node', function() {
      const parent = new Node('parent');
      const child = new Node('child');
      parent.appendChild(child);
      parent.removeChild(child);
      assert.equal(parent.childNodes.length, 0);
    });

    it('should set the child\'s parent to null', function() {
      const parent = new Node('parent');
      const child = new Node('child');
      parent.appendChild(child);
      parent.removeChild(child);
      assert.equal(child.parent, null);
    });
  });

  describe('#replaceChild()', function() {
    it('should replace a child with a new child', function() {
      const parent = new Node('parent');
      const oldChild = new Node('old');
      const newChild = new Node('new');
      parent.appendChild(oldChild);
      parent.replaceChild(newChild, oldChild);
      assert.equal(parent.childNodes[0], newChild);
    });

    it('should transfer children to the new child', function() {
      const parent = new Node('parent');
      const oldChild = new Node('old');
      const grandchild = new Node('grandchild');
      const newChild = new Node('new');
      parent.appendChild(oldChild);
      oldChild.appendChild(grandchild);
      parent.replaceChild(newChild, oldChild);
      assert.equal(newChild.childNodes[0], grandchild);
    });

    it('should set the new child\'s parent correctly', function() {
      const parent = new Node('parent');
      const oldChild = new Node('old');
      const newChild = new Node('new');
      parent.appendChild(oldChild);
      parent.replaceChild(newChild, oldChild);
      assert.equal(newChild.parent, parent);
    });
  });
});

describe('Tree', function() {
  describe('constructor', function() {
    it('should create a tree with a root node', function() {
      const tree = new Tree('root');
      assert.equal(tree.root.value, 'root');
    });
  });

  describe('#addValue()', function() {
    it('should add a value to the tree', function() {
      const tree = new Tree('root');
      tree.addValue('child1');
      assert.equal(tree.root.childNodes.length, 1);
    });

    it('should add multiple values', function() {
      const tree = new Tree('root');
      tree.addValue('child1');
      tree.addValue('child2');
      tree.addValue('child3');
      assert.equal(tree.root.childNodes.length, 3);
    });
  });

  describe('#findValue()', function() {
    it('should find a value in the tree', function() {
      const tree = new Tree('root');
      tree.addValue('child1');
      tree.addValue('child2');
      const found = tree.findValue('child1');
      assert.equal(found.value, 'child1');
    });

    it('should return null if value is not found', function() {
      const tree = new Tree('root');
      tree.addValue('child1');
      const found = tree.findValue('notexist');
      assert.equal(found, null);
    });

    it('should find value in nested nodes', function() {
      const tree = new Tree('root');
      const child = tree.addValue('child1');
      child.appendChild(new Node('grandchild'));
      const found = tree.findValue('grandchild');
      assert.equal(found.value, 'grandchild');
    });
  });

  describe('#removeValue()', function() {
    it('should remove a value from the tree', function() {
      const tree = new Tree('root');
      tree.addValue('child1');
      tree.addValue('child2');
      tree.removeValue('child1');
      assert.equal(tree.root.childNodes.length, 1);
    });

    it('should not remove anything if value doesn\'t exist', function() {
      const tree = new Tree('root');
      tree.addValue('child1');
      tree.removeValue('notexist');
      assert.equal(tree.root.childNodes.length, 1);
    });

    it('should remove nested nodes', function() {
      const tree = new Tree('root');
      const child = tree.addValue('child1');
      child.appendChild(new Node('grandchild'));
      tree.removeValue('grandchild');
      assert.equal(child.childNodes.length, 0);
    });
  });

  describe('#dump()', function() {
    it('should print the tree structure', function() {
      const tree = new Tree('root');
      tree.addValue('child1');
      tree.addValue('child2');
      // Bare tjek at den ikke kaster fejl
      assert.doesNotThrow(() => tree.dump());
    });
  });
});