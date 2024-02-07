// 18.12.23 (arrays)
// array - navn på dagene
let ukedager = ["mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag", "søndag"];
// traversjon av liste med for-løkke
for (let i = 0; i < ukedager.length; i++) {
    console.log(ukedager[i]);   
}
//negativ tall i listen
let tall = [-1, 2, -3, 4, -5, -7];
let antall = 0;
for (let i = 0; i < tall.length; i++) {
}

// oppgave fag
let fag = ["Matte", "Engelsk", "Gym", "Norsk", "Historie"];
for (let i = 0; i < fag.length; i++) {
    console.log(fag[i]);
    
}
//omvendt rekkefølge (reverse)
for (let i = fag.length; i > 0; i = i - 1) {
   console.log(fag[i]);
    
}
// sorter på alfabet
let sortedFag = fag.sort();
console.log(sortedFag);

//adder ett fag
function addFag(){
    fag.push(document.getElementById("nyFag").value)
    for (let i = 0; i < fag.length; i++) {
        console.log(fag[i]);
        
    }
}
//slett ett fag
function minFag(){
    fag.pop()
    for (let i = 0; i < fag.length; i++) {
        console.log(fag[i]);
    }
}
 