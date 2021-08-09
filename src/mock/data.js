import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aaron', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Why should Corel hire me?', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile1.jpg',
  paragraphOne: 'Apart from being a very motivated and an outgoing person. I am really up for a challenge. I also thrive under pressure',
  paragraphTwo: 'I am pretty easy to work with and am really eager to learn. Working on Corel seems to be a very interesting project with unique challenges',
  paragraphThree: 'So, ready to give me a chance? haha',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Food Commune',
    info: 'Its a food ordering app with Stripe payment integration and Live Chat ',
    info2: 'Its built on React, MongoDb, Express and Node',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'GRT Nav',
    info: 'Its an android application which shows live location of all the busses',
    info2: 'A .pb file is scraped from the GRT website and we use Google Maps  to display the trackers',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Covid Tracker',
    info: 'A  JS website which displays the Covid cases by consuming an API ',
    info2: 'We use mapbox to display different stats and case counts',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ron.hilkina@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aaronkolanti/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
