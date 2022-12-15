//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...

const input=process.argv;
const argv=input.slice(2);
const number=parseInt(argv[0]);

switch(number){
    case 1 : console.log("One");
             break;
    case 10 : console.log("ten");
             break; 
    case 100 : console.log("hundred");
             break; 
    case 1000 : console.log("thousand");
             break;  
    default : console.log("invalid entry try again by giving 1,10,100 or 1000");
             break;
             


}