const express = require('express');
const router = express.Router();
const Gateway = require('../api/Gateway')

router.get('/', Gateway.index)

module.exports = router;
