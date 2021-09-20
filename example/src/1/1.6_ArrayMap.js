// #1.6 Array map
const days = ["Mon", "Tue", "Wed", "Thurs", "Fri"];

//const add = day => `${day} !!`;

const smilingDays = days.map((day, index) => `${index + 1} ${day}!!`);

console.log(smilingDays);