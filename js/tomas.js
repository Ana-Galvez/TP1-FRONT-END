// --- Importar Hydra desde CDN dinámicamente ---
const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/hydra-synth/dist/hydra-synth.js";
script.onload = () => initHydra(); 
document.head.appendChild(script);

// --- Implementacion de Hydra
function initHydra() {
  // --- Canvas donde se pintará Hydra ---
  const canvas = document.getElementById('hydra-canvas');

  // --- Función para adaptar tamaño del canvas al viewport ---
  function setCanvasSize() {
    const DPR = window.devicePixelRatio || 1; // Ratio de píxeles del dispositivo
    canvas.width = window.innerWidth * DPR;
    canvas.height = window.innerHeight * DPR;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    return DPR;
  }

  const DPR = setCanvasSize(); // Configurar tamaño inicial

  // --- Inicializar Hydra con el canvas ---
  const hydra = new Hydra({
    canvas: canvas,
    detectAudio: false, 
    width: canvas.width,
    height: canvas.height,
    pixelRatio: DPR
  });

  // --- Visual púrpura y negro ---
  speed = 0.1;

  osc(100, -0.0018, 0.17)
    .diff(osc(20, 0.00008).rotate(Math.PI / 0.00003))
    .modulateScale(
      noise(3.5, 0.18).modulateScale(osc(13).rotate(() => Math.sin(time / 22))),
      3
    )
    .contrast(1.4)
    .add(src(o0).modulate(o0, 0.04), 0.6, 0.9)
    
    .brightness(0.0003, 2)
    .contrast(0.5, 2, 0.1, 2)
    
    .modulateScale(osc(2), -0.2, 2, 1, 0.3)
    .posterize(200)
    .rotate(1, 0.2, 0.01, 0.001)
    
    .contrast(0.18, 0.3, 0.1, 0.2, 0.03, 1)
    .brightness(0.0001, -1, 10)

    
    .color(0.8, 0, 1.5) 
    .saturate(1.8)      
    .contrast(1.6)     

    .out(); 

  // --- Ajuste responsive al cambiar tamaño de ventana ---
  window.addEventListener('resize', () => {
    const DPR = setCanvasSize();
    hydra.setResolution(canvas.width, canvas.height); // Ajustar resolución Hydra
  });
}


// --- Control de dropdowns ---
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown-column');

    dropdowns.forEach(column => {
        column.addEventListener('click', function() {
            dropdowns.forEach(activeColumn => {
                activeColumn.classList.toggle('active');
            });
        });
    });
});
