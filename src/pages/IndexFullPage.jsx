import React from 'react';

import FullPageWrapper from './FullPageWrapper.jsx';
import Index from '../subpages/IndexBase.jsx';

class IndexFullPage extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <FullPageWrapper><Index /></FullPageWrapper>;
    }

}

IndexFullPage.propTypes = {

};

export default IndexFullPage;
