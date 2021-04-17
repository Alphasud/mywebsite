import { data, projects } from './data.js';
import PresentationCard from './components/presCard.js';
import ProjectCard from './components/projectCard.js';
import {} from './components/darkMode.js';

const toggleLangFr = document.querySelector('.switch__lang__fr');
//toggleLangFr.classList.add('selected');
const presentationCard = new PresentationCard();
const dataFrenchFiltered = data.filter((element) => element.french);
const dataFrench = dataFrenchFiltered.flatMap((element) => element.french);
let presentation = presentationCard.createPresentationCard(dataFrench);
const presentationArea = document.querySelector('.presentation');
presentationArea.innerHTML = presentation;

const projectArea = document.querySelector('.projects__elements');
const projectCard = new ProjectCard();
const projectDataFrenchFiltered = projects.filter((element) => element.french);
const projectFrench = projectDataFrenchFiltered.flatMap(
  (element) => element.french
);
let projectElement = projectCard.createProjectCard(projectFrench);
projectArea.insertAdjacentHTML('beforeend', projectElement);

/////////DARK MODE MANAGEMENT/////////
const toggleLight = document.querySelector('.switch__light');
const toggleLangEn = document.querySelector('.switch__lang__en');
const toggleLangEs = document.querySelector('.switch__lang__es');
const body = document.querySelector('body');
const clearBulb = document.querySelector('.fas.fa-lightbulb');
const linkOC = document.querySelector('.presentation__link');
const projectLinks = document.querySelectorAll(
  '.projects__elements__item__link'
);

toggleLight.addEventListener('click', () => {
  body.classList.toggle('dark');
  clearBulb.classList.toggle('dark-bulb');
  toggleLight.classList.toggle('white-border');
  toggleLangFr.classList.toggle('white-border');
  toggleLangEs.classList.toggle('white-border');
  toggleLangEn.classList.toggle('white-border');
  linkOC.classList.toggle('dark-link');
  presentationArea.classList.toggle('dark-pres');
  projectArea.classList.toggle('dark-pres');
  for (const item of projectLinks) {
    item.classList.toggle('dark-links');
  }
});

///////LANGUAGE SLECTION MANAGMEMENT////////
toggleLangFr.addEventListener('click', () => {
  const dataFrenchFiltered = data.filter((element) => element.french);
  const dataFrench = dataFrenchFiltered.flatMap((element) => element.french);
  presentation = presentationCard.createPresentationCard(dataFrench);
  presentationArea.innerHTML = presentation;

  const projectDataFrenchFiltered = projects.filter(
    (element) => element.french
  );
  const projectFrench = projectDataFrenchFiltered.flatMap(
    (element) => element.french
  );
  let projectElement = projectCard.createProjectCard(projectFrench);
  projectArea.innerHTML = projectElement;
});

toggleLangEn.addEventListener('click', () => {
  const dataEngFiltered = data.filter((element) => element.english);
  const dataEng = dataEngFiltered.flatMap((element) => element.english);
  presentation = presentationCard.createPresentationCard(dataEng);
  presentationArea.innerHTML = presentation;

  const projectDataEngFiltered = projects.filter((element) => element.english);
  const projectEng = projectDataEngFiltered.flatMap(
    (element) => element.english
  );
  let projectElement = projectCard.createProjectCard(projectEng);
  projectArea.innerHTML = projectElement;
});

toggleLangEs.addEventListener('click', () => {
  const dataEspFiltered = data.filter((element) => element.spanish);
  const dataEsp = dataEspFiltered.flatMap((element) => element.spanish);
  presentation = presentationCard.createPresentationCard(dataEsp);
  presentationArea.innerHTML = presentation;

  const projectDataSpanFiltered = projects.filter((element) => element.spanish);
  const projectSpan = projectDataSpanFiltered.flatMap(
    (element) => element.spanish
  );
  let projectElement = projectCard.createProjectCard(projectSpan);
  projectArea.innerHTML = projectElement;
});

const darkModeObserver = new MutationObserver(() => {
  if (body.classList.contains('dark')) {
    console.log('hello');
    const selected = document.querySelector('.selected');
    console.log(selected);
    selected.classList.add('selected-dark');
    selected.classList.remove('selected');
  }
});
darkModeObserver.observe(body, { subtree: true, childList: true });
