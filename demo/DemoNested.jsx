import React from 'react';

import {
    // browserHistory,
    // IndexRoute,
    Route,
    BrowserRouter as Router,
} from 'react-router-dom';

import FullPageWrapper from '../src/pages/FullPageWrapper.jsx';

import IndexBase from '../src/subpages/IndexBase.jsx';
import SearchFormBase from '../src/subpages/SearchFormBase.jsx';
import InterstitialBase from '../src/subpages/InterstitialBase.jsx';
import SERPBase from '../src/subpages/SERPBase.jsx';
import ItemBase from '../src/subpages/ItemBase.jsx';


class DemoNested extends React.Component {

    componentWillMount() {
        console.group('------');
    }

    render() {
        return (
            <Router
            >
                <Route path="/" component={FullPageWrapper}>
                    <Route path="/" component={IndexBase} />
                    <Route path="/Interstitial" component={InterstitialBase} />
                    <Route path="/SearchForm" component={SearchFormBase} />
                    <Route path="/SERP" component={SERPBase} />
                    <Route path="/Item" component={ItemBase} />
                </Route>
            </Router>
        );
    }

}

DemoNested.propTypes = {

};

export default DemoNested;
