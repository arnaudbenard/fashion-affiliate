var React = require('react');

const ReactApp = React.createClass({

    componentDidMount() {
        console.log('mount');
    },

    render() {
        return (
            <h1>lalala</h1>
        );
    }
});

module.exports = ReactApp;
