import React from 'react';

import {
    // browserHistory,
    // IndexRoute,
    Route,
    StaticRouter as Router,
} from 'react-router-dom';

import ATCApp from '../src/pages/ATCPage.jsx';
// import HP from '../src/subpages/HP.jsx';
import SFP from '../src/subpages/SFP.jsx';
import SIP from '../src/subpages/SIP.jsx';
import SRP from '../src/subpages/SRP.jsx';
import VDP from '../src/subpages/VDP.jsx';


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
