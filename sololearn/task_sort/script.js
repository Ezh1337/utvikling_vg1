//array sorting
var displayArray = function(array) {
    framvisning.innerHTML = array;
    
};
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var indexOfMinimum = function(array, startIndex) {
    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = startIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
};
var selectionSort = function(array) {
for(var i = 0; i < array.length; i++) {
        
        var minIndex = indexOfMinimum(array, i);
       
        swap(array, i, minIndex);
    }
};

var array = [2, 1];
selectionSort(array);
var array1 = [22, 11, 99, 88, 9, 7, 42];
selectionSort(array1);
var array2 =[-1,-5,8,9,0,77];
selectionSort(array2);
displayArray(array);
displayArray(array2);
displayArray(array1);
console.log("Array after sorting:  " + array.join(", "));
console.log("Array after sorting:  " + array2.join(", "));
console.log("Array after sorting:  " + array1.join(", "));



