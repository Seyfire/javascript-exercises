const repeatString = function(string, num) {

	// error handling if num is negative
	if (num < 0) {
		return 'ERROR';
	}

	let newString = '';

	for ( let i = 0; i < num; i++) {
		newString = newString.concat(string);
	}

	return newString;
};

// Do not edit below this line
module.exports = repeatString;
