//Write a program that takes a command-line argument n and prints a
//table of the powers of 2 that are less than or equal to 2^n till 256 is reached..

const input=process.argv;
const argv=input.slice(2);
const number=parseInt(argv[0]);
findPowerOfTwo(number)

function findPowerOfTwo(number) {
    
    if((number>=0)&&(number<31)){
        console.log("2^n = "+Math.pow(2,number)+ "\nTable of power of 2 which is " +
                "less than or equal to "+ Math.pow(2,number)+" : ");
        for(let i=1;i<=Math.pow(2,number);i++){
            let limit=Math.pow(2,i);
            if(limit>256)
                 break;
            else
                console.log("2^"+i+" : " +Math.pow(2,i));
        }
    }
}