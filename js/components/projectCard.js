class ProjectCard {
  constructor() {
    this.createProjectCard = function (data) {
      const dataDisplayed = data.map((element) => {
        return `
        <article class='projects__elements__item'>
            <h2>${element.title}</h2>
            <div class='projects__elements__item__image'>
            <img src='${element.photo}' alt='${element.title}'>
            </div>
            <p class='projects__elements__item__description'>${element.description}</p>
            <p class='projects__elements__item__techno'>${element.techno}</p>
            <a class='projects__elements__item__link' href='${element.website}'>Website</a>
            <a class='projects__elements__item__link' href='${element.sourcecode}'>Source Code</a>
        </article>
            `;
      });
      return dataDisplayed.join('');
    };
  }
}

export { ProjectCard as default };
