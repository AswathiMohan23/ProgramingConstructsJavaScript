let one=0,two=0,three=0,four=0,five=0,six=0,i=1;
let diceMap=new Map;
while((one<10)&&(two<10)&&(three<10)&&(four<10)&&(five<10)&&(six<10)){
    let random=Math.floor(Math.random() * 6) + 1;
    switch(random){
        case 1 : diceMap.set(i,1);
                    i++,one++;
                    break;
        case 2 : diceMap.set(i,2);
                    i++,two++;
                    break; 
        case 3 : diceMap.set(i,3);
                    i++,three++;
                    break;  
        case 4 : diceMap.set(i,4);
                    i++,four++;
                    break;
        case 5 : diceMap.set(i,5);
                    i++,five++;
                    break;  
        case 6 : diceMap.set(i,6);
                    i++,six++;
                    break;                                             
    }

}
console.log(diceMap);
console.log("one = "+one+" , two = "+two+" ,three = "+three+" , four = "+four+" , five = "+five+" , six = "+six);
if((one<two)&&(one<three)&&(one<four)&&(one<five)&&(one<six))
    console.log("one = "+one+" ===> min ");
else if((two<one)&&(two<three)&&(two<four)&&(two<five)&&(two<six))
    console.log("two = "+two+" ===> min ");
else if((three<one)&&(three<two)&&(three<four)&&(three<five)&&(three<six))
    console.log("three = "+three+" ===> min ");
else if((four<one)&&(four<three)&&(four<two)&&(four<five)&&(four<six))
    console.log("four = "+four+" ===> min ");
else if((five<one)&&(five<two)&&(five<four)&&(five<three)&&(five<six))
    console.log("five = "+five+" ===> min ");
else if((six<one)&&(six<two)&&(six<four)&&(six<three)&&(six<five))
    console.log("six = "+six+" ===> min ");

if((one>two)&&(one>three)&&(one>four)&&(one>five)&&(one>six))
    console.log("one = "+one+" ===> max ");
else if((two>one)&&(two>three)&&(two>four)&&(two>five)&&(two>six))
    console.log("two = "+two+" ===> max ");
else if((three>one)&&(three>two)&&(three>four)&&(three>five)&&(three>six))
    console.log("three = "+three+" ===> max ");
else if((four>one)&&(four>three)&&(four>two)&&(four>five)&&(four>six))
    console.log("four = "+four+" ===> max ");
else if((five>one)&&(five>three)&&(five>four)&&(five>two)&&(five>six))
    console.log("five = "+five+" ===> max ");
else if((six>one)&&(six>three)&&(six>four)&&(six>two)&&(six>five))
    console.log("six = "+six+" ===> max ");


