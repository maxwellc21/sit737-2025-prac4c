// routes/calculatorRoutes.js
const express = require('express');
const router = express.Router();
const calculatorController = require('../controllers/calculatorController');

router.get('/add', calculatorController.calculate('add'));
router.get('/subtract', calculatorController.calculate('subtract'));
router.get('/multiply', calculatorController.calculate('multiply'));
router.get('/divide', calculatorController.calculate('divide'));
router.get('/exponent', calculatorController.calculate('exponent'));
router.get('/modulo', calculatorController.calculate('modulo'));
router.get('/sqrt', calculatorController.calculate('sqrt'));

module.exports = router;