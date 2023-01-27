function createDoubleArray(largo) {
    var array = [1];
    for (var i = 1; i < largo; i++) {
        array[i] = array[i - 1] * 2;
    }
    return array;
}

var myArray = createDoubleArray(6);
console.log(myArray);
