const data = [
  {
    french: [
      {
        id: 1,
        name: 'Charles',
        fName: 'Denneulin',
        tagline: 'Développeur Front-End Junior',
        description: `Actuellement en formation Développeur Front-end avec <a class="presentation__link" href="">OpenClassroom</a>.<br>A la recherche d'une alternance cette année (pour ma formation OpenClassroom) ou pour l'année d'après avec l'ENI. Je suis extrêmement motivé par la perspective de pouvoir progresser au côté de développeur-euse-s chevronné-e-s et dans un environnement technologique stimulant.`,
        photo: './picture.png',
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
        description: `Now learning on <a class="presentation__link" href="">OpenClassroom</a>. Illum sed optio dolor assumenda soluta ipsa quae accusantium vitae minus. Illum sed optio dolor assumenda soluta ipsa quae accusantium vitae minus.`,
        photo: './picture.png',
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
        description: `Ahora estudiando sobre la plataforma <a class="presentation__link" href="">OpenClassroom</a>. Illum sed optio dolor assumenda soluta ipsa quae accusantium vitae minus. Illum sed optio dolor assumenda soluta ipsa quae accusantium vitae minus.`,
        photo: './picture.png',
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
        techno: 'HTML5 / SCSS / Vanilla JS / ARIA',
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
        techno: 'HTML5 / SCSS / Vanilla JS / ARIA',
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
    ],
  },
  {
    spanish: [
      {
        id: '2',
        title: 'Reservia',
        description: `Intégration d'un maquette`,
        techno: 'HTML5 / CSS',
        photo: './img/projet2.png',
        website: 'https://alphasud.github.io/CharlesDenneulin_2_12012021',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_2_12012021',
      },
      {
        id: '3',
        title: 'ohmyfood',
        description: `Intégration d'un maquette`,
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
        techno: 'HTML5 / SCSS / Vanilla JS / ARIA',
        photo: './img/projet6.png',
        website: 'https://alphasud.github.io/CharlesDenneulin_6_18022021/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_6_18022021',
      },
      {
        id: '7',
        title: 'Les Petits Plats',
        description: `Intégration d'une maquette, et d'un algorithme de recherche`,
        techno: 'HTML5 / SCSS / Vanilla JS / ESlint',
        photo: './img/projet7.png',
        website: 'https://alphasud.github.io/CharlesDenneulin_7_24032021/',
        sourcecode: 'https://github.com/Alphasud/CharlesDenneulin_7_24032021',
      },
    ],
  },
];

export { data, projects };
