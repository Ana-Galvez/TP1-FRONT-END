// Función para modo oscuro/claro
function toggleTheme(){
  document.body.style.background =
    document.body.style.background=='black' ? '#f7f7fb' : 'black';
}

// Función para alternar el menú hamburguesa
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


// Función para filtrar integrantes
function filterTeam(){
  const q=document.getElementById('filter-input').value.toLowerCase();
  if(q=== ""){  //Si el input está vacio muestra todos los integrantes
      document.querySelectorAll('.member').forEach(m=>{
    const n=m.dataset.name.toLowerCase();
    m.style.display="flex";
  });
  } else{ // Si el input tiene algo escrito, desde el primer caracter verifica si coincide con la primera letra de los integrantes, si coincide sigue verificando el segundo caracter y siguientes.
  document.querySelectorAll('.member').forEach(m=>{
    const n=m.dataset.name.toLowerCase();
    m.style.display=n.startsWith(q) ?'flex':'none';
  });
  }
}

// Función para ocultar/mostrar habilidades
function toggleSkills(){
  document.getElementById('skills-list').classList.toggle('hidden');
}

//Función para agregar a la lista de la bitácora (no guarda datos)
function addBitacoraEntry(){
  const input=document.getElementById('bitacora-input');
  const list=document.getElementById('bitacora-list');
  if(!input.value.trim()) return;
  const li=document.createElement('li');
  li.textContent=input.value.trim();
  list.appendChild(li);
  input.value='';
}

//Función para mostrar el alert del footer
document.querySelector("footer").addEventListener("click", () => {
  alert("🎮 ¡Modo secreto activado! Gracias por visitar nuestra web. 😁");
});
