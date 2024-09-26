const car = {};

const car2 = new Object();

const car3 = Object.create({});

console.log(car, car2, car3);

/* Propriedades */
const car4 = {
  'the color': 'blue',
  color: 'blue',
};

car4.model = 'Fiesta';

delete car4['the color'];
// car4.model = undefined;

console.log(car4.model);

/* Referência vs Valor */

// Primitivos são passados por valor
let age = 18;
let newAge = age;

newAge = 20;

console.log(age);

// Objetos são passados por referência
const car5 = {
  color: 'blue',
  other: {
    brand: 'Fiesta',
  },
};

const outroCarro = car5;

outroCarro.color = 'red';

console.log(car5);

/* Métodos */
const car7 = {
  start: function (destination) {
    console.log('Car engine started. We are going to', destination);
  },
};

car7.start('Cianorte');

/* Métodos como argumentos/parâmetros */
const printNameAndAge = ({ name, age }) => {
  console.log(`Nome:`, name, `, Idade:`, age);
};

printNameAndAge({ name: 'Mateus', age: 21, gender: 'Male' });

function test() {
  const name = 'Mateus';
  const age = 21;

  return {
    name,
    age,
  };
}

/* this */
const test2 = function () {
  console.log(this);
};

test2();

const car8 = {
  brand: 'Ford',
  model: 'Fiesta',
  start: () => {
    console.log(`Started ${this.brand} ${this.model}`);
  },
};

car8.start();

/* Desestruturação */
const person = {
  firstName: 'Tom',
  lastName: 'Cruise',
  actor: true,
  age: 62,
};

const { lastName, firstName: name } = person;

console.log(name);

/* Clonagem de objetos */
const a = {
  dog: {
    name: 'Nick',
  },
};
const b = { ...a };

a.dog.name = 'Embreagem';

console.log(b.dog.name);

const obj1 = {
  name: 'Mateus',
};

const obj2 = {
  age: 21,
};

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

/* Sort */
const shirts = [
  { color: 'white', size: 'XXL' },
  { color: 'red', size: 'XL' },
  { color: 'black', size: 'M' },
];

//           -1 1
shirts.sort((a, b) => (a.color > b.color ? 1 : -1));

console.log(shirts);

// apply, call, bind

const car9 = {
  maker: 'Ford',
  model: 'Fiesta',
  // drive() {
  //   console.log(`Dirigindo ${this.maker} ${this.model}`);
  // },
};

const drive = function (velocidade) {
  console.log(`Dirigindo ${this.maker} ${this.model} ${velocidade}`);
};

drive.call(car9, 100);
// drive.apply(car9, [100]);

// const anotherCar = {
//   maker: 'Audi',
//   model: 'A4',
// };

// car9.drive.bind(anotherCar)();
