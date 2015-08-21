const React = require('react');
const Product = require('./components/Product/Product');
const data = require('./api/products')();

const ReactApp = React.createClass({

    componentDidMount() {
        console.log('mount');
    },

    render() {
        const products = data.map(function(product) {
            return <Product product={product} />;
        });

        return (
            <div>{products}</div>
        );
    }
});

module.exports = ReactApp;
