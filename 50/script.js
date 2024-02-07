//11.12.23 - povtoreniya deistviy
function skrivTall(){   //denne functionen gjør forandinger i tallene starte fra 0 og forstørre det med 1
    let alleTalla = " "; //lokal variabel
for (let i = 0; i < 100; i= i+1) { //setter for løkke
    alleTalla = alleTalla + i + " ";

}
 grotesk.innerHTML = alleTalla
}
//erase 
function erase(){
    grotesk.innerHTML = "";
    rad2.innerHTML = "";
    rad3.innerHTML = "";
    rad4.innerHTML = "";
}
//partall
function parTall(){   //denne functionen teller partall fra 2 til 100
    let alleTalla = " "; //lokal variabel
for (let i = 2; i < 100; i= i+2) { //setter for løkke
    alleTalla = alleTalla + i + " ";

}
 grotesk.innerHTML = alleTalla
}
//oddtall
function oddTall(){   //denne functionen teller oddtall fra 1 til 100
    let alleTalla = " "; //lokal variabel
for (let i = 1; i < 100; i= i+2) { //setter for løkke
    alleTalla = alleTalla + i + " ";

}
 grotesk.innerHTML = alleTalla
}
// dele med 5
function delFem(){   //denne functionen teller tall som deler med 5 fra 5 til 100
    let alleTalla = " "; //lokal variabel
for (let i = 5; i < 100; i= i+5) { //setter for løkke
    alleTalla = alleTalla + i + " ";

}
 grotesk.innerHTML = alleTalla
}
//dele med 5 og er partall
function delFemOgPar(){   //denne functionen teller tall som er partall og delelige med 5 samtidig
    let alleTalla = " "; //lokal variabel
for (let i = 10; i < 100; i= i+10) { //setter for løkke
    alleTalla = alleTalla + i + " ";

}
 grotesk.innerHTML = alleTalla
}
//telle nedover
function nede(){   //denne functionen teller tall fra 0 inntil -100
    let alleTalla = " "; //lokal variabel
for (let i = 0; i > -100; i= i-1) { //setter for løkke
    alleTalla = alleTalla + i + " ";

}
 grotesk.innerHTML = alleTalla
}
//Alle tallene fra -10 til 10 til svarene i funksjonen Y = X^2
function andreGrad(){   //denne functionen teller tall fra -10 til 10 og skriver ut den i andre grad
    let alleTalla = " "; //lokal variabel
for (let i = -10; i <= 10; i= i + 1) { //setter for løkke
    alleTalla = alleTalla + i * i + " ";

}
 grotesk.innerHTML = alleTalla
}
//viser krysser fra 1 til 5 krysser
function kryss(){   
    let alleTalla = "*"; //lokal variabel
for (let i = 0; i < 4; i= i + 1) { //setter for løkke
    alleTalla = alleTalla + "*";

}
 grotesk.innerHTML = alleTalla
}
// samme som forrige, men er i raden
function kryssRad(){   
    let alleTalla = " "; //lokal variabel
    
    for (let k = 0; k < 4; k++) {
        for (let i = 0; i < 4; i= i + 1) { //setter for løkke
            alleTalla = alleTalla + "*";
        }
        alleTalla = alleTalla + "<br>"
    }   
    grotesk.innerHTML = alleTalla
}
function kryssradOpp(antall) {
    let alleTalla = " "; //lokal variabel
    
    for (let k = 0; k < antall; k = k + 1) {
        for (let i = 0; i < k; i= i + 1) { //setter for løkke
            alleTalla = alleTalla + "*";
        }
        alleTalla = alleTalla + "<br>"
    }   
    grotesk.innerHTML = alleTalla
 
}
kryssradOpp(5)
function kryssradNed(antall1) {
    let alleTalla = " "; //lokal variabel
    
    for (let k = 0; k > antall1; k = k + 1) {
        for (let i = 5; i > k; i= i - 1) { //setter for løkke
            alleTalla = alleTalla + "*";
        }
        alleTalla = alleTalla + "<br>"
    }   
    grotesk.innerHTML = alleTalla
 
}
