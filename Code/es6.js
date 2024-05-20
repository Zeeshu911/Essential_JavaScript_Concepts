//----------TEMPLATE LITERALS-----------

// let i = 1;

// // do {
// //   console.log(`7 x ${i} = ${7 * i}`);
// //   i++
// // } while (i <= 10);

// function sendGreeting(name) {
//   console.log(`Welcome ${name}`);
// }

// sendGreeting("Zeeshan")

//Arrow Functions

// const sendGreeting = () => console.log("HELLO WORLD");
// sendGreeting();

// function add(a, b) {
//   return a + b;
// }
// const addArrowFunction = (a, b) => a + b;

// console.log(add(2, 3));

// console.log(addArrowFunction(5, 5));

const object = {
    name: "Zeeshan",
    age: 21,
    maritalStatus: false
}

const {age, maritalStatus, name} = object;

console.log(name);
console.log(age)
console.log(maritalStatus)



