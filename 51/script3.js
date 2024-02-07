//20.12.23 array extra 1
let bokstav = ["a","b","c","d"];
//skriv ut
function skrivUt(){
    bokstaver.innerHTML = bokstav;  
}
//Legger-funksjon
function leggTil(){
    bokstav.push(document.getElementById("bokstav").value)
    for (let i = 0; i < bokstav.length; i++) {
        console.log(bokstav[i]); 
    }
    skrivUt()
}
//alfabetisk rekkefølge
function sorter(){
   let bokstav_alfa =  bokstav.sort();
   console.log(bokstav_alfa);
   skrivUt()
}
//tømme input
function slett(){
    document.getElementById("bokstav").value = " ";
}
//skrive ut alle nr.2 bokstavene i rekkefølge
function annHver(){
    for (let index = 0; index < bokstav.length; index=index+2) {
      console.log(bokstav[index]);  
    }
}


function annHver2(){
    for (let index = 0; index < bokstav.length; index++) {
      if(index%2==0){
        console.log(bokstav[index]);  
      }
      else{
        console.log("oddetallbokstaver"+ " " + bokstav[index])
      }
         }
}
//oppgave 2
let tallene =  [34,53,2,3,34,26,26,85,3,4,98,2,12]; 
//summ av array
let summ = 0;
function sum(){
    for (let i = 0; i < tallene.length; i++) {
        summ += tallene[i];
        
    }
    
    console.log(summ);
}
//sum av negative tall
function nega(){
    if (tallene < 0) {
        console.log(tallene)
    } else {
        console.log("finnes ingen negative tall")
    }
}
// gjennomsnitt
function gjen(){
    let gjennom = 0 ;
    gjennom = 382 / 13;
    gjenomf = gjennom.toFixed()
    console.log(gjenomf);
}
//finn minste tall
function minn() {
    const minst = Math.min(tallene)
    console.log(minst)
}
function minn()  
//summen av partall
function sumPar(){
    for (let index = 0; index < tallene.length; index=index+2) {
       let summe = 0
        summe += tallene[index];
      console.log(summe);  
    }
}
function sumPar()