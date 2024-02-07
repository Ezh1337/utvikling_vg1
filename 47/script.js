
function regneUt(){
    let inputNum = document.getElementById("bensin").value;
   
    if (isNaN(inputNum)) {
        console.log("inputNum er ikke et tall")
    } else {
        console.log ("inputNum er et tall")
        console.log(inputNum + " " + "liter")
    } 


    if (inputNum > 80) {
        alert (" Tanken er ikke så stor!!!");
    }
    if ( inputNum < 5){
        alert ("Vi selger ikke så små antall!");
    }
    if (inputNum < 0){
        alert ("Vi tar ikke bensin i retur!");
    }
    
    const benPris = 25;
    let svar1 = benPris * inputNum;
    if (inputNum > 50){
         svar1 = svar1 - (svar1 / 10);
         avslag.innerHTML = svar1 / 10 + "kr er avslaget ditt";
    }
    console.log(svar1);
    sum.innerHTML = svar1 + " "+ "kroner ";
    liter.innerHTML = inputNum + " " + "L";
    mva.innerHTML = "MVA ditt er" + "  " +  svar1 / 4 + " kr";  
}