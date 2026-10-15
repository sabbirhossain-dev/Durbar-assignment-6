function calculateCartTotal(items, taxRate) {
  let subTotal = 0;
  for (let i = 0; i < items.length; i++) {
    let itemTotal =
      items[i].price * items[i].quantity * (1 - items[i].discount / 100);
    subTotal += itemTotal;
  }

  const finalTotal = subTotal * (1 + taxRate / 100);
  return Math.round(finalTotal * 100) / 100;
}

console.log(
  calculateCartTotal([{ price: 19.99, quantity: 3, discount: 15 }], 8),
);

console.log(
  calculateCartTotal(
    [
      { price: 100, quantity: 2, discount: 10 },
      { price: 50, quantity: 1, discount: 0 },
    ],
    10,
  ),
);
