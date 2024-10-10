import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import ProductManagement from "./pages/ProductManagement";
import AddProduct from "./pages/AddProduct";

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/products", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);
  const onHandleRemove = (id) => {
    if (confirm("Bạn có chắc chắn muốn xoá sản phẩm này không?")) {
      fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      }).then(() => {
        const newData = products.filter((product) => {
          return product.id != id;
        });
        setProducts(newData);
      });
    }
  };

  const onHandleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
    // computed property name
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3000/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((newProduct) => {
        setProducts([...products, newProduct]);
        navigate("/admin/products");
      });
  };
  return (
    // JSX
    <>
      <Routes>
        <Route path="/admin" element={<Dashboard />} />
        <Route
          path="/admin/products"
          element={
            <ProductManagement
              products={products}
              onHandleRemove={onHandleRemove}
            />
          }
        />
        <Route
          path="/admin/products/add"
          element={
            <AddProduct
              onHandleChange={onHandleChange}
              onHandleSubmit={onHandleSubmit}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;

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

Thêm sản phẩm:
  B1: lấy dữ liệu nhập vào input
  B2: tạo 1 state để lưu dữ liệu lấy được khi nhập
  B3: submit form
  B4: render lại

Router:
  B1: cài đặt: npm i react-router-dom
  B2: xây dựng đường dẫn cho từng page
  B3: bọc component App ở main.jsx bằng component <BrowserRouter>
*/
