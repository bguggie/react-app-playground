import React from 'react';

class SFP extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <div>{this.constructor.displayName}:</div>;
    }

}

SFP.propTypes = {

};

export default SFP;
