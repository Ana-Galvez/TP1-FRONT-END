function toggleTheme(){
  document.body.style.background =
    document.body.style.background=='black' ? '#f7f7fb' : 'black';
}

function filterTeam(){
  const q=document.getElementById('filter-input').value.toLowerCase();
  document.querySelectorAll('.member').forEach(m=>{
    const n=m.dataset.name.toLowerCase();
    m.style.display=n.includes(q)?'flex':'none';
  });
}

function toggleSkills(){
  document.getElementById('skills-list').classList.toggle('hidden');
}

function addBitacoraEntry(){
  const input=document.getElementById('bitacora-input');
  const list=document.getElementById('bitacora-list');
  if(!input.value.trim()) return;
  const li=document.createElement('li');
  li.textContent=input.value.trim();
  list.appendChild(li);
  input.value='';
}


document.querySelector("footer").addEventListener("click", () => {
  alert("🎮 ¡Modo secreto activado! Gracias por visitar nuestra web.");
});
