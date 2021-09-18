class ContactForm {
  constructor() {
    this.createContactForm = function (data) {

    const dataDisplayed = data.map((element) => {
        return `
        <form class='contact__form' id="my-form" action="https://formspree.io/f/mpzkbdvd" method="POST">
            <span class='contact__form__close'><i class="fas fa-times fa-2x"></i></span>
            <label class='contact__form__label__email'>${element.email}:</label>
            <input class='contact__form__email' type="email" name="email" />
            <p class='error-message__email'>${element.errorEmail}</p>
            <p class='success-message__email'>👍</p>
            <label class='contact__form__label__message'>${element.message}:</label>
            <textarea class='contact__form__message' type="text" name="message"></textarea>
            <p class='error-message__message'>${element.errorMessage}</p>
            <button class='contact__form__button' id="my-form-button">${element.bouton}</button>
            <p class='contact__form__status' id="my-form-status"></p>
        </form>
            `;
      });
      return dataDisplayed;
    };
  }
}

export { ContactForm as default };
