const fibonacci = function (seq) {
    let fibArr = [1, 1];
    let i = 1;
    seqNum = +seq
    if (seqNum > 0) {
        while (i < seqNum - 1) {
            i++;
            fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
        }
        return fibArr[seqNum - 1];
    } else {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
