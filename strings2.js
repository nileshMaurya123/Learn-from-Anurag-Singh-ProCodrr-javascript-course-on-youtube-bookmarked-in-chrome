let myname = "My name is Anurag";
console.log(myname.length); // gives the length of string
console.log(myname.toUpperCase()); // changes the text of string in capital letters
console.log(myname.toLowerCase()); // changes the text of string in small letters

let anothermessage = "        Hi I am Nilesh.        ";
console.log(anothermessage.trim());

let finalmessage = "Hi I am Anurag";
console.log(finalmessage.indexOf("I"));

let animal = "cat";
console.log(animal.charAt(1));
console.log(animal.charCodeAt(2));
console.log(animal.includes("cat"));
console.log(animal.codePointAt(0));

const name = "W3Schools";
console.log((letter = name.at(2)));

let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ", text2);
console.log(text3);

let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); // Slice out a portion of a string from position 7 to position 13:
console.log(part);

let str = "Apple, Banana, Kiwi";
console.log(str.substring(7, 13)); // The substring() method extract a part of a string and returns the extracted parts in a new string.

let text4 = "     Hello World!     ";
let text5 = text4.trimStart();
console.log(text5);
