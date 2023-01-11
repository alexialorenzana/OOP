// Encapsulation

// `Person` Class has two methods, `name`, and `age`
class Person {
constructor(private name: string, private age: number) {} 
//these methods are both private and can only be accesed by `person` class 

introduce(): void{
console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
}
}

// Object of the `Person` class
const person = new Person("Alexia", 23);

// Access the properties of the object
console.log(person.name); // error: Property 'name' is private and can only be accesible within class `person`

console.log(person.age); // error: Property 'age' is private and can only be accesible within class `person`

// call the Introduce method of the object
person.introduce(); // prints "Hi, my name is Alexia and I am 23 years old. "

  
