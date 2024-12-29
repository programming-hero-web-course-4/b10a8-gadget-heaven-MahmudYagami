import { Link } from "react-router-dom";

const Product = ({product}) => {
  const { product_title, price, product_image, product_id } = product;
  return (
    <div className="p-3 bg-white rounded-lg flex flex-col gap-3">
      <img className="w-64 h-64 object-fill" src={product_image} alt="" />
      <h1 className="font-bold text-xl">{product_title}</h1>
      <p>Price: {price}</p>
      <Link
        to={`/product/${product_id}`}
        className="btn btn-outline w-1/2 btn-secondary px-4 py-0 rounded-3xl"
      >
        View Details
      </Link>
    </div>
  );
};

export default Product;