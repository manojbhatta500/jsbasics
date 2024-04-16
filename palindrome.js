

function isPalindrome(initialText){
    const iA = initialText.split('');
    console.log(`initial Text: ${iA}`);
    const reverseArray = iA.reverse();
    const reverseString = reverseArray.join('');
    console.log(`reversed string: ${reverseString}`);
}

isPalindrome('hello');






const a = [1,2,3,4,5,6,7];

a.forEach(function(e){
    console.log(e);
})



a.forEach((e)=>console.log(e));














// function isPalindrome(initialText){

//     const iA = initialText.split();
//     console.log(`initial Text: ${iA}`);
//     const reverseArray = iA.reverse();
//     const reverseString = reverseArray.join();
//     console.log(`reversed array : ${reverseArray}`);
// }


// isPalindrome('hello');