//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 and 5 => FizzBuzz
//Not divisible by 3 or 5 => input
//Not a number => 'Not a number'

const output=fizzBuzz(false);
console.log(output);

function fizzBuzz(input){
    if(typeof input !=='number')
        return 'NaN';
    if((input%3==0)&&(input%5===0))
        return 'fizzbuzz';
    if(input %3 ===0)
        return 'fizz';
    if(input%5 ===0)
        return 'Buzz';
    else
        return input;

}