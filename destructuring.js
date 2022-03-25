/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [30, 20, 28];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];

let [john, mary, joe] = ages;

console.log(john, mary, joe)

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant"
}

let { mike, jill, alicia } = jobs;

console.log(mike, jill, alicia);

// Destructuring subsets
let languages = ["english", "french", "portuguese", "polish", "japamese"];
let [johnNative, johnSecondary] = languages;

let [, , maryNative, marySecondary] = languages;

console.log(johnNative, johnSecondary)
console.log(maryNative, marySecondary)

let languages2 = {
    fLanguage: "english",
    sLanguage: "french",
    tLanguage: "german",
    foLaguage: "japanese"
};

let { fLanguage, sLanguage } = languages2;
console.log(fLanguage, sLanguage);

// Using rest parameter syntax
let favoriteFods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarians",
    andrea: "steak"
};

let { brian, anna, ...rest } = favoriteFods;

console.log(brian, anna, rest)

