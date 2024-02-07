//15.01.24 bildegaleri
let images = ["imgs/bilde.jpg","imgs/bilde1.jpg","imgs/bilde2.jpg", "imgs/12.jpg"];
let texts = ["A cabin on a dock by a lake with mountains in the background.","A person standing on a dock on a lake with mountains in the background","A lake surrounded by mountains" ]

document.getElementById("photo").onmouseover = function() {pekerOn()};


i = 0;
function next() {
    i = i + 1;
    if (i>=images.length){i=0}    
    photo.src = images[i]
    console.log(images[i]);
    if (i>=texts.length){i=0}    
    
    document.getElementById("text").innerHTML = texts[i] + 1
    console.log(texts[i]);
    setTimeout()
}

function back(){
    i = i - 1
    if (i < 0) { i = images.length-1;}
    photo.src = images[i]
    console.log(images[i]);
    if (i < 0) { i = texts.length-1;}
    text.src = texts[i]
    document.getElementById("text").innerHTML = texts[i] 
    console.log(texts[i]);
}
function autoChange(){
    autoChangeInt = setInterval(next, 5000)
}
function stopAutochange(){
    clearInterval(autoChangeInt)
}
nxtBtn.addEventListener("click", () =>{
    stopAutochange()
    next()
})
prvBtn.addEventListener("click", () =>{
    stopAutochange()
    back()
})
function pekerOn(){

    console.log("test");
    photo.innerHTML = "<img src = /imgs/12.jpg> </img>"
}
function PekerOff(){
    document.getElementById("photo").innerHTML = 0
}