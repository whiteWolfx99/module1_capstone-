const sectionthree = document.getElementById('Section-three');
const btnnum1 = document.getElementById('btn-num1');
const btnnum2 = document.getElementById('btn-num2');
const menu = document.getElementById('menus');
const openmenu = document.getElementById('openmenus');
const closemenu = document.getElementById('closemenus');

const Projectdetail = [
  {
    id: 0,
    Name: 'Dawar Fuad',
    title:
      'Career development, CTO at plus the edge',
    description:
      'Dawar Fuad is a CTO at Plus The Edge, a tech program host presnter, and a well-known of his expert in technology.',
    image: './images/dawar.jpg',
  },
  {
    id: 1,
    Name: 'Khadijah Abdul-Nabi',
    title:
      'UI/UX designer',
    description:
      'Khadijah Abdul Nabi is a multi-disciplinary creative and brand strategist based in Erbil, Iraq. She is female-led design studio in Iraq established in 2017.',
    image: './images/Khadijah_Graphic_Design.jpg',
  },
  {
    id: 2,
    Name: 'Sina Kas',
    title:
      'Mobile developer',
    description:
      'She was a Gateway mobile developer who used flutter to create Mytv, FIB, and Fastpay for mobile.',
    image: './images/person1.jpg',
  },
  {
    id: 3,
    Name: 'Rawa Hamid',
    title:
      'Back-end developer',
    description:
      'He was a Gateway back-end developer who used Laravel to create Mytv, FIB, and Fastpay for website and mobile.',
    image: './images/person2.jpg',
  },
  {
    id: 4,
    Name: 'Ibrahim A. Hussein',
    title:
      'Front-end developer',
    description:
      'He was a Gateway front-end developer who used React.js to create Mytv, FIB, and Fastpay for website.',
    image: './images/person3.jpg',
  },
  {
    id: 5,
    Name: 'Hayda Dizeyi',
    title:
      'Scrum Master & UI/UX designer',
    description:
      'She was a Gateway UI/UX designer who used Adobe XD to designe Mytv, FIB, and Fastpay for mobile and website.',
    image: './images/person4.jpg',
  },
];

function Rpeatspecker(n) {
  sectionthree.innerHTML = '';
  const w = document.documentElement.clientWidth || window.innerWidth;
  if (n === null || n === undefined) {
    if (w >= 800) {
      n = Projectdetail.length;
      btnnum1.classList.add('hidden');
      btnnum2.classList.remove('hidden');
    } else {
      n = 2;
      btnnum1.classList.remove('hidden');
      btnnum2.classList.add('hidden');
    }
  }
  for (let count = 0; count < n; count += 1) {
    sectionthree.innerHTML
        += `<div class="Backgroundspecker">    
        <img class="background-img-speacker"  src="${Projectdetail[count].image}" alt="program1">
        <div class="background">    
          <h2 class="TitleOfspecker">${Projectdetail[count].Name}</h2>
          <h3 class="speckerTitle">${Projectdetail[count].title}</h3>
          <div class="second-hr"></div>
          <p class="speackerdescription">${Projectdetail[count].description}</p>
          </div>
         
      </div>`;
  }
}

function expandMore() {
  btnnum1.classList.add('hidden');
  btnnum2.classList.remove('hidden');
  Rpeatspecker(Projectdetail.length);
}

function showless() {
  btnnum1.classList.remove('hidden');
  btnnum2.classList.add('hidden');
  Rpeatspecker(2);
}

function openallmenu() {
  menu.classList.remove('hidden');
}

function closeallmenu() {
  menu.classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', Rpeatspecker(), false);
btnnum1.addEventListener('click', expandMore);
btnnum2.addEventListener('click', showless);
openmenu.addEventListener('click', openallmenu);
closemenu.addEventListener('click', closeallmenu);