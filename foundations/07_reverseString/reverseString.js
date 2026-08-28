const reverseString = function(string) {
    let newString = ""
    const stringArr = string.split("");
    for (let i = string.length - 1; i >= 0; i--) { //loop from end down
        newString += stringArr[i]
    }
    return newString;

    //alternate solution, convert to array, use arrayReverse
    //return string.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
