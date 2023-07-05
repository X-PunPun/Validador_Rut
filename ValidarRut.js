function verificar(rut) {
  rut = rut.replace(/[\.-]/g, '');
  var Rutdigitos = rut.slice(0, -1);
  var VerificarDigitos = rut.slice(-1).toLowerCase();

  var Modulo = 11;
  var sumador = 0;
  var multiplicador = 2;

  for (var i = Rutdigitos.length - 1; i >= 0; i--) {
    sumador += parseInt(Rutdigitos.charAt(i)) * multiplicador;
    multiplicador = (multiplicador + 1) % 8 || 2;
  }
  
  var calculo = (Modulo - (sumador % Modulo)).toString();
  calculo = (calculo === '10') ? 'k' : calculo;

  return (calculo === VerificarDigitos);
}

function valida() {
  var rutInput = document.getElementById('rut');
  var rut = rutInput.value;
  var esValido = verificar(rut);

  var Mensaje = document.getElementById('Resultado');

  if (esValido) {
    Mensaje.textContent = 'El RUT es valido.';
  } else {
    Mensaje.textContent = 'El RUT no es valido.';
  }
}
