import {useLocation } from "react-router-dom";


const Cart = ({ product, handleRemoved }) => {
  const { pathname } = useLocation();
  const {
    product_title,
    price,
    product_image,
    product_id,
    description

   
  } = product;

  return (
    <section>
      <div className="flex items-center justify-center w-2/3 mx-auto bg-white rounded-xl gap-10 py-1 px-2 shadow-lg mb-12">
        <div className="w-1/3">
          <img src={product_image} alt="" />
        </div>
        <div className="w-2/3 space-y-2 md:space-y-3">
          <h1 className="text-3xl font-bold">{product_title}</h1>
          <p className="font-thin text-xl">{description}</p>
          <p className="font-medium   text-xl">Price: ${price} </p>
        </div>
        <button
          onClick={() => handleRemoved(product_id)}
          className="text-2xl p-3 rounded-full cursor-pointer"
        >
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

export default Cart;
