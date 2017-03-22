import React from 'react';

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
                <IndexLinkContainer to={{pathname: '/'}}>
                    <NavItem className="text-white" eventKey="1">Home Page</NavItem>
                </IndexLinkContainer>
                <LinkContainer to={{pathname: '/Interstitial'}}>
                    <NavItem eventKey="2">Interstitial</NavItem>
                </LinkContainer>
                <LinkContainer to={{pathname: '/Search Form'}}>
                    <NavItem eventKey="3" >Search Form</NavItem>
                </LinkContainer>
                <LinkContainer to={{pathname: '/SERP'}}>
                    <NavItem eventKey="3" >SERP</NavItem>
                </LinkContainer>
                <LinkContainer to={{pathname: '/Item'}}>
                    <NavItem eventKey="3" >Item</NavItem>
                </LinkContainer>
            </Nav>
        );
    }

}

Navigation.propTypes = {
    className: React.PropTypes.string,
};

export default Navigation;