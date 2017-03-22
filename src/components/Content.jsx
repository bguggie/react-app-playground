import React from 'react';

// import ReactRenderVisualizer from 'react-render-visualizer-hoc';

import loremHipsum from 'lorem-hipsum';

class Content extends React.Component {

    getDummyText() {
        return loremHipsum({
            count: 8,
            unit: 'sentences',
            sentenceLowerBound: 5,
            sentenceUpperBound: 25,
            paragraphLowerBound: 3,
            paragraphUpperBound: 7,
            format: 'plain',
            random: Math.random,
        });
    }

    render() {
        console.log('RENDERING: ', this.constructor.displayName);
        return (
            <section className={this.props.className}>
                {this.props.children}
                CONTENT: <br />
                { this.getDummyText() }
            </section>
        );
    }
}

Content.propTypes = {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
};

export default ReactRenderVisualizer(Content);