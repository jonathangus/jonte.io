import React from 'react';
import { connect } from 'react-redux'
import Soundcloud from '../../components/Soundcloud':

class SoundcloudContainer extends React.Component {
    render () {

        const { play, pause } = this.props;

        return <Soundcloud />
    }
}


const mapStateToProps = (state, ownProps) => ({

});

const mapDispatchToProps = (dispatch, ownProps) => ({

});



export default connect(mapStateToProps, mapDispatchToProps)(SoundcloudContainer);