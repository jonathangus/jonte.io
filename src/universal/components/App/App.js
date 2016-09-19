import React, {Component, PropTypes} from 'react';
import { number } from '../../data';

import styles from './App.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  constructor() {
    super();
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loaded: true
      });
    }, 100);

    console.log(`%c Hey! Good work in finding this mysterious place. As a reward I will give you my phone number, ${number}`, 'background: #414141; padding: 3px; color: white; display: block;')
  }

  render () {
    return (
      <div id="app" className={styles.app + ' ' + (this.state.loaded ? 'have-loaded' : '')}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
