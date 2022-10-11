const express = require('express');
const router = express.Router();
const NewController = require('../app/controllers/NewController');

router.get('/', NewController.news);
module.exports = router;
