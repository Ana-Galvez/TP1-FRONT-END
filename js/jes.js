const quotes = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "Cree en ti y todo será posible.",
  "La disciplina es el puente entre metas y logros.",
  "Cada día es una nueva oportunidad para crecer.",
  "Haz hoy lo que tu futuro yo te agradecerá."
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').textContent = quotes[randomIndex];
}


function toggleMovies() {
  const MoviesList = document.getElementById('Movies-list');
  MoviesList.style.display = MoviesList.style.display === 'none' ? 'block' : 'none';
}
function toggleMusic() {
  const MusicList = document.getElementById('Music-list');
  MusicList.style.display = MusicList.style.display === 'none' ? 'block' : 'none';
}

