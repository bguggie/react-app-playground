import React from 'react';

class ItemBase extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <div>{this.constructor.displayName}:</div>;
    }

}

ItemBase.propTypes = {};

export default ItemBase;
