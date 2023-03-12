function writeCards(names, event) {
    const arr = [];
    for (let y=0; y<names.length; y++) {
        arr.push(`Thank you, ${names[y]}, for the wonderful surprise gift!`);
    }
    return arr;
}
function countDown() {
    let count = 10;
    while (count >= 0) {
        console.log(count--);
    }
}

console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
countDown();