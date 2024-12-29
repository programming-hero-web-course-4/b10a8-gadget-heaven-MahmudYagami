import { addToCartStorage } from "../Utils";

const Wishlist = ({ product, handleRemoved }) => {
  const {
    product_id, 
    product_title,
    price,
    product_image,
    availability,
    description,
    Specification,
    rating,
  } = product;
  
  const handleCart = (product) => {
    addToCartStorage(product);
  }

  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center justify-center w-2/3 mx-auto bg-white rounded-xl gap-10 p-2 shadow-lg mb-16">
        <div className="w-1/3">
          <img src={product_image} alt="" />
        </div>
        <div className="w-2/3 space-y-2">
          <h1 className="text-xl font-bold">{product_title}</h1>
          <div className="flex gap-1">
            <h1 className="font-bold">Description:</h1>
            <p>{description}</p>
          </div>
          <p className="font-bold">Price: ${price}</p>
          <button
            className="btn bg-[#9538E2] text-white px-5 py-1 rounded-3xl mt-1"
            onClick={() => handleCart(product)}
          >
            Add To Cart
          </button>
        </div>
        <button onClick={() => handleRemoved(product_id)}>
          <img
            width="48"
            height="48"
            src="https://img.icons8.com/fluency/48/cancel.png"
            alt="cancel"
          />
        </button>
      </div>
    </section>
  );
};

export default Wishlist;
