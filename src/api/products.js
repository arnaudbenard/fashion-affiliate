let data = require('../public/products_data');

module.exports = () => {
    return data.map((obj) => {
        let name = obj.name.text;
        let image = obj.image.src;
        let link = obj.name.href;
        return {name, image, link};
    });
};
