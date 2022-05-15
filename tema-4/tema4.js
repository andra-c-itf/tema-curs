let myArray = [1, 9, 4, 2, 8, 4, 7, 2, 1, 5, 4, 4, 3, 3, 8, 9];
for(let i = 0; i < 16; i++){
    console.log (myArray[i]);
}

let sum = 0;
for(let i = 0; i < 16; i++){
    sum = sum + myArray[i];
}
console.log(sum);

let count = 0;
for(let i = 0; i < 16; i++){
    if( myArray[i] === 4){
        count ++;
    }
}
console.log( count );

let mySecondArray = [];
for(let i = 0; i < 16; i++){
    mySecondArray[i] = myArray[i] - 1;
}
console.log( mySecondArray);

for(let i = 0; i < 16; i++){
    if( myArray[i] === myArray[i+1] - 1){
        console.log( myArray[i], myArray [i+1]);
    }
}

let n = prompt ("Enter the index:");
let a = 0;
for(let i = 0; i < 16; i++){
    if( i === n ){
       a = myArray [i];
    }
}
console.log(a);
