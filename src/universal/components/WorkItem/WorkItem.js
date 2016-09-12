import React from 'react';

import styles from './WorkItem.css';

export default class WorkItem extends React.Component {
  render() {
    const {label, dates, text, active} = this.props;
    return (
      <article className={styles.container + ' ' + (active ? styles.itemActive : '')}>
        <div className="WorkItem-icon"></div>
        <div className="WorkItem-content">
          <div className="WorkItem-top">
            <span className="WorkItem-date">{dates}</span>
            <h2 className="WorkItem-title">{label}</h2>
          </div>
          <p className="WorkItem-text">{text}</p>
        </div>
      </article>
    )
  }
}
