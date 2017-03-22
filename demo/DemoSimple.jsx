import React from 'react';

import {browserHistory, Route, Router} from 'react-router';

import HPApp from '../src/pages/IndexFullPage.jsx';
import SFPApp from '../src/pages/SearchFormFullPage.jsx';
import SIPApp from '../src/pages/InterstitialFullPage.jsx';
import SRPApp from '../src/pages/SERPFullPage.jsx';
import VDPApp from '../src/pages/ItemFullPage.jsx';


class DemoSimple extends React.Component {

    componentWillMount() {
        console.group('------');
    }

    render() {
        return (
            <Router
                history={browserHistory}
                onUpdate={() => {
                    console.groupEnd();
                    console.group('------');
                }}
            >
                <Route path="/" component={HPApp} />
                <Route path="/Interstitial" component={SIPApp} />
                <Route path="/SearchForm" component={SFPApp} />
                <Route path="/SERP" component={SRPApp} />
                <Route path="/Item" component={VDPApp} />
            </Router>
        );
    }

}

DemoSimple.propTypes = {

};

export default DemoSimple;
