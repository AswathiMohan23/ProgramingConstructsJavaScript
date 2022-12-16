const input=process.argv;
const argv=input.slice(2);
const number=parseInt(argv[0]);
let factorial=1;

for(let i=1;i<=number;i++){
    factorial=factorial*i;
}
console.log( number+" ! = "+factorial);