const React = require('react');

module.exports = React.createClass({

    render() {
        const product = this.props.product;
        return (
            <div className='col col-3 Product'>
                <img src={product.image} />
                <a href={product.link} className='regular'>{product.name}</a>
            </div>
        );
    }
});
