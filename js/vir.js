const pacBtn = document.getElementById('pac-toggle');
  if (pacBtn) {
    pacBtn.addEventListener('click', (e)=>{
      e.preventDefault(); // desactiva el comportamiento por defecto del enlace
      document.documentElement.classList.toggle('vir-pacman');

      //cambio texto del botón según el estado
      if (document.documentElement.classList.contains('vir-pacman')) {
        pacBtn.textContent = "Salir Pac-Mode";
      } else {
        pacBtn.textContent = "Pac-Mode";
      }
    });
  }