const convertToCelsius = function(temp) {
  let convertedTemp = ( (temp - 32) * 5/9 );
  if ( Number.isInteger(convertedTemp) ) {
    return convertedTemp;
  } else {
    return Math.round( convertedTemp * 10 ) / 10;
  }
};

const convertToFahrenheit = function(temp) {
  let convertedTemp = (temp * 9/5 + 32);
  if ( Number.isInteger(convertedTemp) ) {
    return convertedTemp;
  } else {
    return Math.round( convertedTemp * 10 ) / 10;
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
