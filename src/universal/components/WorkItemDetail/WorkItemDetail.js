import React from 'react';
import { work } from '../../data';
import Spotlight from '../Spotlight/Spotlight';

export default class WorkItemDetail extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
      return (nextProps.params.workName !== this.props.params.workName) ||
          nextState.mounted !== this.state.mounted;
  }
    state = {
      mounted : false
    }

  componentDidMount() {
      setTimeout(() => {
          this.setState({
              mounted : true
          })
      }, 400)
    }

    render () {
        const { mounted } = this.state;
        const match = work.filter(w => w.url == this.props.params.workName);

        return (
            <Spotlight workShown={mounted} selected={match[0] || {}} />
        )
    }
}