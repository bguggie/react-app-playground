import React from 'react';

class Footer extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return (
            <footer className={this.props.className}>FOOTER</footer>
        );
    }

}

Footer.propTypes = {
    className: React.PropTypes.string,
};

export default Footer;