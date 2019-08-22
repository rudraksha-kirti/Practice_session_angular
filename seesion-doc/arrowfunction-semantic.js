//

function outer() {
    const that = this;
    console.log(`Outer Function this Call ${this}`); // o/p Greet string 

    function inner() {
        console.log(`Inner Function this Call ${this}`); //  { Object Global}
        console.log(`Inner Function this Call ${that}`); 

    }
    inner();
    const innerGreet = () =>{
        console.log(`Inner Function this Call ${that}`);         
    }
    innerGreet();
}
outer.call("Greet");
