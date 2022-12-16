let tempInC=78,tempInF=110;
FarenheitToC(tempInF);
degreeToF(tempInC);

function degreeToF(valueInC){
    let degF = (valueInC * 9/5) + 32
    console.log(valueInC+" degree celcius     = "+degF+" farenheit")
}
function FarenheitToC(valueInF){
    let degC= (valueInF - 32) * 5/9
    console.log(valueInF+" degree farenheit  = "+degC+" celcius")
}