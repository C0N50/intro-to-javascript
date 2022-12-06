console.log('js');

// declare and initialize a variable
/*
let testVar = 9;
console.log(testVar);
console.log( 'the value of testVar is', testVar);
testVar = 55;
console.log( 'the value of testVar is', testVar);
testVar = 'some text is';
console.log( 'the value of testVar is', testVar);


let motorcycles = 9;
let cars = 0;
let vehicles = motorcycles + cars;

console.log('cars', cars);
console.log('bikes', motorcycles);
console.log('total vehicles', vehicles);

console.log('had to put the soft tail in the garage');
motorcycles--;
vehicles = motorcycles + cars;

console.log('cars', cars);
console.log('bikes', motorcycles)
console.log('total vehicles', vehicles);
console.log('missed the bike so I bought 2 lambos');
cars += 2;
vehicles = motorcycles + cars;

console.log('cars', cars);
console.log('bikes', motorcycles)
console.log('total vehicles', vehicles);
console.log('wanted a Jetta, so I got one');
cars++;
vehicles = motorcycles + cars;

console.log('sold 3 bikes');
motorcycles -= 3;
vehicles = motorcycles + cars;

console.log('cars', cars);
console.log('bikes', motorcycles)
console.log('total vehicles', vehicles);

console.log('got the soft tail back from the garage, souped up!');
motorcycles++;
vehicles = motorcycles + cars;

console.log('cars', cars);
console.log('bikes', motorcycles)
console.log('total vehicles', vehicles); 

let catName = 'Squiggle';
let catAge = 3;


console.log (catName);
// concatenation with comma for console (comma only works in console.log)
console.log ('The name of the cat is', catName + '.');
console.log ('The age of the cat is', catAge + '.');

//concatenate text with "+"
let sentence = 'This is a sentence about the cat named ' + catName + '.';
console.log (sentence);

sentence = 'The cat is ' + catAge + ' years old.';
console.log (sentence);

catName = 'Ruby';
catAge = 14;

sentence = 'Later on, a different cat is ' + catAge + ' years old and is named ' + catName +'.';

console.log (sentence);
*/

// road trip planner
let seatsInCar = 7;
let passengers = 5;
let infants = 1;
let infantSeats = 1;
let fullTank = true;

// check that there is enough room for everyone

if(seatsInCar >= passengers && infantSeats >= infants){
    console.log('Ready for the road trip.');
    if(fullTank) {
        console.log ('Ready to hit the highway.');
    }
    else {
        console.log ('Need Gas.');
    }
} //end enough seats
else {
    console.log ('Not ready. Check Car, passengers, and equipment');
} // end not enough seats