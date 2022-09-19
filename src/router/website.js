const express = require('express');
const router = express.Router();
const NewController = require('../app/controllers/NewController');

router.use('/search', NewController.search);
router.use('/', NewController.home);
module.exports = router;
