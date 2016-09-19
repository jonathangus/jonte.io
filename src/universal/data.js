import React from 'react';
import Skill from './components/Skill/Skill';


export default {
  number: '+46 70 751 95 29',
  cv: {
    items: [
      {
        dates: 'Jun 2014 - Present',
        label: 'Wunderkraut - Full stack developer',
        text: <p>Wunderkraut is one of the biggest <Skill skill={'Drupal'} /> agencies in Europe. We exclusivly work agile and my main role is frontend. I work daily with <Skill skill={'Javascript/ES6'} /> and <Skill skill={'Sass'} />. I also like to write backend in <Skill skill={'php'} /> with <Skill skill={'Symfony'} />. Depending on projects I use frameworks like <Skill skill={'React'} />, <Skill skill={'Redux'} /> and <Skill skill={'Angular'} /> </p>
      },
      {
        dates: 'Jan 2014 - Jun 2014',
        label: 'TinyMondo - Intern',
        text: <p>At TinyMondo I learned so much! I got introduced to <Skill skill={'Git'} /> and developed my skills in <Skill skill={'Sass'} />, <Skill skill={'Javascript'} /> and <Skill skill={'PHP'} /> like crazy. I got introduced to  <Skill skill={'Symfony'} /> when I started working with  <Skill skill={'Laravel'} /> that I liked very much.</p>
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
      text: <p>Offline first gym progress app. Built with react-native with support from Redux. In the backend we have a node setup with MongoDB which makes it possible to sync your progress to diffrent devices. As authentication we use Facebook SDK.</p>,
      thumbnail: require('../images/Arnold.jpg'),
      image: require('../images/Gymbror.jpg'),
      link: {
        text: 'Get code on Github',
        url: 'https://github.com/jonathangus/gymbror'
      },
      skills: [
        'React Native', 'Redux', 'Facebook SDK', 'Node'
      ]
    },
    {
      title: 'Wunderkraut',
      url: 'https://wunderkraut.se/',
      thumbnail: require('../images/wk.jpg'),
      text: <p>This was my first Drupal 8 website and it was a real challenge! When we started working Drupal 8 where still in beta with many bugs. But we succeed on creating a good looking site and I got to introduce React, which was in beta as well. <br></br><br></br>I worked a lot with Angular doing REST calls for creating cool interfaces such the dynamic TV Guide. I also with VOD and linear streaming.<br></br><br></br>This work was done during my employment at <a target="_blank" style={{color: '#E56716'}} href="https://wunderkraut.se/">Wunderkraut</a></p>,
      skills: [
        'Drupal', 'Javascript', 'React', 'Symfony', 'Css'
      ]
    },
    {
      title: 'Jonte.io',
      thumbnail: require('../images/me_thumb.jpg'),
      text: <p>High performing react application with server rendering. </p>,
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
      title: 'Comhemplay',
      url: 'http://comhemplay.se/',
      thumbnail: require('../images/comhem.jpg'),
      text: <p>Comhem is one of the biggest tv and internet provider in Sweden. Our task were to redo there old streaming service with a new and fresh one. My role in this project was exclusivly frontend. <br></br><br></br>I worked a lot with Angular doing REST calls for creating cool interfaces such the dynamic TV Guide. I also with VOD and linear streaming.<br></br><br></br>This work was done during my employment at <a target="_blank" style={{color: '#E56716'}} href="https://wunderkraut.se/">Wunderkraut</a></p> ,
      skills: [
        'Drupal', 'Javascript', 'Angular', 'Css'
      ]
    },
    {
      title: 'Kandima',
      image: require('../images/kandima_gif.gif'),
      url: 'http://kandima.com/',
      thumbnail: require('../images/kandima.jpg'),
      text: <p>Kandima is luxurious island in the Maldives. On this project I built frontend with some playful animations and backend with Drupal 8. <br></br><br></br>This work was done during my employment at <a target="_blank" style={{color: '#E56716'}} href="https://wunderkraut.se/">Wunderkraut</a></p>,
      skills: [
        'Drupal', 'Javascript', 'Css', 'Symfony'
      ]
    },
    {
      title: 'Gymbror api',
      thumbnail: require('../images/Arnold.jpg'),
      text: <p>A backend built with Node and MongoDB for my react native application.</p>,
      link: {
        text: 'Get code on Github',
        url: 'https://github.com/jonathangus/gymbror-server'
      },
      skills: [
        'Node', 'MongoDB'
      ]
    },
    {
      title: 'Save the children resource centre',
      url: 'http://resourcecentre.savethechildren.se/',
      thumbnail: require('../images/save_the_children.jpg'),
      text: <p>We remade the front-end for Save the childrens resource center. The resouce center is a collection of articles and documents. <br></br><br></br>This work was done during my employment at <a target="_blank" style={{color: '#E56716'}} href="https://wunderkraut.se/">Wunderkraut</a></p>,
      skills: [
        'Drupal', 'Javascript', 'Css', 'Php',
      ]
    },
  ]
}
