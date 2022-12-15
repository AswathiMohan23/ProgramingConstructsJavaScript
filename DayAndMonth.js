
//Write a program that takes day and month from the command line and prints true if
//day of month is between March 20 and June 20, false otherwise.
// enter the input along with file name in the terminal eg :  node filename.js 2 5

const inputFromConsole = process.argv;
const argv = inputFromConsole.slice(2);
const day=  parseInt(argv[0]);
const monthInNumber =  parseInt(argv[1]);
 
if( ((day>=20)&&(day<=31)&&(monthInNumber==3)) ||((day>=1)&&(day<=20)&&(monthInNumber==6))||
    ((day>=1)&&(day<=31)&&(monthInNumber==5))||((day>=1)&&(day<=30)&&(monthInNumber==4))){
        console.log("True");
}else{
    console.log("False");
}       
