const repeatString = function (str, repeat) {
    returnString = ""
    if (repeat < 0) {
        return "ERROR"
    } else {
        while (repeat > 0) {
            returnString += str;
            repeat--
        }
        return returnString
    }
};

// Do not edit below this line
module.exports = repeatString;
