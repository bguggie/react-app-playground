import React from 'react';

import {browserHistory} from 'react-router';

class InterstitialBase extends React.Component {

    // componentDidMount() {
    //     window.setTimout(() => browserHistory.push('/SRP'), 50);
    // }

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <div>{this.constructor.displayName}:</div>;
    }

}

InterstitialBase.propTypes = {

};

export default InterstitialBase;
