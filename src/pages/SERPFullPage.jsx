import React from 'react';

import FullPageWrapper from './FullPageWrapper.jsx';
import SERPBase from '../subpages/SERPBase.jsx';

class SERPFullPage extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <FullPageWrapper><SERPBase /></FullPageWrapper>;
    }

}

SERPFullPage.propTypes = {

};

export default SERPFullPage;
