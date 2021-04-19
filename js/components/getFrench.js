import PresentationCard from './presCard.js';
import OccupationCard from './occupationCard.js';
import ProjectCard from './projectCard.js';
import { mailManagement } from './utils.js';

function getFrench(data, projects, occupation) {
  //////INIITAL STATE IS FRENCH///////
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
  const occupationFrenchFiltered = occupation.filter(
    (element) => element.french
  );
  const occupationFrench = occupationFrenchFiltered.flatMap(
    (element) => element.french
  );
  let occup = occupationCard.createOccupationCard(occupationFrench);
  occupationArea.innerHTML = occup;

  //////PROJECTS//////
  const projectTitle = document.querySelector('.projects__title');
  projectTitle.innerHTML = 'Projets Académiques';
  const projectArea = document.querySelector('.projects__elements');
  const projectCard = new ProjectCard();
  const projectDataFrenchFiltered = projects.filter(
    (element) => element.french
  );
  const projectFrench = projectDataFrenchFiltered.flatMap(
    (element) => element.french
  );
  let projectElement = projectCard.createProjectCard(projectFrench);
  projectArea.insertAdjacentHTML('beforeend', projectElement);

  ///// COPY MAIL TO CLIPBOARD AND DISPLAY MESSAGE////
  let mail = document.querySelectorAll('.presentation__social__mail');
  let message = document.querySelectorAll('.copy-message');
  mailManagement(mail, message);
}

export { getFrench };
