let myArray = [1, 9, 4, 2, 8, 4, 7, 2, 1, 5, 4, 4, 3, 3, 8, 9];
for(let i = 0; i < 16; i++){
    console.log (myArray[i]);
}

let sum = 0;
for(let i = 0; i < 16; i++){
    sum = sum + myArray[i];
}
console.log( "The sum of the elements is " + sum );

let count = 0;
for(let i = 0; i < 16; i++){
    if( myArray[i] === 4){
        count ++;
    }
}
console.log( "Number 4 appears for " + count + " times" );

let mySecondArray = [1, 9, 4, 2, 8, 4, 7, 2, 1, 5, 4, 4, 3, 3, 8, 9];
for(let i = 0; i < 16; i++){
    mySecondArray[i] = myArray[i] - 1;
}
console.log ("The second array is ");
console.log (mySecondArray);

for( let i = 0; i < 16; i++){
    if( myArray[i] === myArray [i+1]){
        console.log ("The numer " + myArray[i] + " appears consecutive on positions " + i , i+1);
    }
}

let copyOfMySecondArray = mySecondArray.slice();

for(let i = 0; i < 16; i++){
    if( mySecondArray[i] > 4){
        mySecondArray[i]=[ mySecondArray[i] , mySecondArray[i]-1 , mySecondArray[i]-2];
    }
    else{
        mySecondArray[i]=[ mySecondArray[i] , mySecondArray[i]+1 , mySecondArray[i]+2];
    }
}
console.log ("I modified the string 'mySecondArray' so that each element in this string is, in turn, a string of 3 elements. If the number of an element in the string was less than or equal to 4, then the new element will contain a string that starts from the initial number and increases by 1. If the number of an element in the string was greater than 4, then the new string starts from to the initial number and decreases by 1.");
console.log(mySecondArray);

