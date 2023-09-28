// eslint-disable-next-line no-unused-vars
function openPopup() {
  const mobileMenu = document.querySelector('#menu-popup');
  const headlineImg = document.querySelector('#mobile-image-section-one');
  mobileMenu.classList.toggle('hidden');
  headlineImg.classList.toggle('hidden');
}

function hideFloatingImg() {
  const image1 = document.querySelector('.about-img1');
  image1.classList.toggle('hidden');
  const image2 = document.querySelector('.about-img2');
  image2.classList.toggle('hidden');
  const image3 = document.querySelector('.about-img3');
  image3.classList.toggle('hidden');
}

const Data = [
  {
    Id: 0,
    title: 'Book Store',
    html_id: '#proj-one',
    btm_section_id: 'bottom-sec-proj-one',
    description:
      'Discover my Bookstore project, a dynamic and user-friendly React-based web application designed for book enthusiasts and avid readers. This project seamlessly combines an intuitive user interface with powerful backend functionality, allowing users to effortlessly manage their personal library.',
    image: './images/proj-one.png',
    alt: 'project-one-image',
    technologies: ['HTML/CSS', 'JavaScript', 'React'],
    source: 'https://github.com/Adams-Ghub/bookstore',
    live: 'https://bookstore-website.onrender.com/',
  },
  {
    Id: 1,
    title: 'Leaderboard',
    html_id: '#proj-two',
    btm_section_id: 'bottom-sec-proj-two',
    description:
      'Leaderboard is a personal project that showcases my proficiency in cutting-edge web development technologies such as ES6, Webpack, and API integration. It\'s designed to provide users with a seamless experience for adding and displaying scores for players, making it a great tool for tracking and visualizing progress in various activities and competitions.',
    image: './images/proj-two.png',
    alt: 'project-two-image',
    technologies: ['HTML/CSS', 'JavaScript', 'Webpack'],
    source: 'https://github.com/Adams-Ghub/Leaderboard',
    live: 'https://leader-board-01w0.onrender.com/',
  },
  {
    Id: 2,
    title: 'Country metrics',
    html_id: '#proj-three',
    btm_section_id: 'bottom-sec-proj-three',
    description:
      'Introducing Country Metrics, a React-based web application that serves as your personal pocketbook of information about countries from every corner of the globe. This project offers a simple yet powerful way to explore and discover essential details about countries, from official names and populations to coat of arms and flags.',
    image: './images/proj-three.png',
    alt: 'project-three-image',
    technologies: ['HTML/CSS', 'JavaScript', 'React'],
    source: 'https://github.com/Adams-Ghub/country-metrics',
    live: 'https://country-metrics.onrender.com',
  },
  {
    Id: 3,
    title: 'Math magician',
    html_id: '#proj-four',
    btm_section_id: 'bottom-sec-proj-four',
    description:
      'Maths Magician is a dynamic React.js application consisting of three distinct pages: Home, Calculator, and Quotes. This versatile project aims to provide users with a multifaceted experience, offering random quotes fetched from an API, along with an intuitive calculator for mathematical calculations.',
    image: './images/proj-four.png',
    alt: 'project-four-image',
    technologies: ['HTML/CSS', 'JavaScript', 'React'],
    source: 'https://github.com/Adams-Ghub/math-magician-website',
    live: 'https://math-magicians-website-zdsr.onrender.com/',
  },
  {
    Id: 4,
    title: 'Budget App',
    html_id: '#proj-five',
    btm_section_id: 'bottom-sec-proj-five',
    description:
      'Elevate your financial management game with the Personal Budget Manager, a robust Ruby on Rails application designed to empower users to take control of their finances. This user-friendly platform simplifies budgeting and expense tracking, helping you achieve your financial goals effortlessly.',
    image: './images/proj-five.png',
    alt: 'project-five-image',
    technologies: ['PostgreSQL', 'ERB', 'Ruby on Rails'],
    source: 'https://github.com/Adams-Ghub/budget-app',
    live: 'https://budget-app-96u6.onrender.com/',
  },
  {
    Id: 5,
    title: 'Todo List',
    html_id: '#proj-six',
    btm_section_id: 'bottom-sec-proj-six',
    description:
      "Experience task management at its finest with the Webpack-Powered ToDo App. This meticulously crafted web application is designed to streamline your daily organization and productivity. Whether you're a busy professional or a meticulous planner, this app offers a seamless way to manage your tasks effectively.",
    image: './images/proj-six.png',
    alt: 'project-five-image',
    technologies: ['HTML/CSS', 'JavaScript', 'Webpack'],
    source: 'https://github.com/Adams-Ghub/To-do_list',
    live: 'https://adams-ghub.github.io/To-do_list/dist/',
  },
];

