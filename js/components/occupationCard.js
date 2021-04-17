class OccupationCard {
  constructor() {
    this.createOccupationCard = function (data) {
      const dataDisplayed = data.map((element) => {
        return `
        <div class='occupation__top'>
            <h1>${element.text}</h1>
            <h2>${element.text}?</h2>
        </div>
            `;
      });
      return dataDisplayed;
    };
  }
}

export { OccupationCard as default };
