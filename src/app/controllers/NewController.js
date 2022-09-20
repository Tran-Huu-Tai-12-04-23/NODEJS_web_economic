const course = require('../models/course')
const Course = require('../models/course')

class NewController {
    home(req, res) {
    // console.log("helo" , course)
    // res.render('home');
    Course.find( {}, function(err, course) {
      if( !err ){ res.json(course) }
      else {
        res.status(500).json({ error: 'message' })
      }
    })
  }
  search(req, res) {
    res.render('search');
  }
  news(req, res) {
    res.render('news');
  }
}
module.exports = new NewController();
