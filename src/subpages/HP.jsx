import React from 'react';

class HP extends React.Component {

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

HP.propTypes = {

};

export default HP;
