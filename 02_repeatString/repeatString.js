const repeatString = function (string, num) {
  if (num < 0) {
    return "ERROR";
  } else {
    let str = "";
    for (let i = 1; i <= num; i++) {
      str += string;
    }
    return str;
  }
};

// Do not edit below this line
module.exports = repeatString;
