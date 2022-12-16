//Write a program that takes User Inputs and does Unit Conversion of different Length units
//1. Feet to Inch            3. Inch to Feet
//2. Feet to Meter           4. Meter to Feet

const input=process.argv;
const argv=input.slice(2);
const valueInFeet=parseInt(argv[0]);
const valueInInch=parseInt(argv[1]);
const valueInMeter=parseInt(argv[2]);

const feetToInch=valueInFeet/12;
const feetToMeter=valueInFeet/3.281;
const inchToFeet=valueInFeet/12;
const meterToFeet=valueInFeet*3.281;

console.log(valueInFeet +" feet = "+feetToInch+" inches" );
console.log(valueInFeet +" feet = "+feetToMeter+" meter" );
console.log(valueInInch +" inches = "+inchToFeet+" feet" );
console.log(valueInMeter +" meter = "+meterToFeet+" feet" );

