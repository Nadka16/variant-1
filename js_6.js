let inputString = "test jhjhkhk dfsf fsf sdf sdf test d d dsfwg test ujgg gjhfj";
let searchString = "test";
let count = 0;
splitedString = (inputString.split(" "));
for(let word of splitedString){
    if (word === searchString){
        count++;
    }
}
console.log(count);