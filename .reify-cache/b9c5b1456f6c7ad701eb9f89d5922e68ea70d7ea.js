"use strict";var expect;module.link('chai',{expect(v){expect=v}},0);var sum;module.link('../src/index',{sum(v){sum=v}},1);


describe('sum', () => {
  it('should return the sum of 2 numbers', () => {
    const a = 5;
    const b = 11;

    const result = sum(a, b);

    expect(result).to.be.equal(a + b);
  })
})
