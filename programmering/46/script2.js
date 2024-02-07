 //onsdag oppgaver 18.11 av Illia Nikolaiev
 function reisePen(){
   let input_tall =  document.getElementById("km").value;
    let reisepen  = Number(input_tall) * 4.05;
    console.log(reisepen);
    penger.innerHTML = reisepen + " " + "kr skal dere bruke på deres reise."; // oppgave 1
 }


 //oppgave 2
 function summ(){
    let num1 = document.getElementById("nummer1").value;
    let num2 = document.getElementById("nummer2").value;
    var sum = Number(num1) +  Number(num2);
    summer.innerHTML = sum ;
 }





 function returnerer(tall1,tall2){ // parameter
   return tall1 + tall2;       
 }


 console.log(returnerer(5,5));

 console.log(returnerer(7,6));

 function omkrets(sidelengde){
   return sidelengde * 4;
 }
console.log(omkrets(6));



function sirkelOmkrets(radius) {
  const PI = 3.14;
  return 2 * PI * radius;
}


btn.addEventListener("click", () => {
  const value = radius.value
  console.log(sirkelOmkrets(value));
  omkre.innerHTML = sirkelOmkrets(value);
  
})


// Først vi setter opp en funksjon som regner ut omkrets på formulen, hentet fra mattetimen, hvilken er O=2*Pi*r,
// så stter vi en constant PI, hvilken skal ikke forandres under funksjon. Har vi også en variabel radius,
// hvilken skal settes før kjøring av funksjon og utskriver vi svar med valgt radiusen inn i consolen
//

function sirkelAreal(radius){
  const PI = 3.14;
  return  PI *radius * radius;

}
btn2.addEventListener("click", () => {
  const value = radius.value
  console.log(sirkelAreal(value));
  area.innerHTML = sirkelAreal(value);
  
})


//Samme som i sist oppgaven, men formulen er A=PI * r^2


function money(kron){
  
  const dol = 10.74;
  return kron / dol;
}

btn3.addEventListener("click", () => {
  const value = kron.value
  console.log(money(value));
  regnet.innerHTML = money(value);
  
})
//overføring fra kroner til dollar
function tid(tim){
  const sek = 3600;
  return tim * sek;

}
btn4.addEventListener("click", () => {
const value = tim.value;
console.log(tid(value));
tiden.innerHTML = (tid(value));

})
//utregningen av arealet av rektangel
console.log(rektangel(3,8))
function rektangel(bred, hoyd){
  return bred * hoyd
}
