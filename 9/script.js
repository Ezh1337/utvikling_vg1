//dom 26.02.24 gjort av Illia Nikolaiev
//task 1 - lyden går
var audio = new Audio("lyd.mp3")
var video = document.getElementById("pigg")
var textchg = document.getElementById("text")
var bildebytt = document.getElementById("pinnvin")

document.getElementById("Lydstart").onmouseover = function(){
    audio.play()    
}
  
//task 2 - lyden stopper
document.getElementById("Lydstart").onmouseleave = function(){
    audio.pause()  
    console.log("test")
}
//task 3 bilde = video
document.getElementById("bilde").onclick = function(){
    video.style.width = "250px";
    video.style.height = "250px";
    video.play()
}
document.getElementById("pigg").onclick = function(){
    video.style.width = "250px";
    video.style.height = "250px";
    video.pause()
}
//side fram
document.getElementById("forward").onmousemove = function(){
    window.location = "side2.html"
}
//bilde større
document.getElementById("bilde").onmousemove = function(){
    bilde.style.width = "250px";
    bilde.style.height = "250px";
}
//tekstfarge endre
textchg.onmousemove = function(){
   textchg.style.color = "red"
}
textchg.onmouseleave = function(){
    textchg.style.color = "black"
 }
 //bilde rotasjon
 const rotatingImage = document.getElementById('rotatingImage');

rotatingImage.addEventListener('mouseenter', () => {
  rotatingImage.classList.add('rotated');
});

rotatingImage.addEventListener('mouseleave', () => {
  rotatingImage.classList.remove('rotated');
});

//bilde bytte
bildebytt.onmousemove = function(){
    console.log("test");
    pinnvin.innerHTML = "<img src = piggsvin.jpg  width=200px height=200px>"
}