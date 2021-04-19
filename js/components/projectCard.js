class ProjectCard {
  constructor() {
    this.createProjectCard = function (data) {
      const dataDisplayed = data.map((element) => {
        return `
        <article class='projects__elements__item'>
            <div class='projects__elements__item__image'>
            <img src='${element.photo}' alt='${element.title}'>
            </div>
            <h2 class='projects__elements__item__title'>${element.title}</h2>
            <p class='projects__elements__item__techno'>${element.techno}</p>
            <p class='projects__elements__item__description'>${element.description}</p>
            <a class='projects__elements__item__link' href='${element.sourcecode}' target='_blank' rel='noopener noreferrer'>Source Code</a>
            <a class='projects__elements__item__link' href='${element.website}' target='_blank' rel='noopener noreferrer'>Website</a>
        </article>
            `;
      });
      return dataDisplayed.join('');
    };
  }
}

export { ProjectCard as default };
