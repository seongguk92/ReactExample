// #1.4 Spread Operator
const days = ["Mon", "Tue", "Wed"];
const otherDays = ["Thu", "Fri", "Sat"];
let allDays = [...days, ...otherDays, "Sun"];


console.log(allDays);

const ob = {
    first: "hi",
    second: "hello"
}

const ab = {
    thrid: "bye bye"
}

const two = { ...ob, ...ab };
console.log(two);

const shi = (somthing, arg) => console.log(...args)