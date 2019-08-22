interface IPerson{
    name:string;age:number;celeHBD:()=> void
}
class Person implements IPerson {
private id:number;
    constructor(public name :string,public age:number){
 
    }

setAge(newAge){
    this.age = newAge;
}
celeHBD(){
    this.age++;
}
}
