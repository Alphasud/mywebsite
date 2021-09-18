import PresentationCard from './presCard.js';
import OccupationCard from './occupationCard.js';
import ProjectCard from './projectCard.js';
import ContactForm from './form.js';

function getSpanish(data, projects, techno, contact) {
  ////PRESENTATION
  const presentationCard = new PresentationCard();
  const dataEspFiltered = data.filter((element) => element.spanish);
  const dataEsp = dataEspFiltered.flatMap((element) => element.spanish);
  let presentation = presentationCard.createPresentationCard(dataEsp);
  const presentationArea = document.querySelector('.presentation');
  presentationArea.innerHTML = presentation;

  /////OCCUPATION
  const occupationSpanFiltered = techno.filter((element) => element.spanish);
  const occupationSpan = occupationSpanFiltered.flatMap(
    (element) => element.spanish
  );
  const occupationCard = new OccupationCard();
  let occup = occupationCard.createOccupationCard(occupationSpan);
  const occupationArea = document.querySelector('.occupation');
  occupationArea.innerHTML = occup;

  /////PROJECTS
  const projectTitle = document.querySelector('.projects__title');
  projectTitle.innerHTML = 'Portfolio (orden cronológico)';
  const projectCard = new ProjectCard();
  const projectDataSpanFiltered = projects.filter((element) => element.spanish);
  const projectSpan = projectDataSpanFiltered.flatMap(
    (element) => element.spanish
  );
  let projectElement = projectCard.createProjectCard(projectSpan);
  const projectArea = document.querySelector('.projects__elements');
  projectArea.innerHTML = projectElement;

  ////CONTACT FORM
  const contactForm = new ContactForm();
  const formSpanFiltered = contact.filter((element) => element.spanish);
  const formSpan = formSpanFiltered.flatMap((element) => element.spanish);
  let formContact = contactForm.createContactForm(formSpan);
  const contactSection = document.querySelector('.contact');
  contactSection.innerHTML = formContact;

  const contactFormEmail = document.querySelector('.contact__form__email');
  const contactFormMessage = document.querySelector('.contact__form__message');
  const contactFormButton = document.querySelector('.contact__form__button');
  const contactFormLabelEmail = document.querySelector(
    '.contact__form__label__email'
  );
  const contactFormLabelMessage = document.querySelector(
    '.contact__form__label__message'
  );
  const status = document.querySelector('.contact__form__status');  
  const form = document.getElementById('my-form');
  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          status.classList.add('invalid');
          status.innerHTML = `Ohlala... &#128565 Hubo un problema con el envío del mensaje. Puedes intentar otra vez ?`;
        } else {
          status.classList.remove('invalid');
          status.classList.add('valid');
          status.innerHTML =
            'All Good &#128293 Gracias por su mensaje &#128578 !';
          form.reset();
          contactFormEmail.style.display = 'none';
          contactFormMessage.style.display = 'none';
          contactFormButton.style.display = 'none';
          contactFormLabelEmail.style.display = 'none';
          contactFormLabelMessage.style.display = 'none';

          setTimeout(function () {
            contactSection.style.display = 'none';
            header.style.filter = '';
            main.style.filter = '';
            footer.style.filter = '';
            status.innerHTML = '';
            contactFormEmail.style.display = '';
            contactFormMessage.style.display = '';
            contactFormButton.style.display = '';
            contactFormLabelEmail.style.display = '';
            contactFormLabelMessage.style.display = '';
          }, 6000);
        }
      })
      .catch((error) => {
        console.log(error);
        status.innerHTML = `Oops! Hubo un problema con el envío del mensaje &#128565`;
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
    contactFormEmail.style.display = '';
    contactFormMessage.style.display = '';
    contactFormButton.style.display = '';
    contactFormLabelEmail.style.display = '';
    contactFormLabelMessage.style.display = '';
    status.innerHTML = '';
    status.classList.remove('invalid');
    status.classList.remove('valid');
  });
}

export { getSpanish };
