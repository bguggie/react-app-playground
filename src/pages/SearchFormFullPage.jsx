import React from 'react';

import FullPageWrapper from './FullPageWrapper.jsx';
import SearchFormBase from '../subpages/SearchFormBase.jsx';

class SearchFormFullPage extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <FullPageWrapper><SearchFormBase /></FullPageWrapper>;
    }

}

SearchFormFullPage.propTypes = {

};

export default SearchFormFullPage;
