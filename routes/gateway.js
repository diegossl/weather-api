const express = require('express');
const router = express.Router();
const Gateway = require('../api/Gateway')

router.get('/search/:cityName', Gateway.index)

module.exports = router;
