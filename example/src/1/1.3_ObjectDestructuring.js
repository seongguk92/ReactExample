// #1.3 Object Destructuring
const human = {
    name: "Nit",
    lastName: "Pick",
    nationality: "Wish i was korean",
    favFood: {
        breakfast: "Sang",
        lunch: "Doncas",
        dinner: "Sang + Doncas"
    }
}

//const nmae = human.name; before

const { name, lastName, nationality: difName, favFood: { dinner, breakfast, lunch } } = human;
console.log(name, lastName, difName, dinner, breakfast, lunch)//;