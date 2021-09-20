function printNumber (a, b) {
    let timerId = setInterval(() => {
        console.log(a)
        if (a === b) {
            clearInterval(timerId)
        }
        a++
    }, 1000)
}

printNumber(5, 15)