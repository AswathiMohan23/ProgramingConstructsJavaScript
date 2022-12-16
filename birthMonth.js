let birthMap=new Map;
let similarMap=new Map;
let jan=0,feb=0,march=0,april=0,may=0,june=0,july=0,aug=0,sep=0,oct=0,nov=0,dec=0;

for(let i=1;i<=50;i++){
    let month=Math.floor(Math.random() * 12) + 1;
    if(month==1)  jan++
    else if(month==2) feb++ 
    else if(month==3) march++ 
    else if(month==4) april++ 
    else if(month==5) may++ 
    else if(month==6) june++ 
    else if(month==7) july++ 
    else if(month==8) aug++ 
    else if(month==9) sep++ 
    else if(month==10) oct++ 
    else if(month==11) nov++ 
    else  dec++ 


    //console.log(month)
    birthMap.set(i,month)
    
}
console.log(birthMap)

console.log("\nNo of individuals having common birth month   :\n ")
console.log("jan = "+jan+" , feb = "+feb+" , march = "+march+" , april = "+april+" , may = "+may+" , june = "+june+" , july = "+
            july+" , aug = "+aug+" , sep = "+sep+" , oct = "+oct+" , nov = "+nov+" , dec = "+dec+"\n")


