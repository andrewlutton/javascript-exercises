const leapYears = function(year) {
    let leapYearFlag = false;
    if (year % 4 === 0 && year % 100 != 0 || year % 400 ===0) {
        leapYearFlag = true;
    }
    return leapYearFlag;
};

// Do not edit below this line
module.exports = leapYears;
