//console.log("Hello world")
//alert("Hello world")

// let firstName = prompt("What is your name?")
// let age = prompt("What is your age?")
// console.log("My name is " + firstName + ", i am " + age + " years old.")


// let amount = prompt("How much money do you have?")
// let days = prompt("Enter days")
// let total = amount * days
// console.log("You will have " + total + " after " + days + " days.")

// console.log("data type of total is " + typeof(total))


// let grade = prompt("What is your score?")
// let score = parseInt(grade)
// if (score >= 80) {
//     alert("Excellent")
//     } else if (score >= 50) {
//         alert("Pass")
//     } else  {
//         alert("Fail")
// }

let days = prompt("Enter days").toLowerCase();
switch (days) {
    case "monday":
        alert("Back on the grind!");
        break;
    case "tuesday":
        alert("Still grinding, keep going!");
        break;
    case "wednesday":
        alert("Halfway there!");
        break;
    case "thursday":
        alert("Almost the weekend, grind hard!");
        break;
    case "friday":
        alert("TGIF! You made it!");
        break;
    case "saturday":
        alert("Sleep all you want!");
        break;
    case "sunday":
        alert("Rest well, prepare for the week ahead!");
        break;
    default:
        alert("Invalid day entered.");
}