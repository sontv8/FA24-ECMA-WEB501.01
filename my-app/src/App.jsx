import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const productList = [
  {
    id: "1",
    name: "Product 1",
    price: 100,
    imageUrl: "https://picsum.photos/200/120",
  },
  {
    id: "2",
    name: "Product 2",
    price: 100,
    imageUrl: "https://picsum.photos/200/120",
  },
  {
    id: "3",
    name: "Product 3",
    price: 100,
    imageUrl: "https://picsum.photos/200/120",
  },
];

function App() {
  const [products, setProducts] = useState(productList);

  const onHandleRemove = (id) => {
    const newData = products.filter((product) => {
      // console.log(product);
      // console.log(id);

      return product.id != id;
    });
    setProducts(newData);
  };

  return (
    // JSX
    <>
      <h1>Danh sách sản phẩm</h1>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.price}</p>
          <img src={product.imageUrl} alt="" />
          <div>
            <button onClick={() => onHandleRemove(product.id)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
}
/*
Hiển thị danh sách sản phẩm:
  B1: lấy dữ liệu -> dữ liệu nhận được là 1 mảng sản phẩm
  B2: lặp qua mảng, lấy ra từng object và tạo ra mảng mới bao gồm html + data
  B3: hiển thị ra màn hình

Xoá sản phẩm:
  B1: click vào button xoá và bắt sự kiện onClick
  B2: khi bắt sự kiện onClick thì gọi ra hàm xoá sản phẩm
  B3: thực hiện tạo ra mảng mới không bao gồm sản phẩm đã xoá
  B4: set lại dữ liệu cho products để hiển thị lại danh sách sản phẩm
*/
export default App;
