let ourTuple: [string, number, string, boolean] = [
  'Is',
  7,
  'our favorite number?',
  false,
];

function smush(firstString: string, ...otherStrings: string[]) {
  let output = firstString;
  for (let i = 0; i < otherStrings.length; i++) {
    output = output.concat(otherStrings[i]);
  }
  return output;
}

console.log(smush('a', 'h', 'h', 'H', 'H', 'H', '!', '!'));

enum Direction {
  North,
  South,
  East,
  West,
}

let whichWayToArcticOcean: Direction;
whichWayToArcticOcean = Direction.North; // No type error.

console.log(whichWayToArcticOcean === 0);

type PersonType = {
  name: string;
  giftWish: string;
  age: number;
  success: boolean;
};

function sayHappyBirthdayWithObject(personObject: PersonType) {
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

let birthdayBabies: PersonType[] = [
  { name: 'Liam', age: 0, giftWish: 'karate skills', success: false },
  { name: 'Olivia', age: 0, giftWish: 'a bright future', success: true },
  { name: 'Ava', age: 0, giftWish: '$0.25', success: true },
];

birthdayBabies.forEach(sayHappyBirthdayWithObject);

let aCompany: {
  companyName: string;
  boss: { name: string; age: number };
  employees: { name: string; age: number }[];
  employeeOfTheMonth: { name: string; age: number };
  moneyEarned: number;
};

type StringsToNumberFunction = (arg0: string, arg1: string) => number;

let myFunc: StringsToNumberFunction;
myFunc = function (firstName: string, lastName: string) {
  return firstName.length + lastName.length;
};

myFunc = function (whatever: string, blah: string) {
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
  console.log(
    'When we',
    operationCallback.name,
    '2 and 5, we get',
    value25,
    '.'
  );
  console.log(
    'When we',
    operationCallback.name,
    value25,
    'and 7, we get',
    operationCallback(value25, 7),
    '.'
  );
  console.log('Now fill out this worksheet.');
}

// Call your functions below:
mathTutor(multiply);
