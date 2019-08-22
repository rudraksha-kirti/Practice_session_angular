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
const ProductData = new Product(2345 , "Dawn"); // { Empty object}


ProductData.setAge(40);
ProductData.desgination = "UI dev";
console.log(ProductData);

