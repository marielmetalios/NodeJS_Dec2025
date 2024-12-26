// FizzBuzz practice
// check for the remainder of divisions
// make an empty array so answers can be added
// use push method to add them, and make sure i is a string (use toString method)

const fizzBuzz = function(n) {
    let answer = [];
    for (let i = 1; i <= n; i++)
          if (i % 3 === 0 && i % 5 === 0) {
            answer.push('FizzBuzz'); 
          } else if (i % 3 === 0) {
            answer.push('Fizz');
          } else if (i % 5 === 0) {
            answer.push('Buzz');
          } else {
            answer.push(i.toString());
          }
          return answer;
        };