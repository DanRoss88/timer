/*
No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.

node timer1.js 10 3 5 15 9 
This will make it beep at:

3 seconds
5 seconds
9 seconds
10 seconds
15 seconds
*/

const timer = function(input) {
  input = Number(input);
  if (input < 0 || isNaN(input) || input.length === 0) {
    return;
  }
  setTimeout(() => {
    process.stdout.write('\x07');
  }, input * 1000
  );
};
const numbers = process.argv.slice(2);
for (let num of numbers) {
  timer(num);
};
