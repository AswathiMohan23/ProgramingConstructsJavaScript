const bet =1;
const goal=200;
let amount=100; // at start
let won=0;
let loose=0;

//while((amount<goal) || (amount>0)){
//for(let i=0;i<200;i++){
    while((amount!=0)&& (amount<200)){
        let random=Math.floor(Math.random() * 2)+1;
        switch (random){
            case 1 : won++;
                     amount=amount+1;
                     break;
            case 2 : loose++;
                     amount=amount-1;
                     break;
        }
    }

console.log("won = "+won+" times")
console.log("lost = "+loose+" times")
console.log(amount)


