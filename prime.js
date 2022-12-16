const inputFromConsole = process.argv;
const argv = inputFromConsole.slice(2);
const number=  parseInt(argv[0]);
let flag =0;
for (let i = 2; i < number; i++) {
    if (number % i == 0) {
        flag=1;
        break
    }
 } if(flag==1)
        console.log(" not a prime number");
    else
        console.log(" prime number");
