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
    title: 'Project name goes here',
    html_id: '#proj-one',
    btm_section_id: 'bottom-sec-proj-one',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project-one.jpg',
    alt: 'project-one-image',
    technologies: {
      html_css: 'HTML/CSS',
      js: 'JavaScript',
      ruby: 'Ruby on Rails',
    },
    source: '#',
    live: '#',
  },
  {
    Id: 1,
    title: 'Project name goes here',
    html_id: '#proj-two',
    btm_section_id: 'bottom-sec-proj-two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project-two.jpg',
    alt: 'project-two-image',
    technologies: {
      html_css: 'HTML/CSS',
      js: 'JavaScript',
      ruby: 'Ruby on Rails',
    },
    source: '#',
    live: '#',
  }, {
    Id: 2,
    title: 'Project name goes here',
    html_id: '#proj-three',
    btm_section_id: 'bottom-sec-proj-three',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project-three.jpg',
    alt: 'project-three-image',
    technologies: {
      html_css: 'HTML/CSS',
      js: 'JavaScript',
      ruby: 'Ruby on Rails',
    },
    source: '#',
    live: '#',
  },
  {
    Id: 3,
    title: 'Project name goes here',
    html_id: '#proj-four',
    btm_section_id: 'bottom-sec-proj-four',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project-four.jpg',
    alt: 'project-four-image',
    technologies: {
      html_css: 'HTML/CSS',
      js: 'JavaScript',
      ruby: 'Ruby on Rails',
    },
    source: '#',
    live: '#',
  },
  {
    Id: 4,
    title: 'Project name goes here',
    html_id: '#proj-five',
    btm_section_id: 'bottom-sec-proj-five',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project-five.jpg',
    alt: 'project-five-image',
    technologies: {
      html_css: 'HTML/CSS',
      js: 'JavaScript',
      ruby: 'Ruby on Rails',
    },
    source: '#',
    live: '#',
  },
  {
    Id: 5,
    title: 'Project name goes here',
    html_id: '#proj-six',
    btm_section_id: 'bottom-sec-proj-six',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './images/project-six.jpg',
    alt: 'project-five-image',
    technologies: {
      html_css: 'HTML/CSS',
      js: 'JavaScript',
      ruby: 'Ruby on Rails',
    },
    source: '#',
    live: '#',
  },

];

/* eslint-disable no-unused-vars */
function togglePopup() {
  document.querySelector('.major-box').classList.toggle('hidden');
  document.location.reload();
}

function showPopup(id) {
  const headsection = document.querySelector('#headline');
  headsection.innerHTML = ` <div class="major-box"><div class="popup-main-box">
  <button onclick="togglePopup()" class="popup-close-btn">
    <img src="./images/Union.png" alt="" />
  </button>
  <h2 class="popup-proj-title">${Data[id].title}</h2>
  <ul class="popup-lang-box">
    <li>HTML/CSS</li>
    <li id="ruby-text">Ruby on Rails</li>
    <li>JavaScript</li>
  </ul>
  <img src=${Data[id].image} alt=${Data[id].alt} />
  <div class = "bottom-image">
  <img src=${Data[id].image} alt=${Data[id].alt} />
  <img src=${Data[id].image} alt=${Data[id].alt} />
  <img src=${Data[id].image} alt=${Data[id].alt} />
  <img src=${Data[id].image} alt=${Data[id].alt} />
  </div>
  <p class="popup-description">${Data[id].description}</p>

  <div class="live-source-box">
  <a class="live-btn" href="#">
    See live
    <img src="./images/see-link-icn.png" alt="" />
  </a>
  <a class="source-btn" href="#">
    See source
    <img src="./images/see-sourceI-icn.png" alt="" />
  </a>
  </div>

  <div class="next-prev-btns">
  <a class="prev-btn" href="#" onclick="showPreviousProject(${id})">    
    <img src="./images/prev-icn.png" alt="" />
    Previous project
  </a>
  <a class="next-btn" href="#" onclick="showNextProject(${id})">
    Next project
    <img src="./images/next-icn.png" alt="" />
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
    id -= 1;
    showPopup(id);
  }
}

/* eslint-disable no-unused-vars */
function showNextProject(id) {
  if (id === Data.length) {
    document.getElementsByClassName('next-btn').disable = true;
  } else if (id < Data.length && id >= 0) {
    id += 1;
    showPopup(id);
  }
}

/* eslint-disable no-unused-vars */
function displayProjects() {
  /* eslint-disable no-plusplus */
  for (let i = 0; i < Data.length; i++) {
    document.querySelector(Data[i].html_id).innerHTML = `<img src="${Data[i].image}" alt="${Data[i].alt}" />
    <div class="project-bottom-section" id="${Data[i].btm_section_id}">
      <h3>${Data[i].title}</h3>
      <ul class="languages-container">
        <li>${Data[i].technologies.html_css}</li>
        <li id="ruby-text">${Data[i].technologies.ruby} </li>
        <li>${Data[i].technologies.js}</li>
      </ul>
      <a href="#" onclick = "showPopup(${i})">
        see this project
        <i class="material-icons">arrow_forward</i>
      </a>
    </div>`;
  }
}

function validateEmail() {
  document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    /* eslint-disable no-undef */
    form = document.querySelector('#form');
    const message = document.querySelector('#error-msg');
    const inputEmail = document.querySelector('#email').value;
    if (inputEmail.match(/[A-Z]/)) {
      message.innerHTML = 'Invalid email. Email address should be in lowercase!';
    } else {
      form.submit();
    }
  });
}
