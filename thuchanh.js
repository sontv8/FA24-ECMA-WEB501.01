const products = [
  {
    id: 1,
    name: "Product 1",
    price: 1000,
    image: "https://picsum.photos/200/120 ",
  },
  {
    id: 2,
    name: "Product 2",
    price: 2000,
    image: "https://picsum.photos/200/120 ",
  },
  {
    id: 3,
    name: "Product 3",
    price: 3000,
    image: "https://picsum.photos/200/120 ",
  },
];

const showProduct = (data) => {
  const tbody = document.querySelector("tbody");
  if (!tbody) return console.log("Khong tim thay tbody");
  if (!data) return console.log("Khong tim thay data");

  for (let product of data) {
    tbody.innerHTML += `
        <tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><img src="${product.image}" alt="" /></td>
            <td><button>Xoa</button></td>
        </tr>
    `;
  }
};
showProduct();
