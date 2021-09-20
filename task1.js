let arr = [1, 2, 3, 4, 5, 0];
countEvenAndOdd(arr);

function countEvenAndOdd(arr) {
    let oddCount = 0;
    let evenCount = 0;

    for (let i=0; i < arr.length; i++) {
        if (arr[i] === 0) {
            console.log(0);
        } else if (arr[i]%2 === 1) {
            oddCount++;
        } else if (arr[i]%2 === 0) {
            evenCount++;
        }
    }
    console.log("Нечетные - " + oddCount);
    console.log("Четные - " + evenCount);
}