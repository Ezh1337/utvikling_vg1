//script for gaard
function eple(){
    var vid = document.getElementById("video");
    vid.src = "../animasjoner/gaard_eple.mp4";
    textbox.innerHTML = "Den her er en eple, den er bra for din helse og synn. <br> Benny: Takk for det!";
    document.getElementById("apple").style.visibility = "hidden";
    document.getElementById("pear").style.visibility = "hidden";
    document.getElementById("banana").style.visibility = "hidden";
    document.getElementById("hjem").style.visibility = "visible";
}
function pare(){
    var vid = document.getElementById("video");
    vid.src = "../animasjoner/gaard_paere.mp4"; 
   textbox.innerHTML = "Den her er en pære , den hjelper deg å holde seg frisk. <br> Benny: Takk for det!";
   document.getElementById("apple").style.visibility = "hidden";
   document.getElementById("pear").style.visibility = "hidden";
   document.getElementById("banana").style.visibility = "hidden";
   document.getElementById("hjem").style.visibility = "visible";
}
function banan(){
    var vid = document.getElementById("video");
    vid.src = "../animasjoner/gaard_banan.mp4";
   textbox.innerHTML = "Den her er en banan, den gir deg energi for at du kan løpe å hoppe mer. <br> Benny: Takk for det!";
   document.getElementById("apple").style.visibility = "hidden";
   document.getElementById("pear").style.visibility = "hidden";
   document.getElementById("banana").style.visibility = "hidden";
   document.getElementById("hjem").style.visibility = "visible";
}
function tilbake() {
    window.location.href ="siste.html"
}