console.clear();

const getSum = (...args) => {
	let sum = 0;
	for (let i = 0; i < args.length; i++) {
		sum += args[i];
	}
	return sum;
};

console.log(`Sum of 1, 2, 3, 4, 5 is ${getSum(1, 2, 3, 4, 5)}`);

console.log(`Sum of 23, 13, 112 is ${getSum(23, 13, 112)}`);