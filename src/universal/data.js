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
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In scelerisque, lacus sed congue eleifend, lacus arcu tincidunt velit, vitae varius ipsum dolor nec enim. Duis efficitur vulputate turpis, id eleifend magna. Aenean dignissim pellentesque turpis sit amet ultrices. Nam id diam eu dolor commodo bibendum. Nullam rhoncus enim dui, consequat interdum ante euismod a. Curabitur eget diam lorem.',
      thumbnail: require('../images/Arnold.jpg'),
      image: require('../images/Gymbror.jpg'),
      link: {
        text: 'Github',
        url: 'https://github.com/jonathangus/gymbror'
      },
      skills: [
        'React Native', 'Node', 'MongoDB'
      ]
    },
    {
      title: 'Wunderkraut.se2',
      text: 'Lorem lorem',
      thumbnail: 'https://i.imgur.com/amMCkxW.png',
      link: {
        text: 'Github',
        url: 'https://github.com/jonathangus/gymbror'
      },
      skills: [
        'React Native', 'Node', 'MongoDB'
      ]
    },
    {
      title: 'Wunderkraut.se3',
      text: 'Lorem lorem',
      thumbnail: 'https://scontent-arn2-1.xx.fbcdn.net/t31.0-8/14249975_1362452657162164_6323881248985551478_o.jpg',
      link: {
        text: 'Github',
        url: 'https://github.com/jonathangus/gymbror'
      },
      skills: [
        'React Native', 'Node', 'MongoDB'
      ]
    },
    {
      title: 'Wunderkraut.se4',
      text: 'Lorem lorem',
      thumbnail: 'https://i.imgur.com/YweBL8a.jpg',
      link: {
        text: 'Github',
        url: 'https://github.com/jonathangus/gymbror'
      },
      skills: [
        'React Native', 'Node', 'MongoDB'
      ]
    },
    {
      title: 'Wunderkraut.se4',
      text: 'Lorem lorem',
      thumbnail: 'https://i.imgur.com/YweBL8a.jpg',
      link: {
        text: 'Github',
        url: 'https://github.com/jonathangus/gymbror'
      },
      skills: [
        'React Native', 'Node', 'MongoDB'
      ]
    },
    {
      title: 'Wunderkraut.se4',
      text: 'Lorem lorem',
      thumbnail: 'https://i.imgur.com/YweBL8a.jpg',
      link: {
        text: 'Github',
        url: 'https://github.com/jonathangus/gymbror'
      },
      skills: [
        'React Native', 'Node', 'MongoDB'
      ]
    },
    {
      title: 'Wunderkraut.se4',
      text: 'Lorem lorem',
      thumbnail: 'https://i.imgur.com/YweBL8a.jpg',
      link: {
        text: 'Github',
        url: 'https://github.com/jonathangus/gymbror'
      },
      skills: [
        'React Native', 'Node', 'MongoDB'
      ]
    },
  ]
}