const headsection = document.querySelector('#headline');

/* eslint-disable no-unused-vars */
function togglePopup() {
  const lastChild = headsection.lastElementChild;
  if (lastChild) {
    headsection.removeChild(lastChild);
  }
}

function showPopup(id) {
  headsection.innerHTML += `<div class="major-box"><div class="popup-main-box">
  <div class="popup-header">
  <div class="popup-title-tech">
  <h2 class="popup-proj-title">${Data[id].title}</h2>
  <ul class="popup-lang-box">
    <li>${Data[id].technologies[0]}</li>
    <li id="ruby-text">${Data[id].technologies[1]}</li>
    <li>${Data[id].technologies[2]}</li>
  </ul>
  </div>
  <button id="close-pop" onclick="togglePopup()" class="popup-close-btn">
   &#9587;
  </button>
  </div>
  <img src=${Data[id].image} alt=${Data[id].alt} />
  <div class = "bottom-image">
  <img src=${Data[id].image} alt=${Data[id].alt} />
  <img src=${Data[id].image} alt=${Data[id].alt} />
  <img src=${Data[id].image} alt=${Data[id].alt} />
  <img src=${Data[id].image} alt=${Data[id].alt} />
  </div>
  <p class="popup-description">${Data[id].description}</p>

  <div class="live-source-box">
  <a class="live-btn" href=${Data[id].live} target = "_blank">
    See live
    <img src="./images/see-link-icn.png" alt="" />
  </a>
  <a class="source-btn" href=${Data[id].source} target = "_blank">
    See source
    <img src="./images/see-sourceI-icn.png" alt="" />
  </a>
  </div>

  <div class="next-prev-btns">
  <a class="prev-btn" href="#" onclick="showPreviousProject(${id})">    
  <span class="prev-arrow"> &#8666;</span>
    Prev
  </a>
  <a class="next-btn" href="#" onclick="showNextProject(${id})">
    Next
    <span class="next-arrow"> &#8667;</span>
  </a>
  </div>
</div>
</div>`;

  hideFloatingImg();
}

/* eslint-disable no-unused-vars */
function showPreviousProject(id) {
  if (id === 0) {
    document.getElementsByClassName('prev-btn').disable = true;
  } else if (id < Data.length && id > 0) {
    if (id > 0) {
      togglePopup();
    }
    id -= 1;
    showPopup(id);
  }
}

/* eslint-disable no-unused-vars */
function showNextProject(id) {
  if (id === Data.length) {
    document.getElementsByClassName('next-btn').disable = true;
  } else if (id < Data.length && id >= 0) {
    if (id < Data.length - 1) {
      togglePopup();
    }
    id += 1;
    showPopup(id);
  }
}

/* eslint-disable no-unused-vars */
function displayProjects() {
  /* eslint-disable no-plusplus */
  for (let i = 0; i < Data.length; i++) {
    document.querySelector(
      Data[i].html_id,
    ).innerHTML = `<img src="${Data[i].image}" alt="${Data[i].alt}" />
    <div class="project-bottom-section" id="${Data[i].btm_section_id}">
      <h3>${Data[i].title}</h3>
      <ul class="languages-container">
        <li>${Data[i].technologies[0]}</li>
        <li id="ruby-text">${Data[i].technologies[1]} </li>
        <li>${Data[i].technologies[2]}</li>
      </ul>
      <a href="#" onclick = "showPopup(${i})">
        see this project
        <i class="material-icons">arrow_forward</i>
      </a>
    </div>`;
  }
}

const closeBtn = document.getElementById('close-pop');
const infoMsg = document.getElementById('message');
const uName = document.getElementById('name');
const form = document.getElementById('form');
const email = document.getElementById('email');
function storeData() {
  const info = {
    name: uName.value,
    email: email.value,
    information: infoMsg.value,
  };
  window.localStorage.setItem('info', JSON.stringify(info));
}

form.addEventListener('input', storeData);
const savedData = JSON.parse(localStorage.getItem('info'));
window.addEventListener('load', () => {
  if (savedData) {
    uName.value = savedData.name;
    email.value = savedData.email;
    infoMsg.value = savedData.information;
  }
  return true;
});

function validateEmail() {
  document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    /* eslint-disable no-undef */
    const form = document.querySelector('#form');
    const message = document.querySelector('#error-msg');
    const inputEmail = document.querySelector('#email').value;
    if (inputEmail.match(/[A-Z]/)) {
      message.innerHTML = 'Invalid email. Email address should be in lowercase!';
    } else {
      form.submit();
    }
  });
}
