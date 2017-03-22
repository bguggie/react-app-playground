import React from 'react';

import {browserHistory, Route, Router} from 'react-router';

import HPApp from '../src/pages/HPPage.jsx';
import SFPApp from '../src/pages/SFPPage.jsx';
import SIPApp from '../src/pages/SIPPage.jsx';
import SRPApp from '../src/pages/SRPPage.jsx';
import VDPApp from '../src/pages/VDPPage.jsx';


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
                <Route path="/SIP" component={SIPApp} />
                <Route path="/SFP" component={SFPApp} />
                <Route path="/SRP" component={SRPApp} />
                <Route path="/VDP" component={VDPApp} />
            </Router>
        );
    }

}

DemoSimple.propTypes = {

};

export default DemoSimple;
