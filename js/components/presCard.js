class PresentationCard {
  constructor() {
    this.createPresentationCard = function (data) {
      const dataDisplayed = data.map((element) => {
        return `
        <div class='presentation__top'>
            <div class='presentation__top__left'>
                <img class='presentation__top__left__photo' src='${element.photo}' alt='${element.name}'>
            </div>
            <div class='presentation__top__right'>
                <h1 class='presentation__top__right__name'>${element.name} ${element.fName}</h1>
                <h2 class='presentation__top__right__tagline'>${element.tagline}</h2>
            </div>
        </div>
        <div class='presentation__social'>
          <a class='resume-icon' href="${element.resume}" target="_blank" rel="noopener noreferrer"><i class="fas fa-scroll fa-2x"></i></a>
          <span class='resume-message'>${element.toolTip}</span>
          <span class='presentation__social__mail'><i class="fas fa-envelope fa-2x"></i></span>
          <a href="${element.github}" target="_blank" rel="noopener noreferrer"><i class="fab fa-github fa-2x"></i></a>
          <a href="${element.linkedin}" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-2x"></i></a>
        </div>
        <span class='copy-message'>${element.message}</span>
        <p class='presentation__description'>${element.description}</p>
            `;
      });
      return dataDisplayed;
    };
  }
}

export { PresentationCard as default };
