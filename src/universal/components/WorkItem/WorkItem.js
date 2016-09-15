import React from 'react';

import styles from './WorkItem.css';

export default class WorkItem extends React.Component {
  render() {
    const {label, dates, text, active} = this.props;
    return (
      <article className={styles.container + ' ' + (active ? styles.itemActive : '')}>
        <div className={styles.icon}></div>
        <div className={styles.content}>
          <div className={styles.top}>
            <span className={styles.date}>{dates}</span>
            <h3 className={styles.title}>{label}</h3>
          </div>
          <div className={styles.text}>{text}</div>
        </div>
      </article>
    )
  }
}
