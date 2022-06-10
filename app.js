console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count) {
    if (count < 0) {
        count = count * -1;
    }
    for (let i = 1; i <= count; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        } else {
            continue;
        }
    }
}
// printOdds(10);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(age) {
    let aboveSixteen = "You can drive!";
    let belowSixteen = "Sorry, but you need to wait until you're 16.";
    if (age < 16) {
        console.log(belowSixteen);
    } else if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log("That's not a valid age!");
    }
}
checkAge(16);