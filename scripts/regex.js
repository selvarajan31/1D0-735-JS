const str = "We will, we will rock you";

//str.match(regex)
let result = str.match(/we/ig);   // i-case insensitive; g-global search
alert(result);

result = str.match(/we/i);
alert(`index: ${result.index}`) //only works without g flag
alert(result.input)

//str.replace(regex, replacement)
const regexGI = /we/gi;
const regexI = /we/i;

result = str.replace(regexGI,"I");
alert(`regexGI: ${result}`)

result = str.replace(regexI,"I");
alert(`regexI: ${result}`)

//Special Synmbol Combinations
// $& - matched string + replacement is inserted
result = str.replace(regexGI,"$& all");
alert(`regexI and $&: ${result}`);

//$` inserts replacement text before matched string
result = str.replace(regexGI,"$`"); //need to know how it works
alert("regexI and $`: "+ result);