import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToCartStorage, addToWishlistStorage } from "../Utils";

const ProductDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [product, setProduct] = useState({});
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    const singleProduct = data.find((product) => product.product_id == id);
    setProduct(singleProduct);
  }, [data, id]);

  const {
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
  };

  const handleWishlist = (product) => {
    addToWishlistStorage(product);
    setIsWishlisted(true);
  };

  return (
    <>
      <section className=" bg-[#f7f7f7] pb-20">
        <div className="bg-[#9538E2]  pt-12 pb-24  h-[300px] ">
          <h1 className="text-3xl font-bold mb-2 md:mb-4 text-white text-center ">
            Product Details
          </h1>
          <p className="text-white max-w-lg mx-auto text-center ">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>

        <div className="flex items-center justify-center w-2/3 mx-auto bg-white rounded-xl gap-10 p-6 relative -mt-28 shadow-lg">
          <div className="w-1/3">
            <img src={product_image} alt="" />
          </div>
          <div className="w-2/3 space-y-2">
            <h1 className="text-xl font-bold">{product_title}</h1>
            <p className="font-medium ">Price: ${price} </p>
            <div
              className={`badge px-4 py-2 rounded-lg badge-outline ${
                availability
                  ? "badge-success text-white"
                  : "badge-secondary text-white"
              }`}
            >
              {availability ? "In-Stock" : "Out of Stock"}
            </div>
            <p className="font-thin">{description}</p>
            <div>
              <h4 className="font-semibold mb-2">Specification:</h4>
              <ol className="list-decimal pl-5 font-thin">
                {Specification && Specification.length > 0 ? (
                  Specification.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))
                ) : (
                  <li>No specifications available</li>
                )}
              </ol>
            </div>
            <div>
              <h4 className="font-semibold mb-1 md:mb-2 ">Rating</h4>
              <div className="rating space-x-3 flex items-center">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <p className="bg-[rgba(9,8,15,0.05);] rounded-full py-1 px-2">
                  {rating}
                </p>
              </div>
            </div>
            <div className="flex gap-2 items-center pt-2">
              <button
                onClick={() => handleCart(product)}
                className="btn rounded-3xl bg-[#9538E2] text-white"
              >
                <div className="flex items-center gap-[2px] ">
                  <h1>Add To Cart</h1>
                  <img
                    width="18"
                    height="18"
                    src="https://img.icons8.com/fluency-systems-regular/50/shopping-cart--v1.png"
                    alt="shopping-cart--v1"
                    className="text-white"
                  />
                </div>
              </button>

              <button
                onClick={() => handleWishlist(product)}
                disabled={isWishlisted}
              >
                <img
                  width="50"
                  height="50"
                  src="https://img.icons8.com/ios/50/love-circled.png"
                  alt="love-circled"
                  className={isWishlisted ? "opacity-50" : ""}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
