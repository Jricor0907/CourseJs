/*Data Type*/
//Data type String
var name = "Juan";
console.log(name);

name = 10;
console.log(typeof name);

//Data type numbers

var number = 1000;

//Data type object

var object = {
    name: "Juan",
    lastName: "Rico",
    phone: "23"
}

console.log( object);

//Data type Boolean

var flag = false;
console.log(flag);

//Data type Function
function myfunction(){}
console.log(typeof myfunction)

//Data type Function Symbol
var simbolo = Symbol ("my symbol");
console.log(simbolo);


//Class type is a function
class person{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
}
console.log(typeof person)

//Data type undefined 
var x;
console.log (x)

//null = ausencia de valor
var y = null
console.log(y);

var cars = ['audi','bmw','ferrari']
console.log(cars)
console.log(typeof cars);

var z = '';
console.log(z);
console.log(typeof z);
