alert(
    "Hei Staale!"
);
let tall1 = 3;
let tall2 = 5;
function add(){
    console.log(tall1+tall2);
   let sum = tall1+tall2;
   text.innerHTML = sum;

}
function mutltiply(){
    console.log(tall1*tall2);
    let sum = tall1*tall2;
    text.innerHTML = sum;
}
function multiply5(){
    console.log(tall1*5);
    let sum = tall1*5;
    text.innerHTML = sum;

}
function add1(){
    console.log(tall1+1);
    let sum = tall1+1;
    text.innerHTML = sum;

}
function min1(){
    console.log(tall1-1);
    let sum = tall1-1;
    text.innerHTML = sum;

}
//create img
const img = document.createElement('img');

// path-to-img
img.src = '1.jpg';

// size

img.height = 200;
img.width = 200;
// hvor puter vi img
const container = document.querySelector('#image-container');

// img-insert
container.append(img);


function colorChange(){
   document.getElementById("text").style.backgroundColor ="blue";                           
}
