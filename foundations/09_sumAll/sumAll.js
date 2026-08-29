const sumAll = function(a, b) {
    //ensure a and b are valid numbers
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR"
    if (a < 0 || b < 0) return "ERROR"
    //figure out whether a or b is smaller
    const low = (a < b) ? a : b;
    const high = (a < b) ? b : a;

    let sum = 0;
    for (let i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
