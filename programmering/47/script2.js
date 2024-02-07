//spåkonservice 22.11.23 utført av Illia NIkolaiev
function regneUt(alder, høyde, tall){
return alder*høyde-tall
}
function check(){
   let alder = document.getElementById("aldere").value;
  let høyde =  document.getElementById("høyd").value;
  let navn = document.getElementById("navn").value;
    //get the values from input
  if (isNaN(alder)) {
    console.log("Alder er ikke et tall");
} else {
    console.log ("Alder er et tall");
    console.log(alder + " " + "år");
} 
//check whether alder is a number
if (isNaN(høyde)) {
    console.log("Høyde er ikke et tall");
} else {
    console.log ("Høyde er et tall");
    console.log(høyde + " " + "cm");
} 
//check whether høyde is a number
let spadom = regneUt(alder,høyde,-3);
//define var spadom which is supposed to be found
console.log(spadom);
//write it out
if (spadom < 0) {
    alert ("Du har skrevet et negativt tall!");
}
else if (spadom > 500) {
    alert ( "Det vil gå deg godt her i verden " + navn + " For at spådommen skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345" );
} else {
    alert ("Stakkars deg! Alt kommer til å gå deg galt " + navn + "For at spådommen ikke skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345" ); 
}
//checking and getting answers on done filters

}
//ferdig programm