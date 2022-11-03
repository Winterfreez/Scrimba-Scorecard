let homeScore = 0;
let guestScore = 0;
let homeEl = document.getElementById("homeScore");
let guestEl = document.getElementById("guestScore");

// Home Functions
function homeAdd1() {
  homeScore += 1;
  homeEl.textContent = homeScore;
}

function homeAdd2() {
  homeScore += 2;
  homeEl.textContent = homeScore;
}

function homeAdd3() {
  homeScore += 3;
  homeEl.textContent = homeScore;
}

// Guest Functions
function guestAdd1() {
  guestScore += 1;
  guestEl.textContent = guestScore;
}

function guestAdd2() {
  guestScore += 2;
  guestEl.textContent = guestScore;
}

function guestAdd3() {
  guestScore += 3;
  guestEl.textContent = guestScore;
}

// Reset Function
function reset() {
  homeScore = 0;
  guestScore = 0;
  homeEl.textContent = homeScore;
  guestEl.textContent = guestScore;
}
