const precioOriginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  console.log(`El precio es: $${precio}`);
  console.log(`El precio con ${descuento}% de descuento es: $${precioConDescuento}`);
}


