import React from 'react';

import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';

class ATCPage extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return (
            <div className="container">
                <Header className="col-xs-12 well well-lg margin-collapse-bottom" />
                <Navigation className="col-xs-12" />
                <div className="container">
                    {this.props.children}
                </div>
                <Footer className="col-xs-12 well well-lg" />
            </div>
        );
    }

}

ATCPage.propTypes = {
    children: React.PropTypes.node,
};

export default ATCPage;
