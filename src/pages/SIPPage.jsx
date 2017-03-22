import React from 'react';

import ATCPage from './ATCPage.jsx';
import SIP from '../subpages/SIP.jsx';

class SIPPage extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <ATCPage><SIP/></ATCPage>;
    }

}

SIPPage.propTypes = {

};

export default SIPPage;
