// #1.8 foreach includes push
let posts = ["Hi", "Hello", "Bye"];
if (!posts.includes("New")) {
    posts.push("New");
}

posts.forEach(post => console.log(post));
const isHello = posts.includes("Hello");
console.log(isHello);