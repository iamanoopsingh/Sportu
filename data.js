<script>
/* ---------- DEFAULT DEMO MATCHES ---------- */
const matches = [
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

/* ---------- LOCAL STORAGE ---------- */
function getSavedMatches() {
  return JSON.parse(localStorage.getItem("matches")) || [];
}

function saveMatch(match) {
  const existing = getSavedMatches();
  existing.push(match);
  localStorage.setItem("matches", JSON.stringify(existing));
}

function getAllMatches() {
  return [...matches, ...getSavedMatches()];
}

function getMatchById(id) {
  return getAllMatches().find(m => m.id == id);
}
</script>