import PresentationCard from './presCard.js';
import OccupationCard from './occupationCard.js';
import ProjectCard from './projectCard.js';
import ContactForm from './form.js';
import { mailManagement } from './utils.js';

function getFrench(data, projects, techno, contact) {
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
  const occupationFrenchFiltered = techno.filter((element) => element.french);
  const occupationFrench = occupationFrenchFiltered.flatMap(
    (element) => element.french
  );
  let occup = occupationCard.createOccupationCard(occupationFrench);
  occupationArea.innerHTML = occup;

  //////PROJECTS//////
  const projectTitle = document.querySelector('.projects__title');
  projectTitle.innerHTML = 'Portfolio (ordre chronologique)';
  const projectArea = document.querySelector('.projects__elements');
  const projectCard = new ProjectCard();
  const projectDataFrenchFiltered = projects.filter(
    (element) => element.french
  );
  const projectFrench = projectDataFrenchFiltered.flatMap(
    (element) => element.french
  );
  let projectElement = projectCard.createProjectCard(projectFrench);
  projectArea.innerHTML = projectElement;

  /////CONTACT FORM////
  ////CONTACT FORM
  const contactForm = new ContactForm();
  const formFrenchFiltered = contact.filter((element) => element.french);
  const formFrench = formFrenchFiltered.flatMap((element) => element.french);
  let formContact = contactForm.createContactForm(formFrench);
  const contactSection = document.querySelector('.contact');
  contactSection.innerHTML = formContact;

  const form = document.getElementById('my-form');
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById('my-form-status');
    var data = new FormData(event.target);

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        status.innerHTML = 'Merci pour votre message !';
        form.reset();
      })
      .catch((error) => {
        status.innerHTML = `Oops! Il y a eu un soucis avec l'envoi du message.`;
      });

    setTimeout(function () {
      contactSection.style.display = 'none';
      header.style.filter = '';
      main.style.filter = '';
      footer.style.filter = '';
      status.innerHTML = '';
    }, 2000);
  }

  form.addEventListener('submit', handleSubmit);
  
  let header = document.querySelector('header');
  let main = document.querySelector('main');
  let footer = document.querySelector('footer');
  let mail = document.querySelector('.presentation__social__mail');

  mail.addEventListener('click', (e) => {
    e.preventDefault();
    contactSection.style.display = 'flex';
    header.style.filter = 'blur(3px)';
    main.style.filter = 'blur(3px)';
    footer.style.filter = 'blur(3px)';
  });

  let closeButton = document.querySelector('.contact__form__close');
  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    contactSection.style.display = 'none';
    header.style.filter = '';
    main.style.filter = '';
    footer.style.filter = '';
  });

  //let message = document.querySelectorAll('.copy-message');
  //mailManagement(mail, message, mailLink);
}

export { getFrench };
