//inputoppgaven Illia Nikolaiev 13.11.2023 summen
//function valg(){
    switch(document.getElementById("valgav")){
        case 0 :
            document.getElementById("add");             //spør staale om radiobutton    
            
    }



//
function leggSammen(){
    let input_tall1 = document.getElementById("tall1").value;
    let input_tall2 = document.getElementById("tall2").value;
    if(tall1 !== Number){
        sum.innerHTML = "Sånn number exsisterer ikke!";
    }
    if(tall2 !== Number){
        sum.innerHTML = "Sånn number exsisterer ikke!";
    }
    let leggSammen_sum = Number(input_tall1) + Number(input_tall2);
    let fixed_sum = leggSammen_sum.toFixed(2);
    console.log(input_tall1);
    console.log(input_tall2);
    console.log(sum);
    sum.innerHTML = fixed_sum;

}
//trekking
function trekkeIfra(){
    let input_tall1 = document.getElementById("tall1").value;
    let input_tall2 = document.getElementById("tall2").value;
    let leggSammen_sum = Number(input_tall1) - Number(input_tall2);
    let fixed_sum = leggSammen_sum.toFixed(2);
    console.log(input_tall1);
    console.log(input_tall2);
    console.log(sum);
    sum.innerHTML = fixed_sum;

}
//ganging
function gange(){
    let input_tall1 = document.getElementById("tall1").value;
    let input_tall2 = document.getElementById("tall2").value;
    let leggSammen_sum = Number(input_tall1) * Number(input_tall2);
    let fixed_sum = leggSammen_sum.toFixed(2);
    console.log(input_tall1);
    console.log(input_tall2);
    console.log(sum);
    sum.innerHTML = fixed_sum;

}
//deling
function dele(){
    let input_tall1 = document.getElementById("tall1").value;
    let input_tall2 = document.getElementById("tall2").value;
   
    if (input_tall2 == 0) {
        sum.innerHTML = "Du kan ikke dele på 0"
    } else {
        let leggSammen_sum = Number(input_tall1) / Number(input_tall2);
        let fixed_sum = leggSammen_sum.toFixed(2);
        sum.innerHTML = fixed_sum;
    }
    console.log(input_tall1);
    console.log(input_tall2);
    console.log(sum);
    

}
//gradoverføring
function overfor(){
    let input_grad = document.getElementById("celc").value;
    let overfor_res = (Number(input_grad)* 9 / 5) + 32;
    console.log(overfor_res);
    far.innerHTML = "Det er din celicus grad overført med formula inn i Farenheit" + " " + overfor_res + "°F";
}