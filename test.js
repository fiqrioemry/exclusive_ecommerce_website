const cart = [
  {
    id: 1,
    product: "apple",
    amount: 5,
  },
  {
    id: 2,
    product: "bottle",
    amount: 15,
  },
  {
    id: 3,
    product: "Choco",
    amount: 3,
  },
];

const amount = 5;

const product = {
  id: 4,
  product: "Dolls",
  stock: 7,
};

const cartAmount = cart[2].amount + amount <= product.stock;

console.log(cartAmount);
