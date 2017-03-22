import React from 'react';

import ATCPage from './ATCPage.jsx';
import HP from '../subpages/HP.jsx';

class HPPage extends React.Component {

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return <ATCPage><HP/></ATCPage>;
    }

}

HPPage.propTypes = {

};

export default HPPage;
