let n = 311;
isSimpleNumber(n);

function isSimpleNumber(n) {
    let isSimple = true;
    if (n > 1000) {
        console.log("Данные не верны.")
    }
    for (let i=2; i<n; i++) {
        if (n%i === 0) {
            isSimple = false;
        }
    }
    if (isSimple) {
        console.log("Число простое.")
    } else {
        console.log("Число не простое.")
    }
}