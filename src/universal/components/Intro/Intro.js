import React, { Component } from 'react';
import InfoItem from '../InfoItem/InfoItem';
import Granim from 'granim';
import Egg from '../../extra/egg';


import styles from './Intro.css';

export default class Intro extends Component {
  constructor() {
    super();
    const age = this.calculateAge();

    this.state = {
      image: require('../../../images/me.jpg'),
      data: [
        {
          label: 'Age',
          value: age[0],
          decimal: age[1]
        },
        {
          label: 'Location',
          value: 'Stockholm'
        },
        {
          label: 'Self proclaimed',
          jobs: [
            'Front-end developer',
            'React fanatic',
            'Backend compatible',
            'Sass lunatic',
            'Node enthusiast',
            'CSS3 abuser',
            'Redux doctor',
            'Babel lover',
            'MongoDB fanboy',
            'Reluctant Drupalista',
            'React Native warrior',
            'Git pirate',
            'Angular alumni'
          ]
        }
      ]
    }
  }

  calculateAge() {
    var birthDate = new Date('1994/04/09');
    var now       = new Date;
    var duration  = now - birthDate;
    var years     = duration / 31556900000;
    return years.toFixed(9).toString().split('.');
  }

  componentDidMount() {

    new Egg().AddCode(['w', 't', 'f'], () => {
      this.setState({
        image: require('../../../images/ful.jpg')
      })
    }).Listen();

    setInterval(() => {
      const data = this.state.data;
      const age = this.calculateAge();
      data[0].value = age[0];
      data[0].decimal = age[1];
      this.setState({data: data});
    }, 100);
    var granimInstance = new Granim({
      element: '#canvas-radial',
      direction: 'diagonal',
      // opacity: [.8, .5, 0],
      opacity: [.9, .7, .7],
      isPausedWhenNotInView: true,
      states : {
        "default-state": {
          gradients: [
            ['#485563', '#0F516B', '#0F516B'],
            ['#8e583a', '#bb7f5f', '#bb7f5f'],
          ],
          transitionSpeed: 8000
        }
      }
    });
  }

  render () {
    const { data, image } = this.state;

    return (

      <header className={styles.Intro}>
        <h1 className={styles.title}>Jonathan Gustafsson</h1>
        <div className={styles.fullImage} style={{backgroundImage: `url(${image})`}}>
          <canvas className={styles.canvas} id="canvas-radial"></canvas>
        </div>
        <div className={styles.wrap}>
          <div className={styles.inner}>
          {data.map((d, k) => <InfoItem key={k} {...d} />)}
          <div className={styles.social}>
            <a href="https://github.com/jonathangus" title="Github" className={styles.media + ' ' + styles.github}></a>
            <a href="https://www.linkedin.com/in/jonathan-gustafsson-5bb10080" title="Linkedin" className={styles.media + ' ' + styles.linkedin}></a>
          </div>
          <a title="Email me" href="mailto:jonathan.gustafsson@hotmail.com"className={styles.email}>jonathan.gustafsson@hotmail.com</a>
        </div>
        </div>
        <a className={styles.cred} href="https://www.flickr.com/photos/eriknson">Photo credit Erik Nilsson</a>
      </header>
    )
  }
}
