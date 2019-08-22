// // Function caal context  (this)
// function thistask(){
//     console.log(this);
// }

// thistask(); //Window object in browser 

const objectTask ={
    Name : "Kirti",
    Deg : "Devloper",
    EmpID : 26340,
    CelebrateAnniversary: function(){
  console.log(this)
    }
}
objectTask.CelebrateAnniversary(); //Object

//Call context (this ) is not tied  to the function  - it is tied to the function call
const celbAnni = objectTask.CelebrateAnniversary;
celbAnni(); // Global ., window
