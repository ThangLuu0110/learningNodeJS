const newsRouter = require('./news.route');

function route(app){
    app.get('/', (req, res) => {
        res.render('home')
      })

    app.use('/news', newsRouter);
    
    app.get('/search', (req, res) => {
        res.render('search')
    })
    
    app.post('/search', (req, res) => {
        console.log(req.body.params)
        res.send('')
    })
}

module.exports = route;