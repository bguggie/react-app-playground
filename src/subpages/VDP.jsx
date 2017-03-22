import React from 'react';

class VDP extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <div>{this.constructor.displayName}:</div>;
    }

}

VDP.propTypes = {};

export default VDP;
