let counter = 1;;
class Product{
constructor (Id , Name){
    // this.id = 4021;
    // this.name = "VIVO"
    this.id = Id;
    this.name = Name
}
setAge(newAge){
    this.age = counter;
    counter++
    console.log(this)
}
}
class ProductDetails extends Product{
 constructor(name ,age,role , dept){
     super(name,age)
     this.role = role,
     this.dept = dept

 }
 promote(){
     this.role = `Senior ${this.role}`
 }
 celebAnni(){
     super.celebAnni();
     console.log(`Happy Anni ${this.name}`)
 }
}
const ProductData = new Product(2345 , "Dawn"); // { Empty object}


ProductData.setAge(40);
ProductData.desgination = "UI dev";
console.log(ProductData);


const Productd = new ProductDetails(202 , "ArshaKCl Khan"); // { Empty object}
