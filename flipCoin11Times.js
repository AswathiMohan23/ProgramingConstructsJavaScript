let head=0,tail=0;
while((head<11)&&(tail<11)){
    let random=Math.floor(Math.random() * 2)+1;
    if(random==1){
        console.log("Head")
        head++;
    }
    else if(random==2){
        console.log("Tail")
        tail++;
    }
}
console.log("\nHead = "+head)
console.log("Tail = "+tail)



    
   