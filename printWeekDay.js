// read a number and print the corresponding day of the week in words

const input=process.argv;
const argv=input.slice(2);
const day=parseInt(argv[0]);

switch(day){
    case 1 : console.log("mon");
             break;
    case 2 : console.log("tues");
             break; 
    case 3 : console.log("wed");
             break; 
    case 4 : console.log("thurs");
             break;  
    case 5 : console.log("fri");
             break;         
    case 6 : console.log("sst");
             break; 
    case 7 : console.log("sun");
             break;   
    default : console.log("invalid entry try again by giving nos from 1 to 7");
             break;
}