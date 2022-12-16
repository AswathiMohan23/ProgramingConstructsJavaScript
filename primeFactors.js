const inputFromConsole = process.argv;
const argv = inputFromConsole.slice(2);
let number=  parseInt(argv[0]);

console.log("Prime factors are : ");
for(let i = 2; i< number; i++) {
    while(number%i == 0) {
       console.log(i+" ");
       number = number/i;
    }
 }
 if(number >2) {
    console.log(number);
 }

 //eg : 10 =2,5;
 // eg : 6 =2,3;
