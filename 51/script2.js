//list- oppgave
let height = [ 156,178,187,182,177,165,172 ];
let currentIndex = 0

//1 verdi til siden og console


function firstVer(){
    first.innerHTML = height [0];
    console.log(height [0]);
}
//last verdi til siden og console
function sistVer(){
    sist.innerHTML = height [6];
    console.log(height [6]);
}
//¨legg sammen alt
let alle = height[0] + height[1] + height[2] + height[3] + height[4] + height[5] + height[6];
 console.log (alle);
 // knapp til gjennomsnitt
function gjenom(){
    alle = alle / 7;
     alle = alle.toFixed()
    gjen.innerHTML = alle;
}
//Lag en knapp som gjør at når du trykker på den neste gangen skal det den første høyden vises

function viser(){
  if (currentIndex == height.length - 1) {
    currentIndex = 0
  } else {
    currentIndex++
  }
  vis.innerHTML = height[currentIndex];
}
//Lag en knapp som gjør at når du trykker på den forrige gangen skal det den første høyden vises

function forrige(){
    if (currentIndex == 0) {
        currentIndex = height.length-1

    } else {
        currentIndex--
    }
    vis.innerHTML = height[currentIndex];
}