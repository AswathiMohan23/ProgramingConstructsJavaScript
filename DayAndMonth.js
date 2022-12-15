
//Write a program that takes day and month from the command line and prints true if
//day of month is between March 20 and June 20, false otherwise.
// enter the input along with file name in the terminal eg :  node filename.js 2 5

const inputFromConsole = process.argv; // Create a constant ‘argvs’ and set it to process.argv properties: 
                                    //This will contain the arguments that the user passes in the command line.


//Since the first two arguments passed in the command line are irrelevant to the program because
// the first one is ‘node’ itself since we use it to run the application and second is the name of the file 
//which we want it to execute in our case its ‘app.js’, so we have to remove it by using slice method.

const argv = inputFromConsole.slice(2);
const day=  parseInt(argv[0]);
const monthInNumber =  parseInt(argv[1]);
 
if( ((day>=20)&&(day<=31)&&(monthInNumber==3)) ||((day>=1)&&(day<=20)&&(monthInNumber==6))||
    ((day>=1)&&(day<=31)&&(monthInNumber==5))||((day>=1)&&(day<=30)&&(monthInNumber==4))){
        console.log("True");
}else{
    console.log("False");
}       
