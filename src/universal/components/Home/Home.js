import React, {Component, PropTypes} from 'react';
import Intro from '../Intro/Intro';
import CV from '../CV/CV';
import Work from '../Work/Work';

export default ({children}) =>
  <div>
    <Intro />
    <CV />
    <Work>
      {children}
    </Work>
  </div>
