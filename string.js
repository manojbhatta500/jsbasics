console.log('this is string');
// simple string
console.log("this is also a string");
// varirables
let firstName = 'manoj';
let lastname = 'bhatta';
console.log(firstName + lastname);
// combining variable
let fullname = `${firstName} ${lastname}`;
let fullname2 = firstName + ' ' + lastname;
console.log(fullname);
console.log(fullname2);
// using diffrent tricks
console.log(firstName +" "+lastname);
console.log(`${firstName} ${lastname}`);





// string manupultion



let message = "This is message sent from God";

let port = '500';

// generates the upper case
console.log(message.toUpperCase());
// generates the lower case
console.log(message.toLowerCase());

//  storing them in var 

let upperCaseMessage = message.toUpperCase();
let lowerCaseMessage = message.toLowerCase();

console.log(upperCaseMessage);

console.log(lowerCaseMessage);



//  checking if it includes the letter r not
// ucm, lcm , msg, port 

let containsR = upperCaseMessage.includes('i');

let containsr = lowerCaseMessage.includes('i');


console.log(containsR);
console.log(containsr);





const ram = 'ram'


console.log(ram.includes('r'));


const longMessage = 'asdsqakjnk nkjsdankjsnd asas dwpwq knklasndkf';


console.log(longMessage.includes('sak',2));


console.log(longMessage.includes('ds',7));





// testing include


const nums = "0123456789";


console.log(nums.includes('3',4));




//  for loop in strings


const messageLoop = 'i will learn javascript and become great programmer  ';


console.log(messageLoop.charAt(0).includes('i'));

let words = 0;

for(let i = 0; i<= messageLoop.length -1;i++){
    console.log(`${i+1} = ${messageLoop.charAt(i)}`);

    if(messageLoop.charAt(i) == 'j'){
        words = words + 1;
        console.log('j  is for javaScript');
    }
    //  this will print in every loop
    console.log(words);
}
// this will only print at the end of loop
console.log(words);






// ok i have practised strings and their method 
// toUpperCase()
// toLowerCase()

// includes()
// includes('word',starting index of var);

// charAt()
// for loop 

// string basics is completed now 




