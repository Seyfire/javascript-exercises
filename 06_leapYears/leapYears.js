const leapYears = function(year) {
  // returns true if leapyear, false otherwise

  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true;
      }
      return false;
    }
      return true;
  } else {
    return false;
  }
};
  // check if year is divisible by 4
  //   if so: check if year is divisible by 400 and not 100
  //      if it is: return false
  //      else: return true
  //    return true
  //  otherwise: return false

// Leap years are divisible by 4, except for years divisible by 100 unless
// they are divisible by 400.

// Do not edit below this line
module.exports = leapYears;
