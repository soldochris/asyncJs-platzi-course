//First Example
function sum(num1, num2){
	return num1 + num2;
};

function calc(num1, num2, callback){
	return callback(num1, num2);
};

//Second Example
function greet(name){
	console.log(`Hi ${name}`);
}

setTimeout(greet, 2000, "chris");
