import React, {Component, PropTypes} from 'react';

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
