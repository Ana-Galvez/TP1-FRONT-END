function toggleMovies(){
  document.getElementById('movies-list').classList.toggle('hidden');
}

function toggleMusic(){
  document.getElementById('music-list').classList.toggle('hidden');
}


// Modo oscuro y claro cambiando el texto del botón
function toggleTheme() {
  const header = document.querySelector("header");
  const botonModo = document.querySelector("#btn-modo")

  if (document.body.style.background === "black" && header.style.background === "black") {
    // 🌞 Vuelve a modo claro
    document.body.style.background = "#f7f7fb";
    header.style.background = "#ffffff";
    document.body.style.color = "#0f172a";
    botonModo.textContent="Modo oscuro";

    // Cambiar todos los textos a color oscuro
    document.querySelectorAll("h1, h2, li, p").forEach(el => {
      el.style.color = "#0f172a";
    });

  } else {
    // 🌙 Activa modo oscuro
    document.body.style.background = "black";
    header.style.background = "black";
    document.body.style.color = "white";
    botonModo.textContent="Modo claro";

    // Cambiar todos los textos a blanco
    document.querySelectorAll("h1, h2, li, p").forEach(el => {
      el.style.color = "white";
    });
  }
}

// Intervalo para que vaya apareciendo por letra la ubicación
window.addEventListener("DOMContentLoaded", () => {
  const name = document.querySelector("h1");
  const place = document.querySelector("p");
  const textName = name.textContent;
  const textPlace = place.textContent;
  name.textContent = "";
  place.textContent = "";
  let i = 0;

  const interval = setInterval(() => {
    if (i < textName.length || i < textPlace.length) {
      name.textContent += textName.charAt(i);
      place.textContent += textPlace.charAt(i);
      i++;
    } else {
      clearInterval(interval);
    }
  }, 200);
});

