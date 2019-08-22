const x=1;
//x= 2; // Error reassign 
console.log(x);
const obj = { // Object can still be changed
name :"Kirti",
age : 30
}
obj.age++;
console.log(obj)

// New reassign value
// Although object value can be chamnges but no reassign of obj
 obj.name = "Arshal" // - It is correct
console.log(obj.name)
 