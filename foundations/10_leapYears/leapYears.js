const leapYears = function(year) {
    //if divisible by 4
        //check if divisible by 100
            //if divisible by 400 - leap year
    if (!(year % 4 === 0)) return false; 
    
    if ((year % 100 === 0) && !(year % 400 === 0)) {
        return false;
    } else {
        return true;
    }

};

// Do not edit below this line
module.exports = leapYears;
