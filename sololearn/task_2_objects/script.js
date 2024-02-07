//Task 2 object creartion 04.02.24
function person (name, age, color){ //create a function w 3 parameters 
    this.name = name;
    this.age = age;                 //this is defining exact value from object
    this.favColor = color;
}
var p1 = new person("John", 42, "green");   //creating objects
var p2 = new person("Amy", 38, "purple");
console.log(p1.name);   //writing out object + properties
console.log(p2.age);
person() //calliong out the function