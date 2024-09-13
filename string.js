
function stringHasA(value) {
    var aCount = 0;
    for (let i = 0; i < value.length; i++) {
        var element = value[i];
        if (element === 'a' || element === 'A') {
            aCount++;
        }
    }
    return "A quantidade de letras 'A' na string é: " + aCount;
}

console.log(stringHasA("abracadabra"));  //5
console.log(stringHasA("vento")); //0
