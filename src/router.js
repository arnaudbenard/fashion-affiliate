const React = require('react/addons');
const App = React.createFactory(require('./app'));

module.exports = (app) => {
    app.get('/', (req, res) => {
        let html = React.renderToString(App({}));
        res.render('index.ejs', {outlet: html});
    });
};
