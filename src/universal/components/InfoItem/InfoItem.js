import React from 'react';
import RotatingText from '../RotatingText/RotatingText';

import styles from './InfoItem.css';

export default ({label, value, decimal, jobs}) => <li className={styles.InfoItem}>
  <span className={styles.label}>{label}:</span>
  {value ? <span className={styles.val}> {value}{decimal ? <span className={styles.dec}>{decimal}</span> : null}</span> : null}
  {jobs ? <RotatingText jobs={jobs}/> : null}
</li>
