const sumAll = function (num1, num2) {
    if (typeof(num1) != "number" || typeof(num2) != "number") {
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";    
    } else {
        let sum = 0;
        const numArray = [num1, num2].sort();

        i = numArray[0];
        while (i <= numArray[1]) {
            sum += i;
            i++;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
