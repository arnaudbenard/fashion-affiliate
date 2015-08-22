const React = require('react');

module.exports = React.createClass({

    componentDidMount() {
        console.log('mount product');
    },

    render() {
        const product = this.props.product;
        return (
            <div className="Product">
                <img src={product.image} />
                <a href={product.link}>{product.name}</a>
            </div>
        );
    }
});
