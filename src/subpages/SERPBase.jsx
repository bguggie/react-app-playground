import React from 'react';

import Aside from '../components/Aside.jsx';
import Content from '../components/Content.jsx';

class SERPBase extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return (
            <div>
                <Aside className="col-xs-3" />
                <Content className="col-xs-8 col-xs-push-1">
                    {this.constructor.displayName}:
                </Content>
            </div>
        );
    }
}

SERPBase.propTypes = {

};

export default SERPBase;
