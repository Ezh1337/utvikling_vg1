
//inserting the value at the excat place in the array
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

var array = [3, 5, 7, 11, 13, 2, 9, 6];
selectionSort(array);
var insert = function(array, rightIndex, value) {
    var j;
    for (j = rightIndex; j >= 0 && array[j] > value; j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
};

var insertionSort = function(array) {
    for (var i = 1; i < array.length; i++) {
       
        insert(array, i - 1, array[i]);
    }
};

var array = [22, 11, 99, 88, 9, 7, 42];
insertionSort(array);
console.log("Array after sorting: " + array);






