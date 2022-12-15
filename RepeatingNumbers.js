const randomArray=new Array;
const repeatingArray=new Array;
const outputArray=new Array;

for(let i=0;i<=20;i++){
    randomArray[i]=Math.floor(Math.random() * 100);
    console.log(randomArray[i]);
}

console.log("sort")
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
for(let i =0;i<randomArray.length;i++){
    console.log(randomArray[i]);
}
console.log("repeatingArray : ");
let p=0;
for(let j=0;j<randomArray.length;j++){
    for(let k=j+1;k<randomArray.length;k++){
        if(randomArray[j]==randomArray[k]){
            repeatingArray[p]=randomArray[k];
            p++;
        }
        
    }
}
for(let i =0;i<repeatingArray.length;i++){
    console.log(repeatingArray[i]);
}
