# TP DE PRESENTACIÓN DEL GRUPO 12

<img width="1883" height="894" alt="image" src="https://github.com/user-attachments/assets/213c5c2e-af55-4ed7-97b0-a5ad3400ce1d" />

## Descripción
En este trabajo se trata de plasmar las habilidades de cada integrante del equipo en cuanto a HTML, CSS y Javascript, ayudándonos porque tenemos diferentes niveles de conocimientos. Se trata de una **presentación interactiva** del Grupo 12, donde cada integrante diseñó su propia tarjeta personal aplicando conocimientos de **HTML, CSS y JavaScript**.  
La idea fue trabajar en equipo, compartir estilos y experimentar con diferentes efectos visuales y funcionalidades, respetando la estética retro y creativa que nos caracteriza.

## 🛠️ Tecnologías utilizadas
- **HTML5**
- **CSS3**
- **JavaScript**
- **Google Fonts**
- **Hydra-synth** (para visuales dinámicos en canvas)

## 📂 Estructura de archivos

├── index.html # Portada principal (en raíz)
├── bitacora.html # Registro de avances del grupo (en raíz)
├── css/ # Estilos globales y personalizados (Archivos css, tanto para index.html como para cada html)
│ ├── style.css 
│ ├── bitacora.css
│ └── ...
├── js/ # Scripts globales y personalizados (Archivos javascript para index.html como para cada html)
│ ├── main.js
│ └── ...
├── img/ # Imágenes y assets (Imágenes dentro de carpeta)
│ ├── favicon.ico
│ └── ...
└── README.md

## Funciones utilizadas con Javascript
- index.html: toggleTheme() modo oscuro
- index.html: filterTeam() filtrar por integrante
- index.html: hay un alert en el footer
- index.html: toggleMenu() para menú hamburguesa en dispositivos < 400px
- bitacora.html: addBitacoraEntry()  agrega a la lista
- tarjetas individuales: toggleSkills() muestra u oculta datos
- ana.html: al ingresar a la página, el nombre y la ubicación van apareciendo letra por letra
- jessica.html: despues de la presentacion, al hacer click en un boton te muestra frases motivacionales que van cambiando y se agregó animación al avatar.
- virginia.html: Agregue un modo "Pac-man" que cambia el fondo original por una imagen del laberinto y varios de los css de los componentes de la página. Además cambio el texto del botón que cambia el modo.
- tomas.js: integración con Hydra (script dinámico para importar hydra-synth desde CDN, initHydra() inicializa Hydra y genera visuales dinámicos en el canvas, setCanvasSize() adapta el tamaño del canvas al viewport y window.addEventListener('resize') ajusta resolución de Hydra al cambiar tamaño de ventana). control de dropdowns al hacer click en .dropdown-column alterna clases activas.
-alvaro.js: dropdowns con efecto acordeón y visual retro con Hydra. 

## 🚀 Instalación y uso
1. Clonar este repositorio:
   ```bash
   git clone https://github.com/usuario/proyecto-grupo12.git
2. Abrir el archivo index.html en el navegador.
3. (Opcional) Si usás Live Server en VSCode, podés ejecutar el proyecto con recarga automática.

## Enlace del sitio
https://tp1-front-end-grupo12.vercel.app/
