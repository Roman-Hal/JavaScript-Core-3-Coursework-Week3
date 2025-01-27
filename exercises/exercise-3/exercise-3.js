let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];


const table = (order) => {
  let price = 0;
    console.log('\n'+'QTY'.padEnd(5, ' '), 'ITEM'.padEnd(20, ' '), 'TOTAL'.padEnd(5, ' '))
    order.forEach(({ quantity, itemName, unitPrice }) => {
      console.log(String(quantity).padEnd(5, ' '), itemName.padEnd(20, ' '), String(unitPrice.toFixed(2)).padEnd(5, ' '))
      price += unitPrice;
    })
    console.log(`\nTotal: ${price}\n`);
};

table(order);
