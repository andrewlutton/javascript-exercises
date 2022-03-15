const palindromes = function (str) {
    const re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, "");
    reverseStr = str.split("").reverse().join("");
    return str === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
