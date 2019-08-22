//Syntax 1
const Sum = (x:number,y:number) : number => x+y;
const Result = Sum(12, 13);
console.log(Result);

// syntax 2 
const Sum2 :   (a:number,b:number) => number = (a,b) => a + b;
const Result2 = Sum2(290, 98766);
console.log(Result2)

