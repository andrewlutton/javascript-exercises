const reverseString = function(str) {
    strArray = str.split("");
    let strReverse = ""
    for (i = strArray.length-1; i >= 0; i--) {
        strReverse += strArray[i];
    }
    return strReverse
};

// Do not edit below this line
module.exports = reverseString;
