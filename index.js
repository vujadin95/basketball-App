let homePointsEl = document.getElementById("home-points");
let guestPointsEl = document.getElementById("guest-points");
let homePoints = 0;
let guestPoints = 0;

// points for HOME
function increaseByOneHomePoint() {
  homePoints += 1;
  homePointsEl.textContent = homePoints;
}
function increaseByTwoHomePoint() {
  homePoints += 2;
  homePointsEl.textContent = homePoints;
}
function increaseByThreeHomePoint() {
  homePoints += 3;
  homePointsEl.textContent = homePoints;
}
// points for GUESTS
function increaseByOneGuestPoint() {
  guestPoints += 1;
  guestPointsEl.textContent = guestPoints;
}
function increaseByTwoGuestPoint() {
  guestPoints += 2;
  guestPointsEl.textContent = guestPoints;
}
function increaseByThreeGuestPoint() {
  guestPoints += 3;
  guestPointsEl.textContent = guestPoints;
}

// reset GAME
function reset() {
  homePoints = 0;
  guestPoints = 0;
  homePointsEl.textContent = homePoints;
  guestPointsEl.textContent = guestPoints;
}
