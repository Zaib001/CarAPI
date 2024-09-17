const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/:lang/:endpoint', apiController.getApiData);

module.exports = router;
