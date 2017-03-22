import React from 'react';

import FullPageWrapper from './FullPageWrapper.jsx';
import Interstitial from '../subpages/InterstitialBase.jsx';

class InterstitialFullPage extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <FullPageWrapper><Interstitial /></FullPageWrapper>;
    }

}

InterstitialFullPage.propTypes = {

};

export default InterstitialFullPage;
