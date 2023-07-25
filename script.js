function printNumbersWithDelay(number) {
    // console.log(number);
    let myDiv = document.getElementById("num");
    myDiv.innerHTML = number;

    if (number > 0) {
        number--;
        setTimeout(() => printNumbersWithDelay(number), 1000); // Delay of 1000 milliseconds (1 second)
    } else {
        var str = "HAPPY INDEPENDENCE DAY"
        independenceWishes(str);
    }

}

function independenceWishes(str) {
    var number = str;
    let myDiv = document.getElementById("num");
    myDiv.style.color = "blue";
    myDiv.innerHTML = number;
}

var looplength = Number(10);
printNumbersWithDelay(looplength);