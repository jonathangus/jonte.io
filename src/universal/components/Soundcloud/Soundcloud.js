import React from 'react';

export default class Soundcloud extends React.Component {
    render () {

        const { play, pause } = this.props;

        return (
            <div>
                <button onClick={play}>Play</button>
                <button onClick={pause}>Pause</button>
            </div>
        )

    }
}