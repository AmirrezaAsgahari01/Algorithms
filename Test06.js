let readlineSync = require('readline-sync');
let number = readlineSync.question('Enter a number: ');
const sumOfDigits = (number) => {
    let sum = 0 ;
    for (let digit of number ){
        sum += parsInt(digit)
    }
    return sum ;
}
if (number % sumOfDigits(number)==0){
    console.log('a number is divisible by the sum of its digits');
}else{
    console.log('a number isb divisible by the sum of its digits');
}