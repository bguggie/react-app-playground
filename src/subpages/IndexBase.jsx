import React from 'react';

class IndexBase extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return (
            <div>
                BADGE
                {this.constructor.displayName}:
            </div>
        );
    }

}

IndexBase.propTypes = {

};

export default IndexBase;
