// read a number and print the corresponding day of the week in words

const input=process.argv;
const argv=input.slice(2);
const day=parseInt(argv[0]);


    if(day==1)
        console.log("mon");
    else if(day==2)
        console.log("tues");
    else if(day==3)
        console.log("wed");
    else if(day==4)
        console.log("thurs");
    else if(day==5)
        console.log("fri");
    else if(day==6)
        console.log("sst");
    else if(day==7)
        console.log("sun");
 
