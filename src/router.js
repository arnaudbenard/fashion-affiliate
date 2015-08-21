var React = require('react/addons'),
ReactApp = React.createFactory(require('./app'));

module.exports = (app) => {
    app.get('/', function(req, res){
        var reactHtml = React.renderToString(ReactApp({}));
        res.render('index.ejs', {reactOutput: reactHtml});
    });
};
