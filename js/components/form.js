class ContactForm {
  constructor() {
    this.createContactForm = function (data) {

    const dataDisplayed = data.map((element) => {
        return `
        <form class='contact__form' id="my-form" action="https://formspree.io/f/mpzkbdvd" method="POST">
            <span class='contact__form__close'><i class="fas fa-times fa-2x"></i></span>
            <label>${element.email}:</label>
            <input class='contact__form__email' type="email" name="email" />
            <label>${element.message}:</label>
            <textarea class='contact__form__message' type="text" name="message"></textarea>
            <button class='contact__form__button' id="my-form-button">Submit</button>
            <p id="my-form-status"></p>
        </form>
            `;
      });
      return dataDisplayed;
    };
  }
}

export { ContactForm as default };
