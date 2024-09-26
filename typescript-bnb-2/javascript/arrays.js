"use strict";
let ourTuple = [
    'Is',
    7,
    'our favorite number?',
    false,
];
function smush(firstString, ...otherStrings) {
    let output = firstString;
    for (let i = 0; i < otherStrings.length; i++) {
        output = output.concat(otherStrings[i]);
    }
    return output;
}
console.log(smush('a', 'h', 'h', 'H', 'H', 'H', '!', '!'));
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
let whichWayToArcticOcean;
whichWayToArcticOcean = Direction.North; // No type error.
console.log(whichWayToArcticOcean === 0);
function sayHappyBirthdayWithObject(personObject) {
    let output = '';
    output += 'Happy Birthday ' + personObject.name + '! ';
    output += 'You are now ' + personObject.age + ' years old! ';
    output +=
        'Your birthday wish was to receive ' +
            personObject.giftWish +
            '. And guess what? You will ';
    if (!personObject.success) {
        output += 'not ';
    }
    output += 'receive it! \n';
    console.log(output);
}
let birthdayBabies = [
    { name: 'Liam', age: 0, giftWish: 'karate skills', success: false },
    { name: 'Olivia', age: 0, giftWish: 'a bright future', success: true },
    { name: 'Ava', age: 0, giftWish: '$0.25', success: true },
];
birthdayBabies.forEach(sayHappyBirthdayWithObject);
let aCompany;
let myFunc;
myFunc = function (firstName, lastName) {
    return firstName.length + lastName.length;
};
myFunc = function (whatever, blah) {
    return whatever.length - blah.length;
};
// Math Operations
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function wrongAdd(a, b) {
    return a + b + '';
}
// Add your function type below:
// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback) {
    console.log("Let's learn how to", operationCallback.name, '!');
    let value25 = operationCallback(2, 5);
    console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
    console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25, 7), '.');
    console.log('Now fill out this worksheet.');
}
// Call your functions below:
mathTutor(multiply);
