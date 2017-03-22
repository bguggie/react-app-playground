import React from 'react';

import ATCPage from './ATCPage.jsx';
import SRP from '../subpages/SRP.jsx';

class SRPPage extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <ATCPage><SRP/></ATCPage>;
    }

}

SRPPage.propTypes = {

};

export default SRPPage;
