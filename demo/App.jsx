import React from 'react';
import DemoSimple from './DemoSimple.jsx';
import DemoNested from './DemoNested.jsx';

export default class App extends React.Component {
  render() {
    const whichDemo = (window.location.search.substring(1) === 'simple' ? 'simple' : 'nested');

    return (whichDemo === 'simple' ? <DemoSimple /> : <DemoNested />);
  }
}
