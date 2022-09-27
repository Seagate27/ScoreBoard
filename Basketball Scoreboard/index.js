let home = document.getElementById('homeScore')
let guest = document.getElementById('guestScore')
let homeScore = 0
let guestScore = 0

function plusOne() {
    homeScore += 1
    home.textContent = homeScore
}
function plusTwo() {
    homeScore += 2
    home.textContent = homeScore
}
function plusThree() {
    homeScore += 3
    home.textContent = homeScore
}

function addOne() {
    guestScore += 1
    guest.textContent = guestScore
}
function addTwo() {
    guestScore += 2
    guest.textContent = guestScore
}
function addThree() {
    guestScore += 3
    guest.textContent = guestScore
}

function newGame() {
    guest.textContent = 0
    home.textContent = 0
    homeScore = 0
    guestScore = 0
}