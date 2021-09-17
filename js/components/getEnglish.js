import PresentationCard from './presCard.js';
import OccupationCard from './occupationCard.js';
import ProjectCard from './projectCard.js';
import ContactForm from './form.js';
import { mailManagement } from './utils.js';

function getEnglish(data, projects, techno, contact) {
  const presentationCard = new PresentationCard();
  const dataEngFiltered = data.filter((element) => element.english);
  const dataEng = dataEngFiltered.flatMap((element) => element.english);
  let presentation = presentationCard.createPresentationCard(dataEng);
  const presentationArea = document.querySelector('.presentation');
  presentationArea.innerHTML = presentation;

  /////OCCUPATION
  const occupationEngFiltered = techno.filter((element) => element.english);
  const occupationEng = occupationEngFiltered.flatMap(
    (element) => element.english
  );
  const occupationCard = new OccupationCard();
  let occup = occupationCard.createOccupationCard(occupationEng);
  const occupationArea = document.querySelector('.occupation');
  occupationArea.innerHTML = occup;

  /////PROJECT
  const projectTitle = document.querySelector('.projects__title');
  projectTitle.innerHTML = 'Portfolio (chronological order)';
  const projectCard = new ProjectCard();
  const projectDataEngFiltered = projects.filter((element) => element.english);
  const projectEng = projectDataEngFiltered.flatMap(
    (element) => element.english
  );
  let projectElement = projectCard.createProjectCard(projectEng);
  const projectArea = document.querySelector('.projects__elements');
  projectArea.innerHTML = projectElement;

  ///CONTACT FORM
  const contactForm = new ContactForm();
  const formEngFiltered = contact.filter((element) => element.english);
  const formEng = formEngFiltered.flatMap((element) => element.english);
  let formContact = contactForm.createContactForm(formEng);
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
        status.innerHTML = 'Thanks for your submission!';
        form.reset();
      })
      .catch((error) => {
        status.innerHTML = 'Oops! There was a problem submitting your form';
      });
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
}

export { getEnglish };
