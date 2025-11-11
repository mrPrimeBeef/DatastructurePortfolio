import assert from "assert";
import Queue from "./queue.js";

describe("Queue", function () {
  const data1 = "A";
  const data2 = "B";
  const data3 = "C";

  let queue = new Queue();

  this.beforeEach(function () {
    queue = new Queue();
  });

  describe("Basic details", function () {
    it("should have a head that points to null", function () {
      assert.equal(queue.head, null);
    });
    it("should have a size() method that returns 0 when the list is empty", function () {
      assert.equal(queue.size(), 0);
    });
    it("should have a clear() method that makes the queue empty", function () {
      const input = "A";
      const input2 = "B";
      const input3 = "C";
      queue.enqueue(input);
      queue.enqueue(input2);
      queue.enqueue(input3);

      assert.equal(queue.size(), 3);
      queue.clear();
      assert.equal(queue.size(), 0);
    });
    describe("Queue", function () {
      describe("Queue enqueue operations", function () {
        it("should have an enqueue(item) method to add an element last in the queue: with 3 elements", function () {
          const input = "A";
          const input2 = "B";
          const input3 = "C";
          queue.enqueue(input);
          queue.enqueue(input2);
          queue.enqueue(input3);
          assert.equal(queue.head.data, input);
          assert.equal(queue.size(), 3);
        });
        it("should have an enqueue(item) method to add an element last in the queue: with 1 element", function () {
          const input = "B";
          queue.enqueue(input);
          assert.equal(queue.head.data, input);
          assert.equal(queue.size(), 1);
        });
        it("should have an enqueue(item) method to add an element last in the queue: with 0 element", function () {
          assert.equal(queue.head, null);
          assert.equal(queue.size(), 0);
        });
      });
      describe("Queue dequeue operations", function () {
        it("should have an dequeue() method to remove and return first element in the queue: with 3 elements", function () {
          const input = "A";
          const input2 = "B";
          const input3 = "C";
          queue.enqueue(input);
          queue.enqueue(input2);
          queue.enqueue(input3);

          queue.dequeue();

          assert.equal(queue.head.data, input2);
        });
        it("should have an dequeue() method to remove and return first element in the queue: with 1 elements", function () {
          const input = "A";

          queue.enqueue(input);

          queue.dequeue();

          assert.equal(queue.head, null);
          assert.equal(queue.tail, null);
          assert.equal(queue.size(), 0);
        });
        it("should have an dequeue() method to remove and return first element in the queue: with 0 element", function () {
          const input = "A";
          queue.enqueue(input);
          assert.equal(queue.size(), 1);

          queue.dequeue();

          assert.equal(queue.head, null);
          assert.equal(queue.tail, null);
          assert.equal(queue.size(), 0);
        });
      });
      describe("Queue peek operations", function () {
        it("should have an peek() method to look at the first element in the queue: with 3 elements", function () {
          const input = "A";
          const input2 = "B";
          const input3 = "C";
          queue.enqueue(input);
          queue.enqueue(input2);
          queue.enqueue(input3);

          let result = queue.peek();

          assert.equal(result, input);
        });
        it("should have an peek() method to look at the first element in the queue: with 1 elements", function () {
          const input = "A";
          queue.enqueue(input);

          let result = queue.peek();

          assert.equal(result, input);
        });
        it("should have an peek() method to look at the first element in the queue: with 0 elements", function () {
          
          let result = queue.peek();

          assert.equal(result, null);
        });
      });
      describe("Queue get(index) operations", function () {
        it("should have an get(index) method to get the index number element in the queue: with 3 elements", function () {
          const input = "A";
          const input2 = "B";
          const input3 = "C";
          queue.enqueue(input);
          queue.enqueue(input2);
          queue.enqueue(input3);

          let result = queue.get(1);

          assert.equal(result.data, input2);
        });
        it("should have an get(index) method to get the index number element in the queue: with 1 elements", function () {
          const input = "A";
          queue.enqueue(input);

          let result = queue.get(0);

          assert.equal(result.data, input);
        });
        it("should have an get(index) method to get the index number element in the queue: with 0 elements", function () {
          
          let result = queue.get(0);

          assert.equal(result, null);
        });
      });
    });
  });
});
