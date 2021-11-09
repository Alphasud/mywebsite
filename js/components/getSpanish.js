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
  projectTitle.innerHTML = 'Portfolio (orden anticronológico)';
  const projectCard = new ProjectCard();
  const projectDataSpanFiltered = projects.filter((element) => element.spanish);
  const projectSpan = projectDataSpanFiltered.flatMap(
    (element) => element.spanish
  );
  let projectElement = projectCard.createProjectCard(projectSpan.reverse());
  const projectArea = document.querySelector('.projects__elements');
  projectArea.innerHTML = projectElement;

  ////CONTACT FORM
  const contactForm = new ContactForm();
  const formSpanishFiltered = contact.filter((element) => element.spanish);
  const formSpanish = formSpanishFiltered.flatMap((element) => element.spanish);
  let formContact = contactForm.createContactForm(formSpanish);
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
  let isEmailValid = false;
  let isMessageValid = false;
  const userMessageError = document.querySelector('.error-message__message');
  const userEmailError = document.querySelector('.error-message__email');
  const userEmailSuccess = document.querySelector('.success-message__email');
  let header = document.querySelector('header');
  let main = document.querySelector('main');
  let footer = document.querySelector('footer');
  let mail = document.querySelector('.presentation__social__mail');

  async function handleSubmit(event) {
    event.preventDefault();
    if (isEmailValid && isMessageValid) {
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
            userEmailSuccess.style.display = 'none';

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
              contactFormEmail.classList.remove('valid-field');
              contactFormEmail.classList.remove('invalid-field');
              contactFormMessage.classList.remove('valid-field');
              contactFormMessage.classList.remove('invalid-field');
              contactSection.classList.remove('invalid-field');
              contactSection.classList.remove('valid-field');
              isEmailValid = false;
              isMessageValid = false;
              contactFormButton.classList.remove('invalid-field');
              contactFormButton.classList.remove('valid-field');
              userEmailSuccess.style.display = 'none';
              container.style.display = 'none';
              header.style.pointerEvents = '';
              main.style.pointerEvents = '';
              footer.style.pointerEvents = '';
            }, 6000);
          }
        })
        .catch((error) => {
          console.log(error);
          status.innerHTML = `Oops! Hubo un problema con el envío del mensaje &#128565`;
        });
    } else {
      isEmailValid
        ? contactFormEmail.classList.add('valid-field')
        : contactFormEmail.classList.add('invalid-field');

      isMessageValid
        ? contactFormMessage.classList.add('valid-field')
        : contactFormMessage.classList.add('invalid-field');

      contactSection.classList.add('invalid-field');
      userEmailError.style.display = 'block';
      userMessageError.style.display = 'block';
      contactFormButton.classList.add('invalid-field');
    }
  }

  contactFormEmail.addEventListener('input', () => {
    const value = contactFormEmail.value.trim();
    if (value.match(/^\S+@\S+\.\S+$/) && value) {
      contactFormEmail.classList.remove('invalid-field');
      contactFormEmail.classList.add('valid-field');
      isEmailValid = true;
      userEmailError.style.display = 'none';
      userEmailSuccess.style.display = 'block';
      if (isEmailValid && isMessageValid) {
        contactSection.classList.add('valid-field');
        contactSection.classList.remove('invalid-field');
        contactFormButton.classList.add('valid-field');
        contactFormButton.classList.remove('invalid-field');
      } else {
        contactSection.classList.add('invalid-field');
        contactSection.classList.remove('valid-field');
        contactFormButton.classList.remove('valid-field');
        contactFormButton.classList.add('invalid-field');
      }
    } else {
      contactFormEmail.classList.remove('valid-field');
      contactFormEmail.classList.add('invalid-field');
      isEmailValid = false;
      userEmailError.style.display = 'block';
      userEmailSuccess.style.display = 'none';
      contactSection.classList.remove('valid-field');
      contactSection.classList.add('invalid-field');
      contactFormButton.classList.add('invalid-field');
      contactFormButton.classList.remove('valid-field');
    }
  });

  contactFormMessage.addEventListener('input', () => {
    const value = contactFormMessage.value.trim();
    if (value) {
      contactFormMessage.classList.remove('invalid-field');
      contactFormMessage.classList.add('valid-field');
      isMessageValid = true;
      userMessageError.style.display = 'none';
      if (isEmailValid && isMessageValid) {
        contactSection.classList.add('valid-field');
        contactSection.classList.remove('invalid-field');
        contactFormButton.classList.add('valid-field');
        contactFormButton.classList.remove('invalid-field');
      } else {
        contactSection.classList.add('invalid-field');
        contactSection.classList.remove('valid-field');
        contactFormButton.classList.remove('valid-field');
        contactFormButton.classList.add('invalid-field');
      }
    } else {
      isMessageValid = false;
      contactFormMessage.classList.remove('valid-field');
      contactFormMessage.classList.add('invalid-field');
      userMessageError.style.display = 'block';
      contactSection.classList.remove('valid-field');
      contactSection.classList.add('invalid-field');
      contactFormButton.classList.add('invalid-field');
      contactFormButton.classList.remove('valid-field');
    }
  });

  form.addEventListener('submit', handleSubmit);

  mail.addEventListener('click', (e) => {
    e.preventDefault();
    contactSection.style.display = 'flex';
    header.style.filter = 'blur(3px)';
    main.style.filter = 'blur(3px)';
    footer.style.filter = 'blur(3px)';
    header.style.pointerEvents = 'none';
    main.style.pointerEvents = 'none';
    footer.style.pointerEvents = 'none';
  });

  let closeButton = document.querySelector('.contact__form__close');
  closeButton.addEventListener('click', (e) => {
    e.preventDefault();
    form.reset();
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
    contactFormEmail.classList.remove('valid-field');
    contactFormEmail.classList.remove('invalid-field');
    contactFormMessage.classList.remove('valid-field');
    contactFormMessage.classList.remove('invalid-field');
    userEmailError.style.display = 'none';
    userMessageError.style.display = 'none';
    isEmailValid = false;
    isMessageValid = false;
    contactSection.classList.remove('invalid-field');
    contactSection.classList.remove('valid-field');
    contactFormButton.classList.remove('invalid-field');
    contactFormButton.classList.remove('valid-field');
    userEmailSuccess.style.display = 'none';
    header.style.pointerEvents = '';
    main.style.pointerEvents = '';
    footer.style.pointerEvents = '';
  });

}

export { getSpanish };
