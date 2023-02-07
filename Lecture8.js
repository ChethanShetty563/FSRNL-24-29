// function makeRecharge(value, recharge) {
//   recharge(value);
//   // show success message
//   //or
//   // Error message
// }

// function recharge() {
//   check(balance);
//   // proceeed
// }

// function abc(value) {
//   return new Promise((resolve, reject) => {
//     if (value > 10) {
//       resolve('Hurray its greater');
//     } else {
//       reject('IT failed or less than 10');
//     }
//   });
// }

// await abc(5)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// function abc() {
//   return 'Start of netflix';
// }

// function xyz() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Second method');
//     }, 3000);
//   });
// }

// function pqr() {
//   return 'End of Netflix';
// }

// var callAll = async () => {
//   console.log(abc());
//   console.log(await xyz());
//   console.log(pqr());
// };

// callAll();

function abc() {

   setTimeout(() => {
        console.log(Inside cb)
    },5000)
  console.log('Star t');
}
abc();
console.log('End');
