module.exports = function reverse (n) {
    let nToStr = n.toString().split('');
    if (nToStr[0] === '-') {nToStr.shift();}
    let revNum = nToStr.reverse().join("");
    return revNum;
};
