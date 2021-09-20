// #1.5 Classes
class Human {
    constructor(name, lastName) {
        this.name = name;
        this.lastName = lastName;
    }
}

class Baby extends Human {
    cry() {
        console.log("bbbbbbbbbbbbbbbb");
    }
    sayName() {
        console.log(`My name is ${this.name}`);
    }
}

const A = new Human("A", "a");
console.log(A);


const baby = new Baby("B", "b");
console.log(baby);
console.log(baby.cry());
console.log(baby.sayName());