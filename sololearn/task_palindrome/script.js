// Returns the first character of the string str
var firstCharacter = function(str) {
    return str.slice(0, 1);
};

// Returns the last character of a string str
var lastCharacter = function(str) {
    return str.slice(-1);
};

// Returns the string that results from removing the first
//  and last characters from str
var middleCharacters = function(str) {
    return str.slice(1, -1);
};

var isPalindrome = function(str) {
    // base case #1
    if (str.length<=1){
        return true;
    } 
    // base case #2
    else if(firstCharacter(str) !== lastCharacter(str)){
        return false;
    }
   
    // recursive case
    return isPalindrome(middleCharacters(str));
};

var checkPalindrome = function() {
    var inputStr = document.getElementById("check").value;
    console.log("Is this word a palindrome? " + inputStr);
    console.log(isPalindrome(inputStr));
    answer.innerHTML = isPalindrome(inputStr);
};

checkPalindrome("a");

checkPalindrome("motor");

checkPalindrome("rotor");

checkPalindrome("rekk");

checkPalindrome("makam");
