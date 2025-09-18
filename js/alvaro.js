// --- Importar Hydra desde CDN dinámicamente ---
const script = document.createElement("script");
script.onload = () => initHydra();
document.head.appendChild(script);

// --- Implementación de Hydra ---
function initHydra() {
  const canvas = document.getElementById("hydra-canvas");

  function setCanvasSize() {
    const DPR = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * DPR;
    canvas.height = window.innerHeight * DPR;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    return DPR;
  }

  const DPR = setCanvasSize();

  const hydra = new Hydra({
    canvas: canvas,
    detectAudio: false,
    width: canvas.width,
    height: canvas.height,
    pixelRatio: DPR,
  });

  // --- Fondo con tonos azules y verdes--
  speed = 0.08;

  osc(40, 0.02, 0.9)
    .modulate(noise(2).kaleid(5))
    .color(0, 1, 1.2)
    .rotate(0.2, 0.1)
    .saturate(1.5)
    .out();

  window.addEventListener("resize", () => {
    const DPR = setCanvasSize();
    hydra.setResolution(canvas.width, canvas.height);
  });
}

// --- Dropdowns optimizados con efecto acordeón ---
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown-column");

  dropdowns.forEach((column) => {
    const title = column.querySelector(".dropdown-title");

    // Hacer foco accesible con teclado
    title.setAttribute("tabindex", "0");

    // Evento click
    title.addEventListener("click", () => toggleDropdown(column));

    // Evento teclado (Enter o Espacio)
    title.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleDropdown(column);
      }
    });
  });

  function toggleDropdown(activeColumn) {
    // Si ya está abierto → cerrarlo
    if (activeColumn.classList.contains("active")) {
      activeColumn.classList.remove("active");
      return;
    }

    // Cerrar todos los demás
    dropdowns.forEach((col) => col.classList.remove("active"));

    // Abrir el seleccionado
    activeColumn.classList.add("active");
  }
});
