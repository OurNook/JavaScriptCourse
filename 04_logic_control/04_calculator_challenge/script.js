function calculator(num1, num2, oper) {
  switch (true) {
    case oper === '+':
    console.log(num1 + num2);
    break;

    case oper === '-':
    console.log(num1 - num2);
    break;

    case oper === '*':
    console.log(num1 * num2);
    break;

    case oper === '/':
    console.log(num1 / num2);
    break;

    default:
      console.log('Error');

  }
}

calculator(5, 2, '%')