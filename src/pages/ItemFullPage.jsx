import React from 'react';

import FullPageWrapper from './FullPageWrapper.jsx';
import ItemBase from '../subpages/ItemBase.jsx';

class ItemFullPage extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <FullPageWrapper><ItemBase /></FullPageWrapper>;
    }

}

ItemFullPage.propTypes = {};

export default ItemFullPage;
