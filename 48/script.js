//27.11.23 laget av Illia Nikolaiev
//notaterside
//eksampel på function


function funEks(){
    let tall = document.getElementById("funkEks").value;
    
console.log(tall)

if (tall >0){alert ("du har skrevet et positiv tall");}

else if(tall<0){    
    alert ("du har skrevet et negativ tall");   
    }

else {
    alert("du har skrevet null");        
}
}

//radiobutton
function visValg(valg){
    resultat.innerHTML = "Hva valgt jeg?<br> Te: " + valg[0].checked+"<br> Kaffe: "+valg[1].checked;
    console.log(valg[0].checked);
    console.log(valg[1].checked);
}
//funksjon hei og hadet
function hei(){
    alert ("Hei på deg");

}
function hadet(){
alert ("Ha det bra!")    
}
//oppgave sammelign
function sammelign(){
    let tall1 = document.getElementById("tall1").value;
    let tall2 = document.getElementById("tall2").value;
   if(tall1 !== Number){
    resu.innerHTML = "Vennligst skriv tall";
   }
   if(tall2 !== Number){
    resu.innerHTML = "Vennligst skriv tall";
   }
   
    if (tall1>tall2) {
        resu.innerHTML = tall1 + " " + "er større enn" + " "+ tall2;
    } else if (tall1<tall2) {
        resu.innerHTML = tall2 + " " + "er større enn" + " "+ tall1;
    }
    else{
        resu.innerHTML = tall2 + " " + "er lik til" + " "+ tall1;
    }
}
function rik(){
    end.innerHTML = "Riktig";
    end.style.backgroundColor = "green";
}
function gal(){
    end.innerHTML = "Galt";
    end.style.backgroundColor = "red";


}
function ett(siffer){
    tekstfelt.value += siffer;
}
function to(){
    tekstfelt.value = " ";
}