import assert from "assert";
import DynamicArray from "./dynamicarray.js";

describe("DynamicArray", function () {
  describe("Array operations", function () {
    it("should have an addFirst( item ) method to add an element first in the array", function () {
      const dynamicArray = new DynamicArray();
      const input = "B";
      const input2 = "A";
      dynamicArray.add(input);
      dynamicArray.addFirst(input2);
      assert.equal(dynamicArray.get(0), input2);
    });
    it("Should return first element in array", function () {
      const dynamicArray = new DynamicArray();
      const input = "A";
      const input2 = "B";

      dynamicArray.add(input);
      dynamicArray.add(input2);

      const output = dynamicArray.getFirst();
      assert.equal(output, input);
    });
    it("Should return last element in array", function () {
      const dynamicArray = new DynamicArray();
      const input = "A";
      const input2 = "B";

      dynamicArray.add(input);
      dynamicArray.add(input2);
      const output = dynamicArray.getLast();

      assert.equal(output, input2);
    });
    it("Should remove first element in array", function () {
      const dynamicArray = new DynamicArray();
      const input = "A";
      const input2 = "B";
      const input3 = "C";
      dynamicArray.add(input);
      dynamicArray.add(input2);
      dynamicArray.add(input3);

      dynamicArray.removeFirst();

      assert.equal(dynamicArray.get(0), input2);
      assert.equal(dynamicArray.get(1), input3);
    });
    it("Should remove last element in array", function () {
      const dynamicArray = new DynamicArray();
      const input = "A";
      const input2 = "B";
      const input3 = "C";
      dynamicArray.add(input);
      dynamicArray.add(input2);
      dynamicArray.add(input3);

      dynamicArray.removeLast();

      assert.equal(dynamicArray.get(0), input);
      assert.equal(dynamicArray.get(1), input2);
    });
    it("Should say if array is empty", function () {
      const dynamicArray = new DynamicArray();

      assert.equal(dynamicArray.isEmpty(), true);
    });
  });
});
