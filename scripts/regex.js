let str = "We will, we will rock you";
const result = str.match(/we/ig);   // i-case insensitive; g-global search
alert(result);
alert(result.index)