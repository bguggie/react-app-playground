import React from 'react';

// import ReactRenderVisualizer from 'react-render-visualizer-hoc';

import Col from 'react-bootstrap/lib/Col';

class Header extends React.Component {
    componentWillMount() {
        console.log(this.constructor.displayName + ': componentWillMount');
    }

    componentDidMount() {
        console.log(this.constructor.displayName + ': componentDidMount');
    }

    componentWillUpdate() {
        console.log(this.constructor.displayName + ': componentWillUpdate');
    }

    componentDidUpdate() {
        console.log(this.constructor.displayName + ': componentDidUpdate');
    }

    shouldComponentUpdate() {
        return false;
    }


    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return (
            <header
                className={this.props.className}
                ref={this.componentRef}
            >
                <Col xs={3}>
                    <img src="http://placehold.it/170x60/f8a757/ffffff?text=logo" />
                </Col>
                <Col xsPush={4} xs={5} className="text-right">
                    HEADER
                </Col>
                {this.props.children}
            </header>
        );
    }

}

Header.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
};

export default ReactRenderVisualizer(Header);
