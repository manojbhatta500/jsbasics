let message = 'this is great and we will be great';


const messageArray = message.split(" ");


console.log(messageArray);


for(let i = 0;i<messageArray.length;i++){
    console.log(`${i+1}. ${messageArray[i]}`);
}

console.log(messageArray.length);



// split method will split the string into an array with what is provided in (" ")


console.log('message  2 part');


const message2 = 'heyManojheyramheyshyamheygyan';

const message2Process = message2.split('');




console.log(message2Process);
console.log(message2Process.length);






// split exercises






















console.log('var variable start');

const var1 = 'this is perfect example';
const var2 = 'this is another example';


let storeVar1 = var1.split('');
console.log(storeVar1);

storeVar1 = var1.split(' ');
console.log(storeVar1);


storeVar1 = var1.split('this');
console.log(storeVar1);


console.log('this is another example');

storeVar1 = var1.split('is').filter(Boolean);
console.log(storeVar1);



// clear


let variable1 = 'hello';

const arrayvar1 = variable1.split('');




console.log(arrayvar1);
console.log(arrayvar1[0]);
console.log(arrayvar1[1]);
console.log(arrayvar1[2]);
console.log(arrayvar1[3]);


// new type of array

console.log('this is new array');
const checker = 'hey';
const living = ['change',11,checker.includes('h')];
console.log(living);
console.log(typeof living[0]);


// array slicing


let arrSlice = [1,'hello',true,'boolean',2,3,4];


console.log(`array list = ${arrSlice}`)

console.log(arrSlice.slice(1));
console.log(`array list = ${arrSlice}`)


console.log(arrSlice.slice(2));

// filling an array with loop and access them 



let numArray = [];

for(let a = 0;a<100;a++){
    numArray.push(a);
    console.log('pussed '+ a +'into the numArray');
}

console.log(numArray);


console.log(numArray.length);
console.log(numArray.length - 1);

let lengthArray = numArray.length;
// < lengthArray

for (let i = 0; i <= numArray.length; i++) {
    numArray.pop();
    
    // console.log(`lenght of array = ${numArray.length}`);
    // console.log(`before value of a= ${i}`);

    // i = 0;
    // console.log(`after value of a= ${i}`);

 
    console.log('popped from the numArray');
}

console.log('this should work')
console.log(numArray);



// slicing

console.log('slicing part start');



let arrayForSlicing = [1,2,3,4,5,67,8,8,9];


console.log(arrayForSlicing.slice(2));


console.log(arrayForSlicing.sort());

console.log(arrayForSlicing.reverse());

















