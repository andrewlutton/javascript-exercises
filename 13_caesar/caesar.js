const caesar = function (str, shift) {
    // const re = /^[A-Za-z]/g;
    const strArr = str.split("")

    if (shift < 0) { shift = (shift % 26) + 26 };

    const shiftMap = strArr.map((char) => {
        let charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) {
            charCode = (charCode - 65 + shift) % 26 + 65;
        } else if (charCode >= 97 && charCode <= 122) {
            charCode = (charCode - 97 + shift) % 26 + 97;
        }
        return String.fromCharCode(charCode);
    });
    return shiftMap.join("")
}
    ;

// Do not edit below this line
module.exports = caesar;
