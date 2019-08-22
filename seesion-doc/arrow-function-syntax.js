//Syntax 1 = Function declaration syntax
function Sum(x,y){
    return x+y;
}
console.log( Sum(12,13));

//Syntax 2 : Function expression function 
const Multiply = function(a,b){
    return a*b;
};
console.log(Multiply(12,13))

//Synatx 3 : Arrow Function ( => is fat arrow function )

const sum3 = (a,b) => {
    return a*b;
};
console.log(sum3(12,13))
//Simplied Syntax for functions that have a single line stantment whoch returns a value
const sum4 = (x,y) => x - y ;
console.log(sum4(12,13));

//If there is single 
const Square = x => x*x ;
console.log(Square(12,12));
