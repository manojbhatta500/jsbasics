function stringChecker (a){
    console.log(`type of a is ${typeof a}`);
   try{
    if(a.length ==0){
        return 'the length checeker is ' + a.length;
    }else{
        return `you are what ${a} and length :`+ a.length; ;
    }
   }catch(e){
    return 'you have not sent an string ';
   }
}


const result = stringChecker('manoj bhatta');

console.log(result);



