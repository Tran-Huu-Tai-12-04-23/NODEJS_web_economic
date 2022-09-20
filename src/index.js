const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const router = require('./router');

const db = require('./config/db')
const app = express();
const post = 3000;
//template enigne
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resourse/views'));

//connect to database
db.connect()

// using static file
app.use(express.static(path.join(__dirname, 'public')));
//http logger
// app.use(morgan('combined'))
//get
router(app);

app.listen(post, () => {
  console.log(`listen at :http://localhost:${post}`);
});
