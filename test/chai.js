const chai = require('chai')
//expect
const expect = chai.expect;
//should
const should = chai.should();
//assert
const assert = chai.assert; //no chaining possible

//expect API examples
let a=1, b=1;
//expect
expect(a).to.be.equals(b,
"a and be are not equal");
//should
a.should.be.equals(b);
//assert
assert.equal(a, b, 'a and be not equal!');

//object/string/boolean
function myObj(){
return {
  a: 100,
  b: 'Hello'
  }
}

x = new myObj(), y = new myObj();
expect(x).to.be.an('object');
//not compares object contents, so deep.equals required
//expect(x).to.be.equals(y, 'not equal');
//x.a = 200;
//deep.equal or deep.equals
expect(x).to.be.deep.equals(y, 'not equal');
x.should.be.deep.equals(y, 'not equal');
assert.deepEqual(x, y, "not equal!");

//chaining expressions
//x is an object; x and y are equal
//keywords - and, with, but, ...
expect(x).to.be.an('object').and.to.be.deep.equals(y);
(x).should.be.an('object').and.to.be.deep.equals(y);

//arrays
let numbers = [1,2,3,0];
//expect
expect(numbers).to.be.an('array').that.includes(3, 'its not there!');
//should()
(numbers).should.be.an('array').that.includes(3, "it's not there!");
//assert
assert.isArray(numbers, 'numbers is not an array!')

//should.extras
//shoiuld -> Object.Prototype - a.should
// existant of an object
function writeToFile(error){
  //should extras

  //normal scenario writeToFile(1)
  //error.should.not.exist();

  //Given that error is undefined writeToFile(undefined)
  should.not.exist();
}

writeToFile(undefined);