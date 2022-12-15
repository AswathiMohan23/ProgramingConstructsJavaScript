const randomArray=new Array;
console.log("The random numbers are : ");

for(let i=0;i<5;i++){
    randomArray[i]=Math.floor(Math.random() * 999) + 100;
    console.log(randomArray[i]);
}
for(let i=0;i<randomArray.length;i++){
        if(randomArray[i]<randomArray[i+1]){
            let temp = randomArray[i];
            randomArray[i] = randomArray[i + 1];
            randomArray[i + 1] = temp;
            i=i-1;
            //updating the value of j = -1 ,so after getting updated for j++  
            //in the loop it becomes 0 and the loop begins from the start.
        }
    }
console.log("sorted list : ");

for(let k=0;k<randomArray.length;k++){
    console.log(randomArray[k]);
}
console.log("The max value = "+randomArray[0] +"\n"+"The Min value = "+randomArray[randomArray.length-1]);
