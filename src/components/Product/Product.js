const React = require('react');

module.exports = React.createClass({

    componentDidMount() {
        console.log('mount product');
    },

    render() {
        const product = this.props.product;
        return (
            <div>
                <img src={product.image} />
                <p>{product.name}</p>
            </div>
        );
    }
});
