const reverseString = function(str) {
  let newString = "";
  let arrString = [];

  // convert string to reversed array
  for (let i = 0; i < str.length; i++) {
      arrString.unshift(str.at(i));
    }
  
  // convert array back into string
  for (let i = 0; i < arrString.length; i++) {
      newString += arrString[i]; 
    }
  
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
