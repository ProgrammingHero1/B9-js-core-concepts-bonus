// let factorial = 1;
// for(let i = 5; i>=1; i--){
//     factorial = factorial * i;
// }
// console.log(factorial);

function factorial(i){
    if(i == 1){
        return 1;
    }
    return i * factorial(i-1);
}

const result = factorial(5);
/* 
    5 * factorial(4)
    5 * 4 * factorial(3)
    5 * 4 * 3 * factorial(2)
    5 * 4 * 3 * 2 * factorial(1)
    5 * 4 * 3 * 2 * 1
*/