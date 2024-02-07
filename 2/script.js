//8.01.24 arrays del 2
let film = ["Whispers in the Wind", "Ephemeral Echoes", "Chronicles of the Cosmos", "Lost in Translation", "Midnight Serenade",    "Shadows of Destiny",    "The Enigmatic Cipher",    "A Dance with Shadows",    "Beyond the Horizon",    "Infinite Reverie",    "Spectral Symphony",    "The Labyrinth of Illusions",    "Echoes of Eternity",    "Stardust Dreams",    "Journey to the Unknown",    "The Forgotten Melody",    "Surreal Sanctuary",    "Eternal Embrace",    "The Quantum Paradox",    "Whirlwind of Whispers"];
function alle(){
    for (let i = 0; i < film.length; i++) {
        console.log(film[i]);
        
    }
}
const filmSort = film.sort()
function sorted(){
    console.log(filmSort)
}
function andre(){
    for (let i = 0; i < film.length; i= i + 2) {
        console.log(film[i]);
        
    }
}
function removeNadd(){
    film.splice(10, 2);
    film.splice(10,0,"Forrest Gump");
    alle()
}
function liste(){
    let list = " "
   for (let i = 0; i < film.length; i++) {
    list += " " + film[i] + "<br>"

    
   };
   allFilms.innerHTML = list
}