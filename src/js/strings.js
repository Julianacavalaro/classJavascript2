const str1 = "Hello, World";
const str2 = "Hello " + "World";

console.log(str1);
console.log(str2);

console.log(str1.toLocaleUpperCase);
console.log(str2.toLocaleLowerCase);
console.log(str1.indexOf("World"));
console.log(str1.replace("World", "UFA.BC"));
console.log(str1.split(","));
console.log(str1.charAt(2));

const firstName = "João";
const idade = 20;


const template = `Hello, ${firstName}. You are ${idade} years old.`

console.log(template);