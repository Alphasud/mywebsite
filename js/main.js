import { data, projects, techno, contact } from './data.js';
import { getFrench } from './components/getFrench.js';
import { getEnglish } from './components/getEnglish.js';
import { getSpanish } from './components/getSpanish.js';

const toggleLangFr = document.querySelector('.switch__lang__fr');
toggleLangFr.classList.add('selected');
const projectDiv = document.querySelector('.projects');

getFrench(data, projects, techno, contact); // Basic display is French

/////////DARK MODE MANAGEMENT/////////
const toggleLight = document.querySelector('.switch__light');
const toggleLangEn = document.querySelector('.switch__lang__en');
const toggleLangEs = document.querySelector('.switch__lang__es');
const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');
const clearBulb = document.querySelector('.fas.fa-lightbulb');
const presentationArea = document.querySelector('.presentation');
const occupationArea = document.querySelector('.occupation');

toggleLight.addEventListener('click', () => {
  wrapper.classList.toggle('dark');
  body.classList.toggle('dark');
  clearBulb.classList.toggle('dark-bulb');
  toggleLight.classList.toggle('yellow-border');
  toggleLangFr.classList.toggle('white-border');
  toggleLangEs.classList.toggle('white-border');
  toggleLangEn.classList.toggle('white-border');
  presentationArea.classList.toggle('dark-pres');
  projectDiv.classList.toggle('dark-pres');
  occupationArea.classList.toggle('dark-pres');
});

///////LANGUAGE SELECTION MANAGMEMENT////////

/////////FRENCH MANAGEMENT SECTION///////////
toggleLangFr.addEventListener('click', () => {
  toggleLangFr.classList.add('selected');
  toggleLangEn.classList.remove('selected');
  toggleLangEs.classList.remove('selected');
  getFrench(data, projects, techno, contact);
});

/////////ENGLISH MANAGEMENT SECTION///////////
toggleLangEn.addEventListener('click', () => {
  toggleLangEn.classList.add('selected');
  toggleLangFr.classList.remove('selected');
  toggleLangEs.classList.remove('selected');
  getEnglish(data, projects, techno, contact);
});

/////////SPANISH MANAGEMENT SECTION///////////
toggleLangEs.addEventListener('click', () => {
  toggleLangEs.classList.add('selected');
  toggleLangEn.classList.remove('selected');
  toggleLangFr.classList.remove('selected');
  getSpanish(data, projects, techno, contact);
});

//////FOOTER//////
const footer = document.querySelector('.footer');
footer.insertAdjacentHTML(
  'afterbegin',
  `<p>Charles Denneulin <i class="far fa-copyright fa-rotate-180"></i> ${new Date().getFullYear()}.</p>`
);
footer.insertAdjacentHTML(
  'beforeend',
  '<span>Happily coded with vanilla JavaScript :) -> </span><a href="https://github.com/Alphasud/mywebsite" target="_blank" rel="noopener noreferrer">Source Code</a>'
);
