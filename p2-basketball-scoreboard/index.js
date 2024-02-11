let addHomeButton1 = document.getElementById("add-homepoints-btn1")
let addHomeButton2 = document.getElementById("add-homepoints-btn2")
let addHomeButton3 = document.getElementById("add-homepoints-btn3")
let addGuestButton1 = document.getElementById("add-guestpoints-btn1")
let addGuestButton2 = document.getElementById("add-guestpoints-btn2")
let addGuestButton3 = document.getElementById("add-guestpoints-btn3")
let homePoints = document.getElementById("home-points")
let guestPoints = document.getElementById("guest-points")

let defaultHomePoints = 0
let defaultGuestPoints = 0

function addOneHomePoint() {
    defaultHomePoints += 1
    homePoints.textContent = defaultHomePoints
}
function addTwoHomePoints() {
    defaultHomePoints += 2
    homePoints.textContent = defaultHomePoints
}
function addThreeHomePoints() {
    defaultHomePoints += 3
    homePoints.textContent = defaultHomePoints
}
function addOneGuestPoint() {
    defaultGuestPoints += 1
    homePoints.textContent = defaultGuestPoints
}
function addTwoGuestPoints() {
    defaultGuestPoints += 1
    homePoints.textContent = defaultGuestPoints
}
function addThreeGuestPoints() {
    defaultGuestPoints += 3
    homePoints.textContent = defaultGuestPoints
}