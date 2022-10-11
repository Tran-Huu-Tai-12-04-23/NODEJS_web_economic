const course = require('../models/course')
const Course = require('../models/course')
const utilcoverMongoose = require('../../util/mongoose')
class NewController {
    home(req, res) {
      res.render('home')
  }
  search(req, res) {
    res.render('search');
  }
  news(req, res) {
    res.render('news');
  }
  course(req, res) {
    Course.find( {}, function(err, course) {
      if( !err ){ 
        res.render('courses', {
          course: utilcoverMongoose.multyToObject(course)
        })
      }
      else {
        res.status(500).json({ error: 'message' })
      }
    })
  }
}
module.exports = new NewController();
