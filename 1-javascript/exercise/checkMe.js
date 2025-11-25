
let language = {
    name: 'JavaScript',
    officialName: 'ECMAScript',
    released: 1995,
    creator: 'Brendan Eich',
    company: 'Netscape'
}

console.log(language); // { name: 'JavaScript', ... }
console.log(language.officialName); // ECMAScript
// console.log(language.creater); // undefined
console.log(language.creator);


language.name = "TypeScript"; // String replacing object? JS don't care!
// Setting random properties on a String? (non-strict) JS don't care!
language.released = 2012;
language.creator = 'Anders Hejlsberg';
language.company = 'Microsoft';

console.log(language); // TypeScript
console.log(language.released); // undefined
// console.lgo(language.company); // TypeError: console.lgo is not a function
console.log(language.company);
console.log(language.officialName); // undefined


