// controllers/calculatorController.js
const Calculator = require('../models/calculatorModel');
const logger = require('../services/loggerService');

const calculate = (operation) => {
  return (req, res) => {
    try {
      let num1 = parseFloat(req.query.num1);
      let num2, result;

      // For square root, we only need one number
      if (operation !== 'sqrt') {
        num2 = parseFloat(req.query.num2);
        Calculator.validateInputs(num1, num2);
      } else {
        Calculator.validateInputs(num1);
      }

      switch (operation) {
        case 'add':
          result = Calculator.add(num1, num2);
          break;
        case 'subtract':
          result = Calculator.subtract(num1, num2);
          break;
        case 'multiply':
          result = Calculator.multiply(num1, num2);
          break;
        case 'divide':
          result = Calculator.divide(num1, num2);
          break;
        case 'exponent':
          result = Calculator.exponentiate(num1, num2);
          break;
        case 'modulo':
          result = Calculator.modulo(num1, num2);
          break;
        case 'sqrt':
          result = Calculator.squareRoot(num1);
          break;
        default:
          throw new Error('Invalid operation');
      }

      const operationSymbol = {
        add: '+',
        subtract: '-',
        multiply: '*',
        divide: '/',
        exponent: '^',
        modulo: '%',
        sqrt: '√'
      }[operation];

      const operationText = operation === 'sqrt' 
        ? `${operationSymbol}${num1} = ${result}`
        : `${num1} ${operationSymbol} ${num2} = ${result}`;

      logger.info(`New ${operation} operation requested: ${operationText}`);
      
      res.json({
        operation,
        num1,
        num2: operation !== 'sqrt' ? num2 : undefined,
        result
      });
    } catch (error) {
      logger.error(`Error in ${operation}: ${error.message}`);
      res.status(400).json({
        error: error.message
      });
    }
  };
};

module.exports = {
  calculate
};