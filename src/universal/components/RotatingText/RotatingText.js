import React, { Component } from 'react';

import styles from './RotatingText.css';

export default class RotatingText extends Component {
  constructor(props) {
    super(props);

    const jobs = [];

    this.props.jobs.forEach(j => {
      jobs.push(j.split(''));
    });

    this.state = {
      activeIndex: 0,
      jobs: jobs,
      activeLetter: jobs[0].length
    }
  }

  componentDidMount() {
    setInterval(() => {
      // const { jobs, activeIndex } = this.state;
      // const oldIndex = activeIndex;
      // const newIndex = jobs.length - 1 == activeIndex ? 0 : activeIndex + 1;
      //
      // const oldWord = jobs[oldIndex]
      // const newWord = jobs[newIndex]
      //
      // newWord.forEach((w, index) => {
      //   setTimeout(() => {
      //     this.setState({
      //       activeLetter: this.state.activeLetter + 1,
      //     });
      //   }, index * 50);
      // });

      const { jobs, activeIndex } = this.state;
      const newIndex = jobs.length - 1 == activeIndex ? 0 : activeIndex + 1;
      this.setState({
        activeIndex: newIndex,
        activeLetter: 0
      });

      const newWord = jobs[newIndex];
      newWord.forEach((w, index) => {
        setTimeout(() => {
          this.setState({
            activeLetter: this.state.activeLetter + 1,
          });
        }, index * 50);
      });

    }, 2500);
  }

  render () {
    const { jobs, activeIndex, activeLetter } = this.state;

    return (
      <ul className={styles.jobs}>
        {jobs.map((j, k) =>
          <li key={k} className={k == activeIndex ? styles.visible : styles.hidden}>
            {j.map((s, index) => <i key={index} className={index <= activeLetter ? styles.in : styles.out}>{s}</i>)}
          </li>
        )}
      </ul>
    )
  }
}
