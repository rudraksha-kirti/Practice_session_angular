interface Person{
    name : string;
    age : number;
    celebBirthday : () => void 
    // Function is not returning anything . we use word VOID 
}
//Lets construct as an object that adhere to above interface " Person" 
const Dawn : Person ={
name : "Dawn", age :30 ,
 celebBirthday:  function(){
     console.log("Happy Birthday");
 }
}