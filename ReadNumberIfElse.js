//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const input=process.argv;
const argv=input.slice(2);
const number=parseInt(argv[0]);

if(number==1)
    console.log("One");
else if(number == 10)
    console.log("ten");
else if(number == 100)
    console.log("hundred");
else if(number == 1000)
    console.log("thousand");
