import React, { Component } from 'react';
import data from '../../data';
import Skill from '../Skill/Skill';

import styles from './Work.css';

export default class Work extends Component {
  constructor() {
    super();
    this.state = {
      work: data.work,
      selectedIndex: null,
      started: false,
      workShown: false
    }
  }

  setActive(index) {
    const newState = {
      selectedIndex: index
    }

    if(!this.state.started) {
      newState.started = true;

      setTimeout(() => {
        this.setState({
          workShown: true
        })
      }, 400);
    }

    this.setState(newState);
  }

  render () {
    const { work, selectedIndex, started, workShown} = this.state;
    const selected = work[selectedIndex];

    return (
      <section className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Selected work</h2>
          <div className={styles.wrap + ' ' + (started ? styles.wrapAir: '')}>
            <div className={styles.hexagons}>
              <div className={styles.thumbs + ' ' + (started ? styles.workSelected : '')}>
              {work.map((w, index) =>
                <div  key={index} className={styles.hexagon + ' ' + (selectedIndex == index ? styles.selectedHeca: '')} onClick={this.setActive.bind(this, index)}>
                  <div className={styles.hexa0}>
                    <div className={styles.hexa1}>
                      <div className={styles.hexa2} style={this.state.work[index].thumbnail ? {backgroundImage: `url(${this.state.work[index].thumbnail})`} : null}></div>
                    </div>
                  </div>
                </div>
              )}
              </div>
            </div>
            {selected ? <div className={styles.spotlight + ' ' + (workShown ? styles.workShown : '')}>
              {selected.image ? <img src={selected.image} /> : null}
              <h3>{selected.title}</h3>
              <p dangerouslySetInnerHTML={{__html: selected.text}}></p>
              <ul>{selected.skills.map((s, i) => <li key={i} ><Skill skill={s} background={true} /></li>)}</ul>
            {selected.link ? <a className={styles.button} href={selected.link.url} title={selected.link.text}>{selected.link.text}</a> : null }
            </div>  : null}
          </div>

        </div>
      </section>
    )
  }
}
