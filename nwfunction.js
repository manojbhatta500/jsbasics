function  changeIndex (a){
    console.log(a.length);
    for(let i =0;i<=a.length-1;i++){
        if(a[i]>a[i+1]){
            let c = a[i];
            a[i+1]=a[i];
            a[i]=c; 
           
        }

    }
   
    return a;
}

const bloc = [12,44,1122121,44,1,2,1221,1,2,2,2,234,];

const result1= changeIndex(bloc);

console.log(result1);


// i was just playing with java script