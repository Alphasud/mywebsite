import PresentationCard from './presCard.js';
import OccupationCard from './occupationCard.js';
import ProjectCard from './projectCard.js';
import { mailManagement } from './utils.js';

function getSpanish(data, projects, occupation) {
  ////PRESENTATION
  const presentationCard = new PresentationCard();
  const dataEspFiltered = data.filter((element) => element.spanish);
  const dataEsp = dataEspFiltered.flatMap((element) => element.spanish);
  let presentation = presentationCard.createPresentationCard(dataEsp);
  const presentationArea = document.querySelector('.presentation');
  presentationArea.innerHTML = presentation;

  /////OCCUPATION
  const occupationSpanFiltered = occupation.filter(
    (element) => element.spanish
  );
  const occupationSpan = occupationSpanFiltered.flatMap(
    (element) => element.spanish
  );
  const occupationCard = new OccupationCard();
  let occup = occupationCard.createOccupationCard(occupationSpan);
  const occupationArea = document.querySelector('.occupation');
  occupationArea.innerHTML = occup;

  /////PROJECTS
  const projectCard = new ProjectCard();
  const projectDataSpanFiltered = projects.filter((element) => element.spanish);
  const projectSpan = projectDataSpanFiltered.flatMap(
    (element) => element.spanish
  );
  let projectElement = projectCard.createProjectCard(projectSpan);
  const projectArea = document.querySelector('.projects__elements');
  projectArea.innerHTML = projectElement;

  ///// COPY MAIL TO CLIPBOARD AND DISPLAY MESSAGE////
  let mail = document.querySelectorAll('.presentation__social__mail');
  let message = document.querySelectorAll('.copy-message');
  mailManagement(mail, message);
}

export { getSpanish };
