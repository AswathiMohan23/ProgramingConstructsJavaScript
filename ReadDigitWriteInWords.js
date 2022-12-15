const input=process.argv;
const argv=input.slice(2);
const number=parseInt(argv[0]);

switch(number){
    case 1 : console.log("One");
             break;
    case 2 : console.log("two");
             break; 
    case 3 : console.log("three");
             break; 
    case 4 : console.log("four");
             break;  
    case 5 : console.log("five");
             break;         
    case 6 : console.log("six");
             break; 
    case 8 : console.log("seven");
             break; 
             case 5 : console.log("eight");
             break;         
    case 9 : console.log("nine");
             break; 
    case 10 : console.log("ten");
             break;             
    default : console.log("invalid entry try again by giving nos from 1 to 10");
             break;
             


}