import React, { Component } from 'react';
import data from '../../data';
import WorkItem from '../WorkItem/WorkItem';
import ReactDOM from 'react-dom';

import styles from './CV.css'

const getDistancePercentage = (element, center) => {
  let rect = element.getBoundingClientRect();
  return center / (rect.top + (element.clientHeight / 2.5));
}

export default class CV extends Component {
  constructor() {
    super();
    this.state = {
      items: data.cv.items,
      selectedItem: 0,
      borderTop: 0
    }
  }

  componentDidMount() {
    // return;

    window.addEventListener('scroll', () => {
      const center = window.pageXOffset + (window.innerHeight / 2);

      // The animated border
      const container = ReactDOM.findDOMNode(this.refs.container);
      const containerRect = container.getBoundingClientRect();
      const topVal = (window.innerHeight - containerRect.top) / 2

      const sizes = [];
      for(let prop in this.refs) {
        sizes.push({
          val: getDistancePercentage(ReactDOM.findDOMNode(this.refs[prop]), center),
          prop: prop
        })
      }

      const x = 1;
      const closest = sizes.sort(function(left, right) {
        return Math.abs(x - left.val) - Math.abs(x - right.val);
      })[0];

      this.setState({
        selectedItem: closest.prop,
        borderTop: topVal < 110 ? topVal : 110
      });
    });
  }

  render() {
    const { items, selectedItem, borderTop } = this.state;

    return (
      <section ref='container' className={styles.container}>
        <div className={styles.inner}><h2>So far, so good</h2></div>
        <div className={styles.border} style={{top: `-${borderTop}px`}}></div>
        <div className={styles.inner}>
          <div className={styles.line}></div>
          {items.map((i, k) => <WorkItem active={ selectedItem == 'item-' + k} ref={'item-' + k} {...i} key={k} /> )}
        </div>
      </section>
    )
  }
}
