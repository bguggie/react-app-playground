import React from 'react';

import ATCPage from './ATCPage.jsx';
import SFP from '../subpages/SFP.jsx';

class SFPPage extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <ATCPage><SFP/></ATCPage>;
    }

}

SFPPage.propTypes = {

};

export default SFPPage;
