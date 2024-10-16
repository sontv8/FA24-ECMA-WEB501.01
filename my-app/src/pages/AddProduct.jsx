const AddProduct = ({ onHandleChange, onHandleSubmit, errors }) => {
  const errorsDetail = errors.map((item) => {
    // console.log(item.message);
    // console.log(item.context.key);
    // {name: "Ten san pham khong duoc de trong"}

    return { name: item.context.key, message: item.message };
  });
  // console.log(errorsDetail);
  // const [errorName, errorPrice, errorImageUrl] = errorsDetail;
  return (
    <div>
      <h1>Thêm mới sản phẩm</h1>
      <form action="" onSubmit={onHandleSubmit}>
        <div className="form-group">
          <label htmlFor="">Tên sản phẩm</label>
          <input type="text" name="name" onInput={onHandleChange} />
          <span style={{ color: "red" }}>
            {errorsDetail.map((item) =>
              item.name == "name" ? item.message : ""
            )}
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="">Giá sản phẩm</label>
          <input type="text" name="price" onInput={onHandleChange} />
          <span style={{ color: "red" }}>
            {errorsDetail.map((item) =>
              item.name == "price" ? item.message : ""
            )}
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="">Ảnh sản phẩm</label>
          <input type="text" name="imageUrl" onInput={onHandleChange} />
          <span style={{ color: "red" }}>
            {errorsDetail.map((item) =>
              item.name == "imageUrl" ? item.message : ""
            )}
          </span>
        </div>
        <button>Thêm mới</button>
      </form>
    </div>
  );
};

export default AddProduct;
