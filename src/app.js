const React = require('react');
const Product = require('./components/Product/Product');
const Header = require('./components/Header/Header');
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
            <div>
                <Header />
                <div className="container">
                  <div className="clearfix">
                    {products}
                  </div>
                </div>
            </div>
        );
    }
});

module.exports = ReactApp;
