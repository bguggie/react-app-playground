import React from 'react';

import {
    // browserHistory,
    // IndexRoute,
    Route,
    StaticRouter as Router,
} from 'react-router-dom';

import ATCApp from '../src/pages/FullPageWrapper.jsx';
// import HP from '../src/subpages/IndexBase.jsx';
import SFP from '../src/subpages/SearchFormBase.jsx';
import SIP from '../src/subpages/InterstitialBase.jsx';
import SRP from '../src/subpages/SERPBase.jsx';
import VDP from '../src/subpages/ItemBase.jsx';


class DemoNested extends React.Component {

    componentWillMount() {
        console.group('------');
    }

    render() {
        return (
            <Router
            >
                <Route path="/" component={ATCApp}>
                    <Route path="/SIP" component={SIP} />
                    <Route path="/SFP" component={SFP} />
                    <Route path="/SRP" component={SRP} />
                    <Route path="/VDP" component={VDP} />
                </Route>
            </Router>
        );
    }

}

DemoNested.propTypes = {

};

export default DemoNested;
