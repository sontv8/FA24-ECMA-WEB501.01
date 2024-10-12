import { Link } from "react-router-dom";

const ProductManagement = ({ products, onHandleRemove }) => {
  //   const { products, onHandleRemove } = props;

  //   console.log(props.products); {products: [...]}

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <Link to="/admin/products/add">
        <button>Thêm mới sản phẩm</button>
      </Link>
      {/* <a href={"/admin/products/add"}>
        <button>Thêm mới sản phẩm</button>
      </a> */}
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
                <img src={product.imageUrl} alt="" style={{ width: 300 }} />
              </td>
              <td>
                <button onClick={() => onHandleRemove(product.id)}>
                  Delete
                </button>
                {/* <a href={`/admin/products/${product.id}`}>
                  <button>Details</button>
                </a> */}
                <Link to={`/admin/products/${product.id}`}>
                  <button>Details</button>
                </Link>
                <Link to={`/admin/products/${product.id}/update`}>
                  <button>Update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ProductManagement;
