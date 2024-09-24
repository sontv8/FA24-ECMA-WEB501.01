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

  tbody.innerHTML = "";
  for (let product of data) {
    tbody.innerHTML += `
        <tr>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><img src="${product.image}" alt="" /></td>
            <td><button class="btn-delete" data-id=${product.id}>Xoa</button></td>
        </tr>
    `;
  }

  const btns = document.querySelectorAll(".btn-delete");
  for (let btn of btns) {
    btn.addEventListener("click", () => {
      const id = btn.dataset.id;
      const newData = products.filter((item) => {
        return item.id != id;
      });

      showProduct(newData);
    });
  }
};
showProduct(products);

/*
  B1: tìm input để lấy data
  B2: tạo 1 object mới để lưu dữ liệu cần thêm
  B3: thêm sự kiện submit cho form
  B4: thêm dữ liệu vào mảng
*/

const addForm = document.querySelector("#add-form");
const addProduct = (e) => {
  e.preventDefault();
  const productName = document.querySelector("#product-name");
  const productPrice = document.querySelector("#product-price");
  const productImage = document.querySelector("#product-image");

  const newProduct = {
    id: products.length + 1,
    name: productName.value,
    price: productPrice.value,
    image: productImage.value,
  };

  products.push(newProduct);
  showProduct(products);
};

addForm.addEventListener("submit", addProduct);
