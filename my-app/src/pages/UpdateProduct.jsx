import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = ({ products, onHandleUpdate }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const currentProduct = products.find((item) => item.id == id);

  const onHandleChange = (e) => {
    const { name, value } = e.target;

    setProduct({ ...product, [name]: value });
  };

  const onUpdate = (e) => {
    e.preventDefault();
    const updateData = { ...currentProduct, ...product };
    onHandleUpdate(updateData);
  };
  return (
    <div>
      <h1>Cập nhật sản phẩm</h1>
      {JSON.stringify(product)}
      <form action="" onSubmit={onUpdate}>
        <div className="form-group">
          <label htmlFor="">Tên sản phẩm</label>
          <input
            type="text"
            name="name"
            onInput={onHandleChange}
            defaultValue={currentProduct?.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Giá sản phẩm</label>
          <input
            type="text"
            name="price"
            onInput={onHandleChange}
            defaultValue={currentProduct?.price}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Ảnh sản phẩm</label>
          <input
            type="text"
            name="imageUrl"
            onInput={onHandleChange}
            defaultValue={currentProduct?.imageUrl}
          />
        </div>
        <button>Thêm mới</button>
      </form>
    </div>
  );
};
export default UpdateProduct;

/*
    B1: lấy id từ URL
    B2: lấy dữ liệu sản phẩm dựa vào id
    B3: lấy dữ liệu cập nhật từ input
    B4: submit form
    B5: điều hướng và render lại sản phẩm
*/
