//sololearn task 1 04.02.24 first try
// LESSON : PROPERTIES
function getProp(){ //create function
var person = { name: "John", age: 31, favColor: "green", height: 183}; //create object w props
let x = person.age; //let w object prop
let y = person["age"];
console.log(x); //write out
console.log(y);
}
getProp()
//prop-length
function getCourse(){   //same as 1
    let course = {name: "Javascript", lessons: 41};
    console.log(course.lessons);
}
getCourse()
