let result = sum(6)(3);
console.log(result)

function sum(a) {
    return function (b) {
        return a + b;
    }
}