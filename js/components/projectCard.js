class ProjectCard {
  constructor() {
    this.createProjectCard = function (data) {
      const dataDisplayed = data.map((element) => {
        let isWebsite;
        element.website === 'none' ? isWebsite = false : isWebsite = true;
        return `
        <article class='projects__elements__item'>
            <a href='${element.website}' class='projects__elements__item__image'target='_blank' rel='noopener noreferrer'>
            <img src='${element.photo}' alt='${element.title}'>
            </a>
            <h2 class='projects__elements__item__title'>${element.title}</h2>
            <p class='projects__elements__item__techno'>${element.techno}</p>
            <p class='projects__elements__item__description'>${element.description}</p>
            <a class='projects__elements__item__link' href='${element.sourcecode}' target='_blank' rel='noopener noreferrer'>
              <span>
                <p>Source Code</p>
                <p>Source Code</p>
              </span>
            </a>
            ${isWebsite
              ? `<a class='projects__elements__item__link' href='${element.website}' target='_blank' rel='noopener noreferrer'>
                  <span>
                    <p>Website</p>
                    <p>Website</p>
                  </span>
                </a>`
              : ``}
        </article>
            `;
      });
      return dataDisplayed.join('');
    };
  }
}

export { ProjectCard as default };
