function* gen(){
	yield 1;
	yield 2;
	yield 3;
}

const g = gen();

//console.log(g.next().value);
//console.log(g.next().value);
//console.log(g.next().value);
//console.log(g.next().value);

function* iterate(array){
	for (let value of array){
		yield value;
	}
}

const myArray = ["chris", "carlos", "justin", "marcos", "eva", "juan"];

const iterator = iterate(myArray);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
