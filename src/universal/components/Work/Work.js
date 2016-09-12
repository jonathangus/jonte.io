import React, { Component } from 'react';
import data from '../../data';

import styles from './Work.css';

export default class Work extends Component {
  constructor() {
    super();
    this.state = {
      work: data.work,
      selectedIndex: null
    }
  }

  setActive(index) {
    this.setState({
      selectedIndex: index
    });
  }

  render () {
    const { work, selectedIndex } = this.state;
    const selected = work[selectedIndex];

    return (
      <section className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.hexagons}>
            <div className={styles.thumbs}>
            {work.map((w, index) =>
              <div className={styles.hexagon + ' ' + (selectedIndex == index ? styles.selectedHeca: '')} onClick={this.setActive.bind(this, index)}>
                <div className={styles.hexa0}>
                <div className={styles.hexa1}><div className={styles.hexa2} style={{backgroundImage: `url(${this.state.work[index].image})`}}></div></div>
                </div>
              </div>
            )}
            </div>
          </div>
          {selected ? <div className="Work-spotlight">
            {selected.title}
            <img src={selected.image} />
          </div>  : null}


        </div>
      </section>
    )
  }
}
