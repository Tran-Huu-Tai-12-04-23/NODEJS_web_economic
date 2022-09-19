class NewController {
  home(req, res) {
    res.render('home');
  }
  search(req, res) {
    res.render('search');
  }
  news(req, res) {
    res.render('news');
  }
}
module.exports = new NewController();
