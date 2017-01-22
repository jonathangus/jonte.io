import React, { Component } from 'react';
import data from '../../data';
import Skill from '../Skill/Skill';
import Spotlight from '../Spotlight/Spotlight';
import {push} from 'react-router-redux';
import styles from './Work.css';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';

class Work extends Component {
  constructor() {
    super();
    this.state = {
      work: data.work,
      selectedIndex: null,
      started: false,
      workShown: false
    }
  }

  componentDidMount() {

    if(this.props.children) {
      this.setState({
        started: true
      });

      setTimeout(() => {
        this.setState({
          workShown: true
        })
      }, 400);
    }
  }

  setActive(index) {
    const work = data.work;
    const selected = work[index];

    this.props.go(selected.url);

    if(!this.state.started) {
      this.setState({
        started: true
      });

      setTimeout(() => {
        this.setState({
          workShown: true
        })
      }, 400);
    }
  }

  render () {
    const { children } = this.props;
    const { work, selectedIndex, started, workShown} = this.state;


    return (
      <section className={styles.container}>
        <div className={styles.inner}>
          <h2 className={styles.title}>Selected work</h2>
          <div className={styles.wrap + ' ' + (started ? styles.wrapAir: '')}>
            <div className={styles.hexagons + ' ' + (started ? styles.hexagonsDone : '')}>
              <div className={styles.thumbs + ' ' + (started ? styles.workSelected : '')}>
              {work.map((w, index) =>
                <div title={this.state.work[index].title} key={index} className={styles.hexagon + ' ' + (selectedIndex == index ? styles.selectedHeca: '')} onClick={this.setActive.bind(this, index)}>
                  <div className={styles.hexa0}>
                    <div className={styles.hexa1}>
                      <div className={styles.hexa2} style={this.state.work[index].thumbnail ? {backgroundImage: `url(${this.state.work[index].thumbnail})`} : null}></div>
                    </div>
                  </div>
                </div>
              )}
              </div>
            </div>
            {workShown && children}
          </div>

        </div>
      </section>
    )
  }
}


const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({
    go: (id) => dispatch(push(`/work/${id}`)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Work);
