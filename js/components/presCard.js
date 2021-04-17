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
        <p class='presentation__description'>${element.description}</p>
            `;
      });
      return dataDisplayed;
    };
  }
}

export { PresentationCard as default };
