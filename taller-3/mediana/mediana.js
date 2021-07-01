function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function esPar(numero) {
  return numero % 2 === 0;
}

let mediana;

function calcularMediana(lista) {
  const mitadLista1 = parseInt(lista.length / 2);

  const listaOrdenada = lista.sort((a, b) => a - b);

  if (esPar(lista.length)) {
    const elemento1 = listaOrdenada[mitadLista1 - 1];
    const elemento2 = listaOrdenada[mitadLista1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedioElemento1y2;
    return mediana;
  } else {
    mediana = listaOrdenada[mitadLista1];
    return mediana;
  }
}

