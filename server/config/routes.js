module.exports = function(app) {
    //Default routes
    app.get('/partials/*', function(req, res) {
        console.log(req.params);
        res.render('../../public/app/' + req.params[0]);
    });

    app.all('/api/*', function(req, res) {
        res.sendStatus(404);
    });
    
    app.get('*', function(req, res) {
        res.render('index');
    });
}