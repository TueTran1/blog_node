class NewsController {
    // get news
    index(req, res) {
        res.render('news');
    }

    //get
    show(req, res){
        res.send('NEWS DETAIL')
    }
}
module.exports = new NewsController;