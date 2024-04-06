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


