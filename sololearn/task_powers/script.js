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
  if(n<0){
      return 1/power(x, -n);
  }
    // recursive case: n is odd
    if (isOdd(n)){
        return x * power(x, n-1);
    }
    // recursive case: n is even
    if (isEven(n)){
        var halfpower = power(x, n / 2);
        return halfpower*halfpower;
    }
};

var displayPower = function(x, n) {
    console.log(x + " to the " + n + " is " + power(x, n));
};

displayPower(3, 0);

displayPower(3, 1);

displayPower(3, 2);

displayPower(3, -1);
