const sectionthree = document.getElementById('Section-three');
const btns = document.getElementById('btn');

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

function Rpeatspecker() {
  let count;
  for (count = 0; count < 2; count += 1) {
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

function Rpeatspecker2() {
  let count;

  for (count = 2; count < Projectdetail.length; count += 1) {
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

document.addEventListener('DOMContentLoaded', Rpeatspecker, false);
btns.addEventListener('click', Rpeatspecker2);