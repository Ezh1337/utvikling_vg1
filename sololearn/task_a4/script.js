let b = 210;
let l = 297;
let h = 1;
let Nyvolum = 0;
let volum= b*l*h;
regn(b,h,l)
function regn(){
    while (true) {
       
        Nyvolum =b*l*h;
        if(Nyvolum>=volum){
            Nyvolum = volum;
            b=b-2;
            l=l-2;
            h=h+1;
        }
        console.log(Nyvolum)
        return
    }
}  
var swap = function(array, firstIndex, secondIndex) {
    let temp = array[firstIndex]
	array[firstIndex] = array[secondIndex];
	array[secondIndex] = temp;
};

var testArray = [7, 9, 4];
swap(testArray, 1, 0);




console.log(testArray);

//Program.assertEqual(testArray, [9, 7, 4]);


