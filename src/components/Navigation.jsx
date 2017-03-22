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
                    <NavItem className="text-white" eventKey="1">HP</NavItem>
                </IndexLinkContainer>
                <LinkContainer to={{pathname: '/SIP'}}>
                    <NavItem eventKey="2">SIP</NavItem>
                </LinkContainer>
                <LinkContainer to={{pathname: '/SFP'}}>
                    <NavItem eventKey="3" >SFP</NavItem>
                </LinkContainer>
                <LinkContainer to={{pathname: '/SRP'}}>
                    <NavItem eventKey="3" >SRP</NavItem>
                </LinkContainer>
                <LinkContainer to={{pathname: '/VDP'}}>
                    <NavItem eventKey="3" >VDP</NavItem>
                </LinkContainer>
            </Nav>
        );
    }

}

Navigation.propTypes = {
    className: React.PropTypes.string,
};

export default Navigation;