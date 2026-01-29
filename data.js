<script>
/* ===============================
   DEFAULT DEMO MATCHES
   (You can delete these later)
================================ */
const defaultMatches = [
  {
    id: 1,
    team1: "India",
    team2: "Australia",
    date: "20 July 2026",
    venue: "Mumbai",
    status: "Upcoming",
    runs: 0,
    wickets: 0,
    overs: 0
  },
  {
    id: 2,
    team1: "England",
    team2: "Pakistan",
    date: "25 July 2026",
    venue: "London",
    status: "Upcoming",
    runs: 0,
    wickets: 0,
    overs: 0
  }
];

/* ===============================
   LOCAL STORAGE HELPERS
================================ */
function getSavedMatches() {
  return JSON.parse(localStorage.getItem("matches")) || [];
}

function saveMatch(match) {
  const matches = getSavedMatches();
  matches.push(match);
  localStorage.setItem("matches", JSON.stringify(matches));
}

function getAllMatches() {
  return [...defaultMatches, ...getSavedMatches()];
}

function getMatchById(id) {
  return getAllMatches().find(match => match.id == id);
}

function updateMatch(updatedMatch) {
  let matches = getSavedMatches();
  matches = matches.map(m => m.id == updatedMatch.id ? updatedMatch : m);
  localStorage.setItem("matches",