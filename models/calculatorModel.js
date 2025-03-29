// models/calculatorModel.js
class Calculator {
  static add(num1, num2) {
    return num1 + num2;
  }

  static subtract(num1, num2) {
    return num1 - num2;
  }

  static multiply(num1, num2) {
    return num1 * num2;
  }

  static divide(num1, num2) {
    if (num2 === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return num1 / num2;
  }

  static exponentiate(num1, num2) {
    return Math.pow(num1, num2);
  }

  static modulo(num1, num2) {
    if (num2 === 0) {
      throw new Error('Modulo by zero is not allowed');
    }
    return num1 % num2;
  }

  static squareRoot(num) {
    if (num < 0) {
      throw new Error('Square root of negative numbers is not allowed');
    }
    return Math.sqrt(num);
  }

  static validateInputs(num1, num2) {
    if (isNaN(num1) || (num2 !== undefined && isNaN(num2))) {
      throw new Error('Invalid input parameters. Please provide valid numbers.');
    }
  }
}

module.exports = Calculator;