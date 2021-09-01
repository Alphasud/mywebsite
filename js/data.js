const data = [
  {
    french: [
      {
        id: 1,
        name: 'Charles',
        fName: 'Denneulin',
        tagline: 'Développeur Front-End Junior',
        description: `A la recherche d'une alternance ou d'un poste junior.<br>Ma motivation : La perspective de pouvoir progresser aux côtés de développeur•euse•s chevronné•e•s et dans un environnement technologique stimulant.`,
        photo: './profilepicture.jpg',
        mail: 'c.denneulin@gmail.com',
        github: 'https://github.com/Alphasud',
        linkedin: 'https://www.linkedin.com/in/charlesdenneulin/',
        message: 'Adresse mail copiée dans le presse-papier !',
      },
    ],
  },
  {
    english: [
      {
        id: 1,
        name: 'Charles',
        fName: 'Denneulin',
        tagline: 'Junior Front-End Web Developper',
        description: `Looking for an apprenticeship or a junior position.<br>I am thrilled by the idea of working and learning amongst seasoned developpers in a stimulating environement.`,
        photo: './profilepicture.jpg',
        mail: 'c.denneulin@gmail.com',
        github: 'https://github.com/Alphasud',
        linkedin: 'https://www.linkedin.com/in/charlesdenneulin/',
        message: 'Mail address copied in the clipboard !',
      },
    ],
  },
  {
    spanish: [
      {
        id: 1,
        name: 'Charles',
        fName: 'Denneulin',
        tagline: 'Desarollador Front-End Junior',
        description: `Buscando por un curso de formación en alternancía o un puesto junior.<br>Mi motivación : trabajar y apprender con desarollador(es) experto(s) en una atmósfera tecnológicamente estimulante.`,
        photo: './profilepicture.jpg',
        mail: 'c.denneulin@gmail.com',
        github: 'https://github.com/Alphasud',
        linkedin: 'https://www.linkedin.com/in/charlesdenneulin/',
        message: 'Dirección de correo copiada en el portapapeles !',
      },
    ],
  },
];

const occupation = [
  {
    french: [
      {
        text: 'Depuis janvier 2021',
        textother: `En formation avec <a class="occupation__linkOC" href="https://openclassrooms.com/fr/" target="_blank" rel="noopener noreferrer">OpenClassroom</a> sur le parcours <a class="occupation__linkProgr" href="https://openclassrooms.com/fr/paths/314-developpeur-front-end" target="_blank" rel="noopener noreferrer">Développeur Front-End</a>.<br>`,
      },
    ],
  },
  {
    english: [
      {
        text: 'Since january 2021 :',
        textother:
          'Student at <a class="occupation__linkOC" href="https://openclassrooms.com/en/" target="_blank" rel="noopener noreferrer">OpenClassroom</a> on the <a class="occupation__linkProgr" href="https://openclassrooms.com/en/paths/315-front-end-developer" target="_blank" rel="noopener noreferrer">Front-End developper</a> training program.',
      },
    ],
  },
  {
    spanish: [
      {
        text: 'Desde enero 2021 :',
        textother:
          'Alumno a <a class="occupation__linkOC" href="https://openclassrooms.com/en/" target="_blank" rel="noopener noreferrer">OpenClassroom</a> en la cualificación de <a class="occupation__linkProgr" href="https://openclassrooms.com/en/paths/315-front-end-developer" target="_blank" rel="noopener noreferrer">desarollador Front-End</a>.',
      },
    ],
  },
];

const projects = [
  {
    french: [
      {
        id: '2',
        title: 'Reservia',
        description: `Intégration d'une maquette`,
        techno: 'HTML5 / CSS',
        photo: './img/projet2.png',
        website: 'https://alphasud.github.io/CharlesDenneulin_2_12012021',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_2_12012021',
      },
      {
        id: '3',
        title: 'ohmyfood',
        description: `Intégration de maquettes et création d'animations CSS`,
        techno: 'HTML5 / SCSS',
        photo: './img/projet3.png',
        website:
          'https://alphasud.github.io/CharlesDenneulin_3_27012021/index.html',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_3_27012021',
      },
      {
        id: '4',
        title: 'GameOn',
        description: `Intégration d'une maquette et validation de formulaire`,
        techno: 'HTML5 / SCSS / Vanilla JS',
        photo: './img/projet4.png',
        website: 'https://alphasud.github.io/GameOn-website-FR',
        sourcecode: 'https://github.com/Alphasud/GameOn-website-FR',
      },
      {
        id: '6',
        title: 'FishEye',
        description: `Intégration d'une maquette, orientée accessibilité (aria),  plusieurs features: filter, form, lightbox, sort, like button.`,
        techno: 'HTML5 / SCSS / Vanilla JS / ARIA / ESLint',
        photo: './img/projet6.png',
        website: 'https://alphasud.github.io/CharlesDenneulin_6_18022021/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_6_18022021',
      },
      {
        id: '7',
        title: 'Les Petits Plats',
        description: `Intégration d'une maquette, et création d'un algorithme de recherche`,
        techno: 'HTML5 / SCSS / Vanilla JS / ESlint',
        photo: './img/projet7.png',
        website: 'https://alphasud.github.io/CharlesDenneulin_7_24032021/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_7_24032021',
      },
      {
        id: '11',
        title: 'Kasa',
        description: `Intégration d'une maquette`,
        techno: 'HTML5 / SCSS / ReactJS / ReactRouter',
        photo: './img/projet11.png',
        website: 'https://kasa-project.netlify.app/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_11_17062021',
      },
      {
        id: '12',
        title: 'SportSee',
        description: `Intégration d'une maquette, données via API`,
        techno: 'HTML5 / SCSS / ReactJS / ReactRouter / Recharts',
        photo: './img/projet12.png',
        website: '/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_12_13072021',
      },
    ],
  },
  {
    english: [
      {
        id: '2',
        title: 'Reservia',
        description: `Mockup integration`,
        techno: 'HTML5 / CSS',
        photo: './img/projet2.png',
        website: 'https://alphasud.github.io/CharlesDenneulin_2_12012021',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_2_12012021',
      },
      {
        id: '3',
        title: 'ohmyfood',
        description: `Mockup integration, CSS animations`,
        techno: 'HTML5 / SCSS',
        photo: './img/projet3.png',
        website:
          'https://alphasud.github.io/CharlesDenneulin_3_27012021/index.html',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_3_27012021',
      },
      {
        id: '4',
        title: 'GameOn',
        description: `Mockup integration and form validation`,
        techno: 'HTML5 / SCSS / Vanilla JS',
        photo: './img/projet4.png',
        website: 'https://alphasud.github.io/GameOn-website-FR',
        sourcecode: 'https://github.com/Alphasud/GameOn-website-FR',
      },
      {
        id: '6',
        title: 'FishEye',
        description: `Mockup integration, accessibility (aria),  several features: filter, form, lightbox, sort, like button.`,
        techno: 'HTML5 / SCSS / Vanilla JS / ARIA / ESLint',
        photo: './img/projet6.png',
        website: 'https://alphasud.github.io/CharlesDenneulin_6_18022021/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_6_18022021',
      },
      {
        id: '7',
        title: 'Les Petits Plats',
        description: `Mockup integration and creation of a search algorithm`,
        techno: 'HTML5 / SCSS / Vanilla JS / ESlint',
        photo: './img/projet7.png',
        website: 'https://alphasud.github.io/CharlesDenneulin_7_24032021/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_7_24032021',
      },
      {
        id: '11',
        title: 'Kasa',
        description: `Mockup integration`,
        techno: 'HTML5 / SCSS / ReactJS / ReactRouter',
        photo: './img/projet11.png',
        website: 'https://kasa-project.netlify.app/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_11_17062021',
      },
      {
        id: '12',
        title: 'SportSee',
        description: `Mockup integration, data fetch from API`,
        techno: 'HTML5 / SCSS / ReactJS / ReactRouter / Recharts',
        photo: './img/projet12.png',
        website: '/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_12_13072021',
      },
    ],
  },
  {
    spanish: [
      {
        id: '2',
        title: 'Reservia',
        description: `Integración de un diseño de página web`,
        techno: 'HTML5 / CSS',
        photo: './img/projet2.png',
        website: 'https://alphasud.github.io/CharlesDenneulin_2_12012021',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_2_12012021',
      },
      {
        id: '3',
        title: 'ohmyfood',
        description: `Integración de un diseño de página web`,
        techno: 'HTML5 / SCSS',
        photo: './img/projet3.png',
        website:
          'https://alphasud.github.io/CharlesDenneulin_3_27012021/index.html',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_3_27012021',
      },
      {
        id: '4',
        title: 'GameOn',
        description: `Integración de un diseño de página web y validación de un formulario`,
        techno: 'HTML5 / SCSS / Vanilla JS',
        photo: './img/projet4.png',
        website: 'https://alphasud.github.io/GameOn-website-FR',
        sourcecode: 'https://github.com/Alphasud/GameOn-website-FR',
      },
      {
        id: '6',
        title: 'FishEye',
        description: `Integración de un diseño, accesibilidad (aria),  varios features: filter, form, lightbox, sort, botón de like.`,
        techno: 'HTML5 / SCSS / Vanilla JS / ARIA / ESLint',
        photo: './img/projet6.png',
        website: 'https://alphasud.github.io/CharlesDenneulin_6_18022021/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_6_18022021',
      },
      {
        id: '7',
        title: 'Les Petits Plats',
        description: `Integración de un diseño, y algoritmo de búsqueda`,
        techno: 'HTML5 / SCSS / Vanilla JS / ESlint',
        photo: './img/projet7.png',
        website: 'https://alphasud.github.io/CharlesDenneulin_7_24032021/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_7_24032021',
      },
      {
        id: '11',
        title: 'Kasa',
        description: `Integración de un diseño de página web`,
        techno: 'HTML5 / SCSS / ReactJS / ReactRouter',
        photo: './img/projet11.png',
        website: 'https://kasa-project.netlify.app/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_11_17062021',
      },
      {
        id: '12',
        title: 'SportSee',
        description: `Integración de un diseño, datos de API`,
        techno: 'HTML5 / SCSS / ReactJS / ReactRouter / Recharts',
        photo: './img/projet12.png',
        website: '/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_12_13072021',
      },
    ],
  },
];

export { data, occupation, projects };
