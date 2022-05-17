let myArray = [1, 9, 4, 2, 8, 4, 7, 2, 1, 5, 4, 4, 3, 3, 8, 9];
for(let i = 0; i < 16; i++){
    console.log (myArray[i]);
}

let sum = 0;
for(let i = 0; i < 16; i++){
    sum = sum + myArray[i];
}
console.log( "the sum is " + sum );

let count = 0;
for(let i = 0; i < 16; i++){
    if( myArray[i] === 4){
        count ++;
    }
}
console.log( " Number 4 appears for " + count + " times" );

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


for(let i = 0; i < 16; i++){
    if( mySecondArray[i] > 4){
        mySecondArray[i]=[ mySecondArray[i] , mySecondArray[i]-1 , mySecondArray[i]-2];
    }
    else{
        mySecondArray[i]=[ mySecondArray[i] , mySecondArray[i]+1 , mySecondArray[i]+2];
    }
}
console.log (mySecondArray);

x = prompt ("Pick a number between 1 and 16");
for (let i= 0; i < 16; i++){
    if (i === x ){
        console.log ( mySecondArray[i] );
    }
}