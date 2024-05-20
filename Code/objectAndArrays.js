//------------OBJECT---------------

// const subscriber = {
//     name: "Ali",
//     age: 18,
//     country: "India",
//     isStudent: true
// }

// console.log(subscriber)

// subscriber.fullName= "Masud Ali"

// console.log(subscriber.age);


//------------ARRAYS-----------------

// const digits = [1, 2, 3, 4, 5]
// console.log(digits)

// const fruitBasket = ["Banana", "Apple", "Orange"]
// console.log(fruitBasket)

// fruitBasket.push("Mango");
// console.log(fruitBasket)

// fruitBasket.pop();
// console.log(fruitBasket)

// fruitBasket.unshift("Mango")
// console.log(fruitBasket)

// fruitBasket.shift()
// console.log(fruitBasket)

// fruitBasket.map(fruit=> console.log(fruit))

// const filteredFruit = fruitBasket.filter(fruit=> fruit === "Banana");

// console.log(filteredFruit)

// const singleValue = digits.reduce((accm, current)=> accm + current, 0)
// console.log(singleValue)



//---------ARRAY OF OBJECTS------

const employers = [
    {
       id: 1,
       name: "Employer_1" 
    },
    {
       id: 2,
       name: "Employer_2" 
    },
    {
       id: 3,
       name: "Employer_3" 
    },
]

// employers.map(employer => console.log(employer));

const filteredEmployee = employers.filter(employer => employer.id === 2);

console.log(filteredEmployee)

