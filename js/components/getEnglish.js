import PresentationCard from './presCard.js';
import OccupationCard from './occupationCard.js';
import ProjectCard from './projectCard.js';
import { mailManagement } from './utils.js';

function getEnglish(data, projects, occupation) {
  const presentationCard = new PresentationCard();
  const dataEngFiltered = data.filter((element) => element.english);
  const dataEng = dataEngFiltered.flatMap((element) => element.english);
  let presentation = presentationCard.createPresentationCard(dataEng);
  const presentationArea = document.querySelector('.presentation');
  presentationArea.innerHTML = presentation;

  /////OCCUPATION
  const occupationEngFiltered = occupation.filter((element) => element.english);
  const occupationEng = occupationEngFiltered.flatMap(
    (element) => element.english
  );
  const occupationCard = new OccupationCard();
  let occup = occupationCard.createOccupationCard(occupationEng);
  const occupationArea = document.querySelector('.occupation');
  occupationArea.innerHTML = occup;

  /////PROJECT
  const projectTitle = document.querySelector('.projects__title');
  projectTitle.innerHTML = 'Training Projects';
  const projectCard = new ProjectCard();
  const projectDataEngFiltered = projects.filter((element) => element.english);
  const projectEng = projectDataEngFiltered.flatMap(
    (element) => element.english
  );
  let projectElement = projectCard.createProjectCard(projectEng);
  const projectArea = document.querySelector('.projects__elements');
  projectArea.innerHTML = projectElement;

  ///// COPY MAIL TO CLIPBOARD AND DISPLAY MESSAGE////
  let mail = document.querySelectorAll('.presentation__social__mail');
  let message = document.querySelectorAll('.copy-message');
  mailManagement(mail, message);
}

export { getEnglish };
