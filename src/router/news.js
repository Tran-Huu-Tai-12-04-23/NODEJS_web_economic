const express = require('express');
const router = express.Router();
const NewController = require('../app/controllers/NewController');

router.use('/', NewController.news);
module.exports = router;
