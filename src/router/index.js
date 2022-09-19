const homeRouter = require('./website');
const newsRouter = require('./news');

function
 router(app) {
  app.use('/home', homeRouter);
  app.use('/news', newsRouter);
}

module.exports = router;
