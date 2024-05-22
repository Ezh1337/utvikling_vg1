// Single dice roll
let totalAttempts = 0;
let throws = [];

function Roll1() {
    let attempts = 0;
    let number;
    do {
        let dice = Math.floor(Math.random() * 6) + 1;
        attempts++;
        if (dice == 1) {
            break;
        }
        number = dice;
    } while (number !== 1);

    totalAttempts += attempts;
    throws.push(attempts);
}

// Perform 1000 attempts
for (let i = 0; i < 1000; i++) {
    Roll1();
}

// Calculate average
let average = totalAttempts / 1000;
console.log(`Average number of throws to get a 1: ${average.toFixed(1)}`);


// Double dice roll
let totalAttempts2 = 1000;
let totalThrows2 = 0;

function Roll2Dices() {
    let attempts = 0;
    for (let i = 0; i < totalAttempts2; i++) {
        let dice1 = Math.floor(Math.random() * 6) + 1;
        let dice2 = Math.floor(Math.random() * 6) + 1;
        attempts++;

        if (dice1 === 1 && dice2 === 1) {
            
            totalThrows2 += attempts;
            break;
        }
    }
}

// Perform 1000 attempts
for (let i = 0; i < 1000; i++) {
    Roll2Dices();
}

// Calculate average
let averageThrows2 = totalThrows2 / 1000;
console.log(`Average number of throws to get two 1s: ${averageThrows2.toFixed(1)}`);

// Five dice roll
let totalAttempts5 = 1000;
let totalThrows5 = 0;

function Roll5Dices() {
    for (let i = 0; i < totalAttempts5; i++) {
        let attempts = 0;
        let allOnes = false;
        while (!allOnes) {
            attempts++;
            allOnes = true;
            for (let j = 0; j < 5; j++) {
                let dice = Math.floor(Math.random() * 6) + 1;
                if (dice !== 1) {
                    allOnes = false;
                    break;
                }
            }
        }
        totalThrows5 += attempts;
    }
}

// Perform 1000 attempts
Roll5Dices();

// Calculate average
let averageThrows5 = totalThrows5 / totalAttempts5;
console.log(`Average number of throws to get five 1s: ${averageThrows5.toFixed(1)}`);

function reset(){
    window.location.href  ="index.html"
}
