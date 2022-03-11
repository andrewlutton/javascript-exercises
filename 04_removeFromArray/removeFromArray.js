const removeFromArray = function() {
    let argArray = arguments[0];
    for (i = arguments.length-1; i > 0; i--) {
        for (j of argArray){
            if (j === arguments[i]) {
                const index = argArray.indexOf(j);
                argArray.splice(index, 1);
            }
        }
    }
    return argArray;
};

// Do not edit below this line
module.exports = removeFromArray;
