import assert from "assert";
import Stack from "./stack.js";

describe("Stack", function () {
  const data1 = "A";
  const data2 = "B";
  const data3 = "C";

  let stack = new Stack();

  this.beforeEach(function () {
    stack = new Stack();
  });

  describe("Basic details", function () {
    it("should have a head that points to null", function () {
      assert.equal(stack.head, null);
    });
    it("should have a size() method that returns 0 when the list is empty", function () {
      assert.equal(stack.size(), 0);
    });
    it("should have a clear() method that makes the stack empty", function () {
      const input = "A";
      const input2 = "B";
      const input3 = "C";
      stack.push(input);
      stack.push(input2);
      stack.push(input3);

      assert.equal(stack.size(), 3);
      stack.clear();
      assert.equal(stack.size(), 0);
    });
    describe("Stack", function () {
      describe("Stack push operation", function () {
        it("should have an push(data) method to add an element first in the stack: with 3 elements", function () {
          const input = "A";
          const input2 = "B";
          const input3 = "C";
          stack.push(input);
          stack.push(input2);
          stack.push(input3);
          assert.equal(stack.head.data, input3);
          assert.equal(stack.size(), 3);
        });
        it("should have an stack(data) method to add an element first in the stack: with 0 element", function () {
          assert.equal(stack.head, null);
          assert.equal(stack.size(), 0);
          const input = "A";
          stack.push(input);
          assert.equal(stack.head.data, input);
          assert.equal(stack.size(), 1);
        });
      });
      describe("Stack pop operation", function () {
        it("should have an pop() method to remove and return first element in the stack: with 3 elements", function () {
          const input = "A";
          const input2 = "B";
          const input3 = "C";
          stack.push(input);
          stack.push(input2);
          stack.push(input3);

          assert.equal(stack.head.data, input3);
          stack.pop();
          assert.equal(stack.head.data, input2);
        });
        it("should have an pop() method to remove and return first element in the stack: with 1 elements", function () {
          const input = "A";

          stack.push(input);

          stack.pop();

          assert.equal(stack.head, null);
          assert.equal(stack.size(), 0);
        });
        it("should have an pop() method to remove and return first element in the stack: with 0 element", function () {
          stack.pop();

          assert.equal(stack.head, null);
          assert.equal(stack.size(), 0);
        });
      });
          describe("Stack peek operation", function () {
            it("should have an peek() method to look at the first element in the stack: with 3 elements", function () {
              const input = "A";
              const input2 = "B";
              const input3 = "C";
              stack.push(input);
              stack.push(input2);
              stack.push(input3);

              let result = stack.peek();

              assert.equal(result, input3);
            });
            it("should have an peek() method to look at the first element in the stack: with 1 elements", function () {
              const input = "A";
              stack.push(input);

              let result = stack.peek();

              assert.equal(result, input);
            });
            it("should have an peek() method to look at the first element in the stack: with 0 elements", function () {

              let result = stack.peek();

              assert.equal(result, null);
            });
          });
          describe("stack get(index) operations", function () {
            it("should have an get(index) method to get the index number element in the stack: with 3 elements", function () {
              const input = "A";
              const input2 = "B";
              const input3 = "C";
              stack.push(input);
              stack.push(input2);
              stack.push(input3);

              let result = stack.get(1);

              assert.equal(result, input2);
            });
            it("should have an get(index) method to get the index number element in the stack: with 1 elements", function () {
              const input = "A";
              stack.push(input);

              let result = stack.get(0);

              assert.equal(result, input);
            });
            it("should have an get(index) method to get the index number element in the stack: with 0 elements", function () {

              let result = stack.get(0);

              assert.equal(result, null);
            });
          });
    });
  });
});
