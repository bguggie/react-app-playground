import React from 'react';

import {browserHistory} from 'react-router';

class SIP extends React.Component {

    // componentDidMount() {
    //     window.setTimout(() => browserHistory.push('/SRP'), 50);
    // }

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <div>{this.constructor.displayName}:</div>;
    }

}

SIP.propTypes = {

};

export default SIP;
