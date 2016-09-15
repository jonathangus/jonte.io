import React from 'react';
import classNames from 'classnames';

import styles from './Skills.css';

const trimString = str => str.toLowerCase().replace(/\s/g, '');

export default ({ skill, background }) => <span className={classNames(styles[trimString(skill)], styles.skill)}>{skill}</span>
