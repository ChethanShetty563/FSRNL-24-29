// function addTwoNumbers(...x) {
//   console.log(x);
// }

// var arr = [5, 9];
// var arr2 = [4, 8];

// addTwoNumbers(...arr);
// let y = 'Local Variable';
// function test() {
//   console.log(y);
// }

// test();

// function abc() {
//   if (true) {
//     const x = 'local';

//     console.log(x);
//   }
//   const x = 'abc';
//   console.log(x);
// }
// abc();

// var newFunction = function () {
//   console.log('Inside the anonymous function');
// };

// newFunction();

// Callback

// function doSumStuff(x, y, callback) {
//   var a = x + y;
//   console.log('The sum is ' + a);
//   callback(abc);
// }

// function completed() {
//   console.log('Every Opeartion is done');
// }

// doSumStuff(4, 5, completed);
// setTimeout(() => console.log('After Timeout'), 100);
// console.log('Before time');
// for (let i = 0; i < 50; i++) {
//   console.log(i);
// }

// var a = 10; // 1
// console.log(a); // 2

// var sum = () => 1 + 2; // 3

var arr = ['sdds', 'SDfsd', 'Sdvs', 4];

var results = arr.reduce((x, y) => {
  return x + y;
});

console.log(results);
