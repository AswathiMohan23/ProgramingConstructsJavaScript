//1. a + b * c 
//2. a % b + c 
//3. c + a / b
//4. a * b + c
const inputFromConsole = process.argv;
const argv = inputFromConsole.slice(2);
const a=  parseInt(argv[0]);
const b=  parseInt(argv[1]);
const c=  parseInt(argv[2]);

const operation1=a+b*c;
const operation2=a%b+c;
const operation3=a*b+c;
 
console.log("a+b*c = "+operation1)
console.log("a%b+c = "+operation2)
console.log("a*b+c = "+operation3)

if((operation1<operation2)&&(operation1<operation3))
    console.log("minimum is a+b*c = "+operation1)
else if((operation2<operation3)&&(operation2<operation1))
    console.log("minimum is a%b+c = "+operation2)
else if((operation3<operation2)&&(operation3<operation1))
    console.log("minimum is a%a*b+c = "+operation3)

if((operation3>operation2)&&(operation3>operation1))
    console.log("maximum is a%a*b+c = "+operation3)
else if((operation1>operation2)&&(operation1>operation3))
    console.log("maximum is a+b*c = "+operation1)
else if((operation2>operation3)&&(operation2>operation1))
    console.log("maximum is a%b+c = "+operation2)
      


