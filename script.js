const games = [
  { name: "Cyber Adventure", desc: "Футуристичний екшн у відкритому світі.", img: "https://via.placeholder.com/200" },
  { name: "Fantasy Quest", desc: "Рольова гра з магією та драконами.", img: "https://via.placeholder.com/200" },
  { name: "Space Shooter", desc: "Аркадний космічний шутер.", img: "https://via.placeholder.com/200" }
];

let library = JSON.parse(localStorage.getItem('library')) || [];

function renderCatalog() {
  const catalog = document.getElementById('catalog');
  if (!catalog) return;
  catalog.innerHTML = "";
  games.forEach(game => {
    const card = document.createElement('div');
    card.className = "game-card";
    card.innerHTML = `
      <img src="${game.img}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p>${game.desc}</p>
      <button onclick="addToLibrary('${game.name}')">Купити</button>
    `;
    catalog.appendChild(card);
  });
}

function addToLibrary(gameName) {
  if (!library.includes(gameName)) {
    library.push(gameName);
    localStorage.setItem('library', JSON.stringify(library));
    alert(`${gameName} додано до бібліотеки!`);
  } else {
    alert("Гра вже є у бібліотеці.");
  }
  renderLibrary();
}

function renderLibrary() {
  const list = document.getElementById('library-list');
  if (!list) return;
  list.innerHTML = "";
  library.forEach(game => {
    const li = document.createElement('li');
    li.textContent = game;
    list.appendChild(li);
  });
}

renderCatalog();
renderLibrary();
