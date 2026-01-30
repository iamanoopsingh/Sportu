function getMatches() {
  return JSON.parse(localStorage.getItem("matches")) || [];
}

function saveMatches(matches) {
  localStorage.setItem("matches", JSON.stringify(matches));
}

function getTournaments() {
  return JSON.parse(localStorage.getItem("tournaments")) || [];
}

function saveTournaments(tournaments) {
  localStorage.setItem("tournaments", JSON.stringify(tournaments));
}