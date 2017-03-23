import React from 'react';

import { NavLink } from 'react-router-dom';

// import IndexLinkContainer from 'react-router-bootstrap/lib/IndexLinkContainer';
// import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';


class Navigation extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return (
            <Nav
                className="col-xs-12"
                bsStyle="tabs"
                activeKey="1"
                onSelect={this.handleSelect}
            >
                <NavLink to='/'>
                    Home Page
                </NavLink>
                <NavLink to='/Interstitial'>
                    Interstitial
                </NavLink>
                <NavLink to='/Search Form'>
                    Search Form
                </NavLink>
                <NavLink to='/SERP'>
                    SERP
                </NavLink>
                <NavLink to='/Item'>
                    Item
                </NavLink>
            </Nav>
        );
    }

}

Navigation.propTypes = {
    className: React.PropTypes.string,
};

export default Navigation;
