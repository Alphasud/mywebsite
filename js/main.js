import { data, projects, occupation } from './data.js';
import PresentationCard from './components/presCard.js';
import OccupationCard from './components/occupationCard.js';
import ProjectCard from './components/projectCard.js';
import {} from './components/darkMode.js';

const toggleLangFr = document.querySelector('.switch__lang__fr');
toggleLangFr.classList.add('selected');

////////PRESENTATION//////
const presentationCard = new PresentationCard();
const dataFrenchFiltered = data.filter((element) => element.french);
const dataFrench = dataFrenchFiltered.flatMap((element) => element.french);
let presentation = presentationCard.createPresentationCard(dataFrench);
const presentationArea = document.querySelector('.presentation');
presentationArea.innerHTML = presentation;

///////OCCUPATION///////
const occupationArea = document.querySelector('.occupation');
const occupationCard = new OccupationCard();
const occupationFrenchFiltered = occupation.filter((element) => element.french);
const occupationFrench = occupationFrenchFiltered.flatMap(
  (element) => element.french
);
let occup = occupationCard.createOccupationCard(occupationFrench);
occupationArea.innerHTML = occup;

//////PROJECTS//////
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
  toggleLight.classList.toggle('yellow-border');
  toggleLangFr.classList.toggle('white-border');
  toggleLangEs.classList.toggle('white-border');
  toggleLangEn.classList.toggle('white-border');
  linkOC.classList.toggle('dark-link');
  presentationArea.classList.toggle('dark-pres');
  projectArea.classList.toggle('dark-pres');
  occupationArea.classList.toggle('dark-pres');
  for (const item of projectLinks) {
    item.classList.toggle('dark-links');
  }
});

///////LANGUAGE SLECTION MANAGMEMENT////////
toggleLangFr.addEventListener('click', () => {
  toggleLangFr.classList.add('selected');
  toggleLangEn.classList.remove('selected');
  toggleLangEs.classList.remove('selected');
  ////PRESENTATION
  const dataFrenchFiltered = data.filter((element) => element.french);
  const dataFrench = dataFrenchFiltered.flatMap((element) => element.french);
  presentation = presentationCard.createPresentationCard(dataFrench);
  presentationArea.innerHTML = presentation;
  ////OCCUPATION
  const occupationFrenchFiltered = occupation.filter(
    (element) => element.french
  );
  const occupationFrench = occupationFrenchFiltered.flatMap(
    (element) => element.french
  );
  let occup = occupationCard.createOccupationCard(occupationFrench);
  occupationArea.innerHTML = occup;

  /////PROJECTS
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
  toggleLangEn.classList.add('selected');
  toggleLangFr.classList.remove('selected');
  toggleLangEs.classList.remove('selected');
  ////PRESENTATION
  const dataEngFiltered = data.filter((element) => element.english);
  const dataEng = dataEngFiltered.flatMap((element) => element.english);
  presentation = presentationCard.createPresentationCard(dataEng);
  presentationArea.innerHTML = presentation;
  /////OCCUPATION
  const occupationEngFiltered = occupation.filter((element) => element.english);
  const occupationEng = occupationEngFiltered.flatMap(
    (element) => element.english
  );
  occup = occupationCard.createOccupationCard(occupationEng);
  occupationArea.innerHTML = occup;
  /////PROJECT
  const projectDataEngFiltered = projects.filter((element) => element.english);
  const projectEng = projectDataEngFiltered.flatMap(
    (element) => element.english
  );
  let projectElement = projectCard.createProjectCard(projectEng);
  projectArea.innerHTML = projectElement;
});

toggleLangEs.addEventListener('click', () => {
  toggleLangEs.classList.add('selected');
  toggleLangEn.classList.remove('selected');
  toggleLangFr.classList.remove('selected');
  ////PRESENTATION
  const dataEspFiltered = data.filter((element) => element.spanish);
  const dataEsp = dataEspFiltered.flatMap((element) => element.spanish);
  presentation = presentationCard.createPresentationCard(dataEsp);
  presentationArea.innerHTML = presentation;
  /////OCCUPATION
  const occupationSpanFiltered = occupation.filter(
    (element) => element.spanish
  );
  const occupationSpan = occupationSpanFiltered.flatMap(
    (element) => element.spanish
  );
  occup = occupationCard.createOccupationCard(occupationSpan);
  occupationArea.innerHTML = occup;
  /////PROJECTS
  const projectDataSpanFiltered = projects.filter((element) => element.spanish);
  const projectSpan = projectDataSpanFiltered.flatMap(
    (element) => element.spanish
  );
  let projectElement = projectCard.createProjectCard(projectSpan);
  projectArea.innerHTML = projectElement;
});
