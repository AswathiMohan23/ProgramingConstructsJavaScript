let sum=0;
console.log("the nos are :  ");
for(let i=0;i<5;i++){
    let randomNo=Math.floor(Math.random() * 99) + 10;
    console.log(randomNo);
    sum=sum+randomNo;    
}
let avg=sum/5;
console.log("Sum of the Random numbers = "+sum);
console.log("Average value of the Random numbers = "+avg);