//this algorithm is describing how to empower numbers at the easiest and most efficient way
var displayPower = function() {
    let x = document.getElementById("number").value;
    let n = document.getElementById("power").value;
    console.log(x + " to the " + n + " is " + power(x, n));
    document.getElementById("answer").innerHTML = x + " to the " + n + " is " + power(x, n);
};




var isEven = function(n) {
    return n % 2 === 0;
};

var isOdd = function(n) {
    return !isEven(n);
};

var power = function(x, n) {
    console.log("Computing " + x + " raised to power " + n + ".");
    // base case
    if(n===0){
        return 1;
    }
    // recursive case: n is negative 
   else if(n<0){
      return 1/power(x, -n);
  }
    // recursive case: n is odd
   else if (isOdd(n)){
        return x * power(x, n-1);
    }
    // recursive case: n is even
   else if (isEven(n)){
        var halfpower = power(x, n / 2);
        return halfpower*halfpower;
    }
};

