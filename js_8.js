inputString = "test jhjhkhk dfsf fsf sdf sdf test d d dsfwg test ujgg gjhfj";
splitedString = (inputString.split(" ").sort(
    function(a, b) {
        return a.length - b.length;
    }
));
outputString = splitedString.join(' ');
console.log(outputString);