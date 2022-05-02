const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.arr.push("( )");
    } else {
      this.arr.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "number" &&
      position > 0 &&
      position <= this.arr.length &&
      Number.isInteger(position)
    ) {
      this.arr.splice(position - 1, 1);
      return this;
    } else {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let chain = this.arr.join("~~");
    this.arr = [];
    return chain;
  },
};

module.exports = {
  chainMaker,
};
