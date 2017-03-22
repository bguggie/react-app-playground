import React from 'react';

import ATCPage from './ATCPage.jsx';
import VDP from '../subpages/VDP.jsx';

class VDPPage extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <ATCPage><VDP/></ATCPage>;
    }

}

VDPPage.propTypes = {};

export default VDPPage;
