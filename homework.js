for(let i = 0; i <= 10; i++) {
    if(i % 2 === 0 && i !== 0) {
        console.log(i)
    }
}

let grades = [10, 30, 50, 70, 90, 20, 40, 60, 80, 100]
console.log(grades.length);
for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 80) {
        console.log("You did a good job")
    }
    else if (grades[i] >= 70) {
        console.log("Keep trying")
    }
    else if (grades[i] >= 60) {
        console.log("ehhhh")
    }
    else if (grades[i] >= 55) {
        console.log("Not to good")
    }
    else {
        console.log("Bad Grade But You'll Get Em Next Time")  
    }
}

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
        if (i % 5 === 0) {
            console.log("FizzBuzz")
        }
        else {
            console.log("Fizz")
        }
    }
    if (i % 5 === 0) {
        console.log("Buzz")
    }
}