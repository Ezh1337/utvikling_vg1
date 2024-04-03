//Methods in JavaScript 07.02.24
function person(name, age){ //creating func w 2 parameters and avaibility to change one of them 
    this.name = name;
    this.age = age;
    this.ChangeName = function (name){//Avaibility to change name
        this.name = name;
    }
}
var p = new person("David", 21);//creating variable , connected to func
p.ChangeName("John");// using func to change it
console.log(p) //writeout
person()


//function nr.2
function persona(name, age){
    this.name = name;
    this.age = age;
    this.yearOfBirth = bornYear();
}
function bornYear(){
    return 2016 - this.age;
}
var p1 = new persona("a", 22)
console.log(p1.yearOfBirth)
persona()