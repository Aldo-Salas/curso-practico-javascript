function calcularModa(lista) {
  const lista1Count = {};

  lista.map((elemento) => {
    if (lista1Count[elemento]) {
      lista1Count[elemento] += 1;
    } else {
      lista1Count[elemento] = 1;
    }
  });

  const lista1Array = Object.entries(lista1Count).sort((a, b) => a[1] - b[1]);

  const moda = lista1Array[lista1Array.length - 1];
  console.log(lista1Array);

  if (moda[1] >= 2) {
    console.log(`La moda es el elemento "${moda[0]}" y aparece ${moda[1]} veces.`);
  } else if (moda[1] === 1) {
    console.log('No hay moda, los elementos aparecen la misma cantidad de veces.')
  }
}