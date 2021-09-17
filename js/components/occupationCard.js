class OccupationCard {
  constructor() {
    this.createOccupationCard = function (data) {
      const dataDisplayed = data.map((element) => {
        return `
        <div class='occupation__top'>
            <h1>${element.text}</h1>
            <div class='occupation__top__stack'>
              <div class='occupation__top__stack__row'>
                <i class="fab fa-html5 fa-4x"></i>
                <i class="fab fa-css3-alt fa-4x"></i>
                <i class="fab fa-js-square fa-4x"></i>
                <i class="fab fa-bootstrap fa-4x"></i>
              </div>
              <div class='occupation__top__stack__row'>
                <i class="fab fa-git-alt fa-4x"></i>
                <i class="fab fa-sass fa-4x"></i>
                <i class="fab fa-react fa-4x"></i>
              </div>
            </div>
            <p>${element.textother}</p>
        </div>
            `;
      });
      return dataDisplayed;
    };
  }
}

export { OccupationCard as default };
