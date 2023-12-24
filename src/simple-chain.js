const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

/*
class Item {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
*/

const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },

  addLink(value = '') {
    if (value !== undefined) {this.array.push(`( ${value} )`)};
    return this;
  },

  removeLink(position) {
    if (position > this.array.length || position < 1 || position !== parseInt(position)) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.array.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.array.reverse();
    return this
  },

  finishChain() {
    const str = this.array.join('~~');
    this.array = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
