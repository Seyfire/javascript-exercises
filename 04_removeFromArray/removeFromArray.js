const removeFromArray = function(array) {
    let filteredArray = array;

    for (let i = 1; i < arguments.length; i++)  {
        let filterNum = arguments[i];
        filteredArray = filteredArray.filter(function (num) {
            return num !== filterNum; 
        });
    }

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
