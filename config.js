module.exports = {
  pathPrefix: '',
  siteUrl: 'https://bumbl.ru',
  siteTitle: 'Артур Гайфутдинов',
  siteDescription: 'Logbook of a software developer',
  author: 'Артур Гайфутдинов',
  postsForArchivePage: 3,
  defaultLanguage: 'ru',
  pages: {
    home: '/',
    blog: 'blog',
    contact: 'contact',
    resume: 'resume',
  },
  social: {
    github: 'https://github.com/Ezcube',
    facebook: 'https://www.facebook.com/gaiphutdinov',
    twitter: 'https://twitter.com/',
    instagram: 'https://www.instagram.com/ezcube/',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/dcb6af11-46ec-439b-b9d9-3ddece9ebbc3',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    angular: {
      description: 'Angular is an open source web application platform.',
    },
    electron: {
      description: 'Electron is a framework for building cross-platform desktop applications with web technology.',
    },
    javascript: {
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
    },
    laravel: {
      description: 'Laravel is a PHP framework for building web applications following the MVC pattern.',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.',
    },
    sass: {
      description: 'Sass is a stable extension to classic CSS.',
    },
    typescript: {
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    },
    react: {
      description: 'React is an open source JavaScript library used for designing user interfaces.',
    },
    vuejs: {
      name: 'Vue.js',
      description: 'Vue.js is a JavaScript framework for building interactive web applications.',
    },
  },
};
