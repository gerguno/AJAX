"use strict";

// Arrow functions
var count = (a,b) => a + b;
var minus = x => 10 - x;
var simple = () => alert('Sraka motyka');
var log = (text) => console.log(text);

log(count(1,2));
log(minus(8));




//Let 
if (true) {
	let x = 5;
}
// console.log(x);




// Inline variable in String
var name = "Oles";
let str = `Привіт ${name}. Ми в ${new Date().getFullYear()} році`;
console.log(str);



// Prototype VS Class (no difference)
// Class inheritance ++
function Person(name, surname) {
	this.name = name;
	this.surname = surname;
}

Person.prototype.species = "human";

let Olesko = new Person('Oles', 'Gergun');
log(Olesko);



class Human {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
		this.kind = 'human';
	}

	timer() {
		setTimeout(() => {
			console.log(this.name);
		}, 1000);
	}
}

class Individual extends Human {
	constructor(name, surname) {
		super(name, surname);
		this.kind = 'individual';
	}
}

let Nastya = new Human('Nastya', 'Gergun');
let Les = new Individual('Oles', 'Gergun');

log(Nastya);
log(Les);
Les.timer();