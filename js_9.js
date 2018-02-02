var inputString = "test jhjhkhk dfsf fsf sdf sdf test d d dsfwg test ujgg gjhfj";
var searchString = "test";
var replaceString = "TTTT";
splitedString = (inputString.split(" "));
for(let i in splitedString){
    if (splitedString[i] === searchString){
        splitedString[i] = replaceString;
    }
}
outputString = splitedString.join(' ');
console.log(outputString);