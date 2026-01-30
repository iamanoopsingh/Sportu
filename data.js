// ---------- STORAGE HELPERS ----------
function getTournaments() {
  return JSON.parse(localStorage.getItem("tournaments")) || [];
}

function saveTournaments(tournaments) {
  localStorage.setItem("tournaments", JSON.stringify(tournaments));
}

// ---------- CREATE TOURNAMENT ----------
function addTournament(tournament) {
  const tournaments = getTournaments();
  tournaments.push(tournament);
  saveTournaments(tournaments);
}