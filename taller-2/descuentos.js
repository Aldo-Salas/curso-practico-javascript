function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function calcularDescuento() {
  const inputPrice = document.getElementById('InputPrice');
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById('InputDiscount');
  const discountValue = parseInt(inputDiscount.value);

  if (discountValue > 100) {
    alert('El porcentaje debe de ser igual o menor a 100.');
  } else if (discountValue < 0) {
    alert('El descuento no puede ser negativo.')
  } else {
    const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const result = document.getElementById('ResultPrice');
    result.innerText = `El precio con ${discountValue}% de descuento es: $${precioConDescuento}`;
  }

}
