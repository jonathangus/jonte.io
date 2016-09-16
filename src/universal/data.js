import React from 'react';
import Skill from './components/Skill/Skill';

export default {
  cv: {
    items: [
      {
        dates: 'Jun 2014 - Present',
        label: 'Wunderkraut - Full stack developer',
        text: <p>Wunderkraut is one of the biggest <Skill skill={'Drupal'} /> agencies in Europe. We exclusivly work agile and my main role is frontend. I work daily with <Skill skill={'Javascript/ES6'} /> and <Skill skill={'Sass'} />. When I feel to spice it up  <Skill skill={'Symfony'} /> is where I turn. Depending on projects I use frameworks like <Skill skill={'React'} />, <Skill skill={'Redux'} /> and even <Skill skill={'Angular'} /></p>
      },
      {
        dates: 'Jan 2014 - Jun 2014',
        label: 'TinyMondo - Intern',
        text: <p>At TinyMondo I learned a bunch! I got introduced to <Skill skill={'Git'} /> and developed my skills in <Skill skill={'Sass'} />, <Skill skill={'Javascript'} /> and <Skill skill={'PHP'} /> like crazy.</p>
      },
      {
        dates: 'Aug 2013 - Jan 2014',
        label: 'FernvikBalotis - Intern',
        text: <p>Here i started working extra the week i started Nackademin. FernvikBalotis is a design studio who thaught me the value of <Skill skill={'UX'} />. Here i started my career working mostly with <Skill skill={'Wordpress'} /> and <Skill skill={'Css'} /></p>
      }
    ]
  },
  work: [
    {
      title: 'Gymbror',
      text: 'Offline first gym progress app. Built with react-native with support from Redux. In the backend we have a node setup with MongoDB which makes it possible to sync your progress to diffrent devices. As authentication we use Facebook SDK.',
      thumbnail: require('../images/Arnold.jpg'),
      image: require('../images/Gymbror.jpg'),
      link: {
        text: 'Get code on Github',
        url: 'https://github.com/jonathangus/gymbror'
      },
      skills: [
        'React Native', 'Redux', 'Facebook SDK', 'Node', 'MongoDB'
      ]
    },
    {
      title: 'Wunderkraut.se',
      thumbnail: require('../images/wk.jpg'),
      text: '@TODO Write more detailed text about this project.',
      skills: [
        'Drupal', 'Javascript', 'React', 'Symfony'
      ]
    },
    {
      title: 'Jonte.io',
      thumbnail: require('../images/me_thumb.jpg'),
      text: 'High performing react application with server rendering. ',
      image: require('../images/jonte.png'),
      skills: [
        'Javascript/es6', 'React', 'Node', 'Webpack'
      ],
      link: {
        text: 'Get code on Github',
        url: 'https://github.com/jonathangus/portfolio'
      },
    },
    {
      title: 'Comhemplay.se',
      thumbnail: require('../images/comhem.jpg'),
      text: '@TODO Write more detailed text about this project.',
      skills: [
        'Drupal', 'Javascript', 'Angular', 'Css'
      ]
    },
    {
      title: 'Kandima.com',
      thumbnail: require('../images/kandima.jpg'),
      text: '@TODO Write more detailed text about this project.',
      skills: [
        'Drupal', 'Javascript', 'Css', 'Symfony'
      ]
    },
    {
      title: 'Gymbror api',
      thumbnail: require('../images/Arnold.jpg'),
      text: '@TODO Write more detailed text about this project.',
      link: {
        text: 'Get code on Github',
        url: 'https://github.com/jonathangus/gymbror-server'
      },
      skills: [
        'Node', 'MongoDB'
      ]
    },
    {
      title: 'resourcecentre.savethechildren.se',
      thumbnail: require('../images/save_the_children.jpg'),
      text: '@TODO Write more detailed text about this project.',
      skills: [
        'Drupal', 'Javascript', 'Css',
      ]
    },
  ]
}
