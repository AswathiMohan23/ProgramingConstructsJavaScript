const inputFromConsole = process.argv;
const argv = inputFromConsole.slice(2);
const year=  parseInt(argv[0]);

if (year >= 1582) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))
        console.log(year+" is a Leap year");
    else
        console.log(year +" is not a Leap year ");
}
else
        console.log("Try again by entering a year which comes after 1582");
