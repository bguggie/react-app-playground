import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';

class Aside extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return (
            <aside className={this.props.className}>
                <Panel>
                    ASIDE
                </Panel>
            </aside>
        );
    }

}

Aside.propTypes = {
    className: React.PropTypes.string,
};

export default Aside;