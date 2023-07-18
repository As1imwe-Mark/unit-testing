const length = require('./functions/string.js')
const reverse=require('./functions/reverse.js')
const calculator=require('./functions/calculator.js');
const capital=require('./functions/capitalize.js')

test('returns string length',()=>{
 expect(length('hi')).not.toBe(0);
 expect(length('hi')).not.toBeNull();
 expect(length('hi')).toBeGreaterThan(0);
 expect(length('h')).toBeLessThan(10);
 expect(length('hi')).toBe(2);
});

test('to see if string is reversed',()=>{
  expect(reverse('hi')).not.toBe('hi')
})

describe('calculator',()=>{
  test('add',()=>{
    expect(calculator.add(2,3)).toBe(5);
    expect(calculator.add(2,3)).not.toBeNull;
    expect(calculator.add(2,3)).toEqual(5);
  });
  test('multiply',()=>{
    expect(calculator.multiply(2,3)).toBe(6);
    expect(calculator.multiply(0,3)).toBeNull;
    expect(calculator.multiply(0,0)).toBeFalsy;
  });
  test('divide',()=>{
  expect(calculator.divide(0,1)).toBeNull;
  expect(calculator.divide(1,1)).toBeTruthy;
  expect(calculator.divide(0,1)).toBeLessThan(1);
});
test('subtract',()=>{
  expect(calculator.subtract(1,0)).toBeLessThan(0);
  expect(calculator.subtract(8,17)).toEqual(9);
  expect(calculator.subtract(1,1)).toBe(0);
})
})


test('capitalize',()=>{
  expect(capital('hi')).not.toBe('hi')
})