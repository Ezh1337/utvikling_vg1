// 4.12.23 Illia Nikolaiev
// Oppgaversett fra Samuel
let input2 = document.getElementById("num").value

function rev(){

    input2 = input2 + "";
    let output = input2.split("").reverse().join("");
    res.innerHTML = output;
}

console.log(Number(rev(675432445)));
