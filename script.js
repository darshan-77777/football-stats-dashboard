const players = {
  ronaldo: {
    name: "Cristiano Ronaldo",
    team: "Al Nassr",
    goals: 101,
    assists: 32,
    matches:106,
    image:
      "https://pbs.twimg.com/profile_images/1940344470290989057/1OUP8RgK_400x400.jpg",
  },

  messi: {
    name: "Lionel Messi",
    team: "Inter Miami",
    goals: 68,
    assists: 41,
    matches: 80,
    image:
      "https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2026/04/12/1775961902625_afp202604122270918740v2highresintermiamicfvnewyorkredbulls-1775960136495891321969.webp",
  },

  mbappe: {
    name: "Kylian Mbappe",
    team: "Real Madrid",
    goals: 70,
    assists: 31,
    matches: 81,
    image:
      "https://cdn.britannica.com/39/239139-050-49A950D1/French-soccer-player-Kylian-Mbappe-FIFA-World-Cup-December-10-2022.jpg",
  },
    neymar: {
    name: "Neymar Jr",
    team: "Al Hilal",
    goals: 28,
    assists: 20,
    matches: 36,
    image:
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=800&auto=format&fit=crop",
  },

  haaland: {
    name: "Erling Haaland",
    team: "Manchester City",
    goals: 44,
    assists: 8,
    matches: 42,
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=800&auto=format&fit=crop",
  },

  vinicius: {
    name: "Vinicius Jr",
    team: "Real Madrid",
    goals: 26,
    assists: 14,
    matches: 39,
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
  },

  bellingham: {
    name: "Jude Bellingham",
    team: "Real Madrid",
    goals: 21,
    assists: 13,
    matches: 40,
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=800&auto=format&fit=crop",
  },

  salah: {
    name: "Mohamed Salah",
    team: "Liverpool",
    goals: 31,
    assists: 15,
    matches: 41,
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=800&auto=format&fit=crop",
  },

  kane: {
    name: "Harry Kane",
    team: "Bayern Munich",
    goals: 38,
    assists: 9,
    matches: 43,
    image:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=800&auto=format&fit=crop",
  },

  debruyne: {
    name: "Kevin De Bruyne",
    team: "Manchester City",
    goals: 14,
    assists: 22,
    matches: 35,
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop",
  },

  modric: {
    name: "Luka Modric",
    team: "Real Madrid",
    goals: 8,
    assists: 11,
    matches: 37,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
  },

  lewandowski: {
    name: "Robert Lewandowski",
    team: "Barcelona",
    goals: 33,
    assists: 7,
    matches: 40,
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
  },

  yamal: {
    name: "Lamine Yamal",
    team: "Barcelona",
    goals: 17,
    assists: 16,
    matches: 34,
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=800&auto=format&fit=crop",
  },

  pedri: {
    name: "Pedri",
    team: "Barcelona",
    goals: 9,
    assists: 10,
    matches: 33,
    image:
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=800&auto=format&fit=crop",
  },

  son: {
    name: "Son Heung-min",
    team: "Tottenham",
    goals: 25,
    assists: 12,
    matches: 38,
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
  },

  griezmann: {
    name: "Antoine Griezmann",
    team: "Atletico Madrid",
    goals: 22,
    assists: 14,
    matches: 39,
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop",
  },

  osimhen: {
    name: "Victor Osimhen",
    team: "Napoli",
    goals: 29,
    assists: 5,
    matches: 34,
    image:
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=800&auto=format&fit=crop",
  },

  saka: {
    name: "Bukayo Saka",
    team: "Arsenal",
    goals: 20,
    assists: 13,
    matches: 37,
    image:
      "https://images.unsplash.com/photo-1508098682722-e99c643e7485?q=80&w=800&auto=format&fit=crop",
  },

  rodrygo: {
    name: "Rodrygo",
    team: "Real Madrid",
    goals: 19,
    assists: 11,
    matches: 36,
    image:
      "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=800&auto=format&fit=crop",
  },

  martinez: {
    name: "Lautaro Martinez",
    team: "Inter Milan",
    goals: 30,
    assists: 6,
    matches: 39,
    image:
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=800&auto=format&fit=crop",
  },

  alvarez: {
    name: "Julian Alvarez",
    team: "Manchester City",
    goals: 24,
    assists: 10,
    matches: 41,
    image:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=800&auto=format&fit=crop",
  },

  musiala: {
    name: "Jamal Musiala",
    team: "Bayern Munich",
    goals: 18,
    assists: 12,
    matches: 35,
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
  },

  valverde: {
    name: "Federico Valverde",
    team: "Real Madrid",
    goals: 12,
    assists: 9,
    matches: 40,
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?q=80&w=800&auto=format&fit=crop",
  },
    casemiro: {
    name: "Casemiro",
    team: "Manchester United",
    goals: 7,
    assists: 5,
    matches: 33,
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
  },
};

function searchPlayer() {
  const input = document
    .getElementById("searchInput")
    .value
    .toLowerCase();

  const player = players[input];

  if (!player) {
    alert("Player not found");
    return;
  }

  document.getElementById("playerName").textContent =
    player.name;

  document.getElementById("team").textContent =
    player.team;

  document.getElementById("goalsText").textContent =
    player.goals;

  document.getElementById("assistsText").textContent =
    player.assists;

  document.getElementById("matchesText").textContent =
    player.matches;

  document.getElementById("playerImage").src =
    player.image;

  document.getElementById("goalsBar").style.width =
    player.goals * 2 + "%";

  document.getElementById("assistsBar").style.width =
    player.assists * 4 + "%";

  document.getElementById("matchesBar").style.width =
    player.matches * 2 + "%";

    if(player.goals >= 50){

  document.getElementById("playerBadge").textContent =
    "🏆 Top Scorer";

}
else{

  document.getElementById("playerBadge").textContent =
    "";

}
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

searchPlayer();