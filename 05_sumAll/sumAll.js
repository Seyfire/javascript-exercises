const sumAll = function(num1, num2) {

    let numbersToBeAdded = [];
    let startNum = 0;
    let endNum = 0;

    if ((num1 < 0 || num2 < 0) ||
       (!Number.isInteger( num1 + num2 ))) {
        return 'ERROR';
    }

    if (num1 < num2) {
        startNum = num1;
        endNum = num2;
    } else {
        startNum = num2;
        endNum = num1;
    }

    // creates an array of ints with provided parameters
    for (let i = startNum; i <= endNum; i++) {
        numbersToBeAdded.push(i);
    }

    let sum = 0;

    // iterates thru array and adds each element to sum
    numbersToBeAdded.forEach(function (element) {
        sum += element;
    });

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
