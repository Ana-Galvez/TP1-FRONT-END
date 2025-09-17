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

  // --- Fondo con tonos azules y verdes (diferente al de Tomás) ---
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

// --- Dropdowns mejorados ---
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown-column");

  dropdowns.forEach((column) => {
    const title = column.querySelector(".dropdown-title");

    // Accesible con clic
    title.addEventListener("click", () => {
      column.classList.toggle("active");
    });

    // Accesible con teclado
    title.setAttribute("tabindex", "0");
    title.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        column.classList.toggle("active");
      }
    });
  });
});
