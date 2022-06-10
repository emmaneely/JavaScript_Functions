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
// checkAge(16);

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function quadFinder(x, y) {
    if (x > 0 && y > 0) {
        console.log("Quadrant 1");
    } else if (x < 0 && y > 0) {
        console.log("Quadrant 2");
    } else if (x < 0 && y < 0) {
        console.log("Quadrant 3");
    } else if (x > 0 && y < 0) {
        console.log("Quadrant 4");
    } else if (x == 0 && y == 0) {
        console.log("You found the origin!");
    } else {
        console.log("Not valid coordinates!");
    }
}
// quadFinder(1, 2);
// x +, y + = 1
// x -, y + = 2
// x -, y - = 3
// x +, y - = 4

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangle(a, b, c) {
    if (a + b > c && b + c > a && a + c > b) {
        if (a == b && b == c) {
            console.log("That is an equilateral triangle!");
        } else if (a == b || b == c || c == a) {
            console.log("That is an isosceles triangle!");
        } else {
            console.log("That is a scalene triangle!");
        }
    } else {
        console.log ("Not a valid triangle!");
    }
}
triangle(5, 10, 12);