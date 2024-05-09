function calculateSquare(number, cb) {
  setTimeout(function () {
    if (typeof number !== "number") {
      cb(new Error("Argument type number is expected"));
      return;
    }
    const result = number * number;
    cb(null, result);
  }, 1000);
}

// calculateSquare(1, function (error, result) {
//   console.log(result);
// });
// calculateSquare(2, function (error, result) {
//   console.log(result);
// });
// calculateSquare(3, function (error, result) {
//   console.log(result);
// });

// calculateSquare(1, function (error, result) {
//   console.log(result);
//   calculateSquare(2, function (error, result) {
//     console.log(result);
//     calculateSquare(3, function (error, result) {
//       console.log(result);
//       calculateSquare(4, function (error, result) {
//         console.log(result);
//         calculateSquare(5, function (error, result) {
//           console.log(result);
//         });
//       });
//     });
//   });
// });
