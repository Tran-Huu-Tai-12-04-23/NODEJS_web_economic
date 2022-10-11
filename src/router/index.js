const homeRouter = require('./website');
const newsRouter = require('./news');
const course = require('./course');

function router(app) {
    app.use('/news', newsRouter);
    app.use('/course', course);
    app.use('/', homeRouter);
}

module.exports = router;
