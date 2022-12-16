const inputFromConsole = process.argv;
const argv = inputFromConsole.slice(2);
const number=  parseInt(argv[0]);

console.log("prime numbers in the given range : ")
for (let i = 2; i <= number; i++) {
 
    // neglect 0 and 1 as they are neither prime nor composite
    if (i == 1 || i == 0)
        continue;
    flag = 1;

    for (let j = 2; j <= i / 2; ++j) {
        if (i % j == 0) {
            flag = 0;
            break;
        }
    }

    // flag = 1 means i is prime
    // and flag = 0 means i is not prime
    if (flag == 1)
        console.log(i);
}