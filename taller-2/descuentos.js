function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

function calcularDescuento() {
  const inputPrice = document.getElementById('InputPrice');
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById('InputDiscount');
  const discountValue = inputDiscount.value;

  const inputCoupon = document.getElementById('InputCoupon');
  const couponValue = inputCoupon.value;

  const coupons = [
    {
      name: "Descuento",
      discount: 15,
    },
    {
      name: "Platzi",
      discount: 30,
    },
    {
      name: "100OFF",
      discount: 100,
    },
  ];

  const isCouponValid = coupon => {
    return coupon.name === couponValue;
  }

  const userCoupon = coupons.find(isCouponValid);

  if (!userCoupon) {
    alert(`Cupón ${couponValue} no es válido`);
  } else {
    const descuento = userCoupon.discount;
    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);

    const result = document.getElementById('ResultPrice');
    result.innerText = `El precio con descuento es: $${precioConDescuento}`;
  }
}
