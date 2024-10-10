const ProductManagement = ({ products, onHandleRemove }) => {
  //   const { products, onHandleRemove } = props;

  //   console.log(props.products); {products: [...]}

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <table>
        <thead>
          <tr>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Ảnh sản phẩm</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <img src={product.imageUrl} alt="" />
              </td>
              <td>
                <button onClick={() => onHandleRemove(product.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductManagement;
