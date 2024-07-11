// const { log } = require("console");

const { log } = require("console");

const p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("p1 suscess");
    // reject(new Error("p1 error"));
  }, 3000);
});
const p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve("p2 suscess");
    reject(new Error("p2 error"));
  }, 1000);
});

const p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("p3 suscess");
    // reject(new Error("p3 error"));
  }, 2000);
});

// Promise.all([p1, p2, p3]); // error first show
// Promise.allSettled([p1, p2, p3]); // show all result with error show
// Promise.race([p1, p2, p3]); // get value of the first resolved promise if fist promise is rejected show error
// Promise.any([p1, p2, p3]); // wait for the first resolved promise if all promises are rejected show aggregate error [AggregateError[errorp1,errorp2,errorp3]]
// Promise.resolve(value); // return a resolved promise with value
// Promise.reject(error); // return a rejected promise with error

Promise.all([p1, p2, p3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error));

// Promise.allSettled([p1, p2, p3])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// Promise.race([p1, p2, p3])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// Promise.any([p1, p2, p3])
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// console.log(true && true);
