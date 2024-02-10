// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countId = document.getElementById("count")
let saveId = document.getElementById("save")

let count = 0
function increment() {
    count += 1
    countId.innerText = count
}

function save() {
    let currentCount = count + " - "
    saveId.textContent += currentCount
    count = 0
    countId.innerText = count
}