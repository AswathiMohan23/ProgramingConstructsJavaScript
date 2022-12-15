{
   // 1ft = 12 in then 42 in = ? ft
   let value=42/12;
   console.log("42 inch = "+value);

}
//Rectangular Plot of 60 feet x 40 feet in meters
{
    let value1=60/ 3.281;
    let value2=40/ 3.281;
    console.log("60 feet X 40 feet means "+value1+" meter X  "+value2+" meter");

//Calculate area of 25 such plots in acres

    let meterToAcre1=value1/4047;
    let meterToAcre2=value2/4047;
    let area=meterToAcre1*meterToAcre2;
    console.log("area in acres = "+area+" acres");
    console.log("area of 25 such plots = "+area*25+" acres");
   
    
}
