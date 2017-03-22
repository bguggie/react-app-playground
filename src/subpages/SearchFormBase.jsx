import React from 'react';

class SearchFormBase extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <div>{this.constructor.displayName}:</div>;
    }

}

SearchFormBase.propTypes = {

};

export default SearchFormBase;
