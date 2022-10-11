const express = require('express');
const router = express.Router();
const NewController = require('../app/controllers/NewController');

router.get('/search', NewController.search);
router.get('/', NewController.home);

module.exports = router;
