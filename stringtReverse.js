//in place string reverse
function stringReverse(string){
    let charArray = string.split('');

    let leftIndex = 0;
    let rightIndex = charArray.length - 1;

    while(leftIndex < rightIndex){
        let temp = charArray[leftIndex];
        charArray[leftIndex] = charArray[rightIndex];
        charArray[rightIndex]= temp;

        leftIndex++;
        rightIndex--;
    }
    return charArray.join('');
}

console.log(stringReverse('caramelo')); // olemarac