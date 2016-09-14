import React from 'react';

import styles from './Skills.css';

const trimString = str => str.toLowerCase().replace(/\s/g, '');

export default ({ skill }) => <span className={styles[trimString(skill)]}>{skill}</span>
