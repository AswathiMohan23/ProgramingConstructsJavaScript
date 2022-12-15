console.log("The random numbers are : ");
const randomArray=new Array;
for(let i=0;i<10;i++){
    randomArray[i]=Math.floor(Math.random() * 999) + 100;
    console.log(randomArray[i]);
}
for(let i=0;i<randomArray.length;i++){
        if(randomArray[i]<randomArray[i+1]){
            let temp = randomArray[i];
            randomArray[i] = randomArray[i + 1];
            randomArray[i + 1] = temp;
            i=-1;
            //updating the value of i = -1 ,so after getting updated for j++  
            //in the loop it becomes 0 and the loop begins from the start.
        }
    }

for(let k=0;k<randomArray.length;k++){

}
console.log("The Secondmax value = "+randomArray[1] +"\n"+"The Second Min value = "+randomArray[randomArray.length-3]);


   


