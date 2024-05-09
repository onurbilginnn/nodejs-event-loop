const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("read file 1");
});
setTimeout(() => console.log("Set timeout 1"), 0);

/* 
  There are 2 results:
  1st result:
    Set timeout 1
    read file 1
  2nd result:
    read file 1
    Set timeout 1

  This inconsistency in output occurs due to the unpredictability of
   the order of execution when using setTimeout() with a delay of 0
    milliseconds and an I/O asynchronous method. The obvious question that arises is,
     "Why can't the order of execution be guaranteed?"
  The anomaly is due to how a minimum delay is set for timers.
   In the C++ code for the DOMTimer, we come across a very interesting piece of code.
    The interval in milliseconds is calculated, but the calculation is capped at
     a maximum of 1 millisecond or the user-passed interval multiplied by 1 millisecond.
  This means that if we pass in 0 milliseconds, the interval is set to max(1,0),
   which is 1. This will result in setTimeout with a 1 millisecond delay.
    It seems that Node.js follows a similar implementation. When you set a 0 millisecond delay,
    it is overwritten to a 1 millisecond delay.
*/
