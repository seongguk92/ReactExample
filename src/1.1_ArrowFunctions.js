// 1.1_ArrowFunctions
// function sayHello(name = "Nicolas") {
//     return "Hello " + name;
// }

// const nitpick = sayHello("nitpick");
// console.log(nitpick);



// const sayHello = (human = "Human") => "Hello " + human;
// const nitpick = sayHello();
// console.log(nitpick);

const button = document.querySelector("button");

// const handleClick = (event) => console.log(event);
// button.addEventListener("click", handleClick);

button.addEventListener("click", event => console.log(event));