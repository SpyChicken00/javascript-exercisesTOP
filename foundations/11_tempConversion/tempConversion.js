const convertToCelsius = function(Fahrenheit) {
  //(f-32) / 1.8
  //toFixed(1) returns string, need to parse to a float!!
  //return parseFloat(((Fahrenheit - 32) / 1.8).toFixed(1))

  const c = ((Fahrenheit - 32) / 1.8)
  return Math.round(c * 10) / 10
};

const convertToFahrenheit = function(Celsius) {
  //(c * 1.8) + 32
  //toFixed(1) returns string, need to parse to a float!!
  //return parseFloat(((Celsius * 1.8) + 32).toFixed(1))

  const f = ((Celsius * 1.8) + 32)
  return Math.round(f * 10) / 10
};

//Number.toFixed(1) to round to one decimal place

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
