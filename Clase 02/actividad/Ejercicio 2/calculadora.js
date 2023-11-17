const sumar = () => {
    calcular('suma');
  }

  const restar = () => {
    calcular('resta');
  }

  const multiplicar = () => {
    calcular('multiplicacion');
  }

  const dividir = () => {
    calcular('division');
  }

  const calcular = (operacion) => {
    var operandor1 = parseFloat(document.getElementById('operandor1').value);
    var operandor2 = parseFloat(document.getElementById('operandor2').value);

    if (isNaN(operandor1) || isNaN(operandor2)) {
      alert('Por favor, ingresa números válidos en ambos campos.');
      return;
    }

    var resultado;

    switch (operacion) {
      case 'suma':
        resultado = operandor1 + operandor2;
        break;
      case 'resta':
        resultado = operandor1 - operandor2;
        break;
      case 'multiplicacion':
        resultado = operandor1 * operandor2;
        break;
      case 'division':
        if (operandor2 !== 0) {
          resultado = operandor1 / operandor2;
        } else {
          alert('No es posible dividir por cero.');
          return;
        }
        break;
      default:
        alert('Operación no válida.');
        return;
    }

    document.getElementById('resultado').innerText = resultado;
  }