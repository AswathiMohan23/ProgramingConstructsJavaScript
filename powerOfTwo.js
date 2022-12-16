// enter the power in the console while running the code eg: node powerOfTwo.js 4
const input=process.argv;
const argv=input.slice(2);
const number=parseInt(argv[0]);
findPowerOfTwo(number)

function findPowerOfTwo(number) {
    if((number>=0)&&(number<31)){
        console.log("2^n = "+Math.pow(2,number)+ "\nTable of power of 2 which is " +
                "less than or equal to "+ Math.pow(2,number)+" : ");
        for(let i=0;i<=Math.pow(2,number);i++){
            console.log("2^"+i+" : " +Math.pow(2,i));
        }
    }
}