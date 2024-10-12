import { useParams } from "react-router-dom";

const ProductDetail = ({ products }) => {
  const { id } = useParams();
  const currentProduct = products.find((item) => {
    return item.id == id;
  });
  console.log(currentProduct);

  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <div>
        <img src={currentProduct.imageUrl} alt="" />
        <h2>{currentProduct.name}</h2>
        <p>{currentProduct.price}</p>
      </div>
    </div>
  );
};

export default ProductDetail;

/*
    B1: lấy id từ URL
    B2: lấy dữ liệu sản phẩm dựa vào id
    B3: hiển thị dữ liệu ra html
*/
