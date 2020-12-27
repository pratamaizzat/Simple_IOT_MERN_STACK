const express = require('express');
const router = express.Router();

const controlController = require('../controllers/ControlController');

router.route('/')
  .get(controlController.index)
  .post(controlController.store);

module.exports = router