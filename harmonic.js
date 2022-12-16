//Write a program that takes a command-line argument n and prints the nth harmonic number. Harmonic Number is of the form
// 1/1 + 1/2 + 1/3 + ... + 1/N

const input=process.argv;
const argv=input.slice(2);
const number=parseInt(argv[0]);
let sum=0;
for (let i = 2; i <= number; i++) {
    let harmonic =  1 / i;
    sum = sum + harmonic;
    console.log(sum);
}
console.log("\nnth Harmonic number = " + sum+"\n");