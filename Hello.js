// // function sum(arr) {
// //   var sum = 0;
// //   for (var i = 0; i < arr.length; i++) {
// //     sum = sum + arr[i];
// //   }
// //   return divide(sum);
// // }

// // function divide(num) {
// //   return num / 2;
// // }

// // var arr = [1, 2, 3, 4, 5];
// // var arr2 = [4, 5, 6, 7, 8];

// // var res = sum(arr);

// // console.log(res);

// // (function () {
// //   console.log('I get called');
// //   console.log(2 + 3);
// // })();

// // Recursive functions

// function num(n) {
//   if (n > 10) {
//     return;
//   }

//   num(n + 1);
//   console.log(n);
// }

// num(1);

// Global / Local
var n = 5;
function sum() {
  n = 10;
  console.log(n);
}
sum();
console.log(n);
