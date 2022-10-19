const menuee = document.getElementById('menusee');
const openmenuee = document.getElementById('openmenusee');
const closemenuee = document.getElementById('closemenusee');

function openallmenuee() {
  menuee.classList.remove('hidden');
}

function closeallmenuee() {
  menuee.classList.add('hidden');
}

openmenuee.addEventListener('click', openallmenuee);
closemenuee.addEventListener('click', closeallmenuee);