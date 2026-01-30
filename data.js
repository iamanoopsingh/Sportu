// ===== DATA STORAGE KEYS =====
const MATCH_KEY = "sportu_matches";
const TOURNAMENT_KEY = "sportu_tournaments";

// ===== MATCHES =====
function getMatches() {
  const raw = JSON.parse(localStorage.getItem(MATCH_KEY)) || [];

  // Normalize old/broken data
  return raw.map(m => ({
    teamA: m.teamA || m.team1 || "",
    teamB: m.teamB || m.team2 || "",
    date: m.date || "",
    location: m.location || m.venue || ""
  }));
}

function saveMatch(match) {
  const matches = getMatches();

  const cleanMatch = {
    teamA: match.teamA || match.team1 || "",
    teamB: match.teamB || match.team2 || "",
    date: match.date || "",
    location: match.location || match.venue || ""
  };

  matches.push(cleanMatch);
  localStorage.setItem(MATCH_KEY, JSON.stringify(matches));
}

// ===== TOURNAMENTS =====
function getTournaments() {
  return JSON.parse(localStorage.getItem(TOURNAMENT_KEY)) || [];
}

function saveTournament(tournament) {
  const tournaments = getTournaments();

  tournaments.push({
    name: tournament.name || "",
    location: tournament.location || "",
    startDate: tournament.startDate || ""
  });

  localStorage.setItem(TOURNAMENT_KEY, JSON.stringify(tournaments));
}