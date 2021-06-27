// Código del cuadrado

function perimetroCuadrado(lado) {
  return lado * 4;
}

function areaCuadrado(lado) {
  return lado * lado;
}

// Código del triángulo

function alturaTriangulo(lado1, lado2, base) {
  const altura = Math.sqrt(Math.pow(lado1, 2) - (Math.pow(base / 2, 2)));
  if(lado1 === lado2) {
    return altura;
  } else {
    alert("Este no es un triangulo isóceles");
  }
}

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Código del círculo

const PI = Math.PI;

function diametroCirculo(radio) {
  return radio * 2;
}

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

function areaCirculo(radio) {
  return PI * Math.pow(radio, 2);
}

// Aquí interactuamos con el HTML

// Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

// Triangulo
function calcularAlturaTriangulo() {
  const inputLado1 = document.getElementById('InputTrianguloCateto1');
  const inputLado2 = document.getElementById('InputTrianguloHipotenusa');
  const inputBase = document.getElementById('InputTrianguloCateto2');
  const valueCateto1 = inputLado1.value;
  const valueHipotenusa = inputLado2.value;
  const valueBase = inputBase.value;

  const altura = alturaTriangulo(valueCateto1, valueHipotenusa, valueBase);
  alert(altura);
}

function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById('InputTrianguloLado1');
  const inputLado2 = document.getElementById('InputTrianguloLado2');
  const inputBase = document.getElementById('InputTrianguloLado3');
  const valueLado1 = parseInt(inputLado1.value);
  const valueLado2 = parseInt(inputLado2.value);
  const valueBase = parseInt(inputBase.value);

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputAltura = document.getElementById("InputTrianguloAltura");
  const inputBase = document.getElementById('InputTrianguloBase')
  const valueAltura = inputAltura.value;
  const valueBase = inputBase.value;

  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
}

//Círculo
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}
