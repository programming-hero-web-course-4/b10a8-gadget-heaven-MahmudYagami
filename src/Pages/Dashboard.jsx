import { useEffect, useState } from "react";
import {
  getFromCart,
  removeCart,
  getFromWishlist,
  removeWishlist,
} from "../Utils";
import Cart from "../Components/Cart";
import Wishlist from "../Components/Wishlist";
import imgModal from "../assets/Group.png";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState("cart");
  const [products, setProducts] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    if (activeComponent === "cart") {
      const cart = getFromCart();
      setProducts(cart);
    } else if (activeComponent === "wishlist") {
      const wishlist = getFromWishlist();
      setFavourites(wishlist);
    }
  }, [activeComponent]);

  const handleCartRemoved = (id) => {
    removeCart(id);
    const updatedCart = getFromCart();
    setProducts(updatedCart);
  };

  const handleWishlistRemoved = (id) => {
    removeWishlist(id);
    const updatedWishlist = getFromWishlist();
    setFavourites(updatedWishlist);
  };

  const totalCost = products
    .reduce((acc, product) => acc + product.price, 0)
    .toFixed(2);

  const sortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  const handlePurchase = () => {
    const totalCost = products
      .reduce((acc, product) => acc + product.price, 0)
      .toFixed(2);

    localStorage.removeItem("cart");

    toast((t) => (
      <span className="space-y-4">
        <div className="flex flex-col gap-3 items-center justify-center">
          <img src={imgModal} alt="" />
          <h1 className="font-bold text-xl">Payment Successfully</h1>
          <div className="border boder-top w-3/4 mx-auto"></div>
          <p className="text-[rgba(9,8,15,0.6)] font-semibold">
            Thanks for purchasing.
          </p>
          <p className="text-[rgba(9,8,15,0.6)] font-semibold">
            Total: {totalCost}
          </p>
        </div>
        <NavLink
          to="/"
          className="w-full btn bg-gray-400 text-white p-2 rounded-2xl"
          onClick={() => toast.dismiss(t.id)}
        >
          Close
        </NavLink>
      </span>
    ));

    setProducts([]);
  };

  return (
    <>
      {/* Banner */}
      <section className="mb-12 pb-12 bg-[#F7F7F7] ">
        <div className="text-center bg-[#9538E2] p-12 space-y-4">
          <h1 className="text-white font-bold text-4xl">Dashboard</h1>
          <p className="text-white">
            Explore the latest gadgets that will take your experience to the
            next <br />
            level. From smart devices to the coolest accessories, we have it
            all!
          </p>
          <div className="flex items-center justify-center gap-3">
            <button
              className={`w-28 text-xl px-4 py-1 rounded-3xl btn border-gray-400 
      ${
        activeComponent === "cart"
          ? "bg-white text-[#9538E2] border-[#9538E2]"
          : "bg-[#9538E2] text-white border-white"
      }`}
              onClick={() => setActiveComponent("cart")}
            >
              Cart
            </button>
            <button
              className={`w-28 text-xl font-semibold btn rounded-3xl border-gray-400 
      ${
        activeComponent === "wishlist"
          ? "bg-white text-[#9538E2] border-[#9538E2]"
          : "bg-[#9538E2] text-white border-white"
      }`}
              onClick={() => setActiveComponent("wishlist")}
            >
              Wishlist
            </button>
          </div>
        </div>

        {/* Conditional Rendering for Cart or Wishlist */}
        {activeComponent === "cart" ? (
          <div className="w-2/3 mx-auto mt-4  ">
            {/* Cart Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Cart</h2>
              <p className="text-xl font-bold">Total cost: ${totalCost}</p>
              <div className="flex gap-4">
                <button
                  onClick={sortByPrice}
                  className="btn btn-outline text-[#9538E2] rounded-3xl"
                >
                  Sort by Price
                </button>
                <button
                  onClick={handlePurchase}
                  className="btn rounded-3xl bg-[#9538E2] text-white"
                >
                  Purchase
                </button>
              </div>
            </div>
            {/* Cart Items */}
            {products.map((product, i) => (
              <Cart
                key={i}
                product={product}
                handleRemoved={handleCartRemoved}
              />
            ))}
          </div>
        ) : (
          <div className="w-2/3 mx-auto mt-4">
            <h2 className="text-2xl font-bold text-center mb-3">Wishlist</h2>

            {favourites.map((product, i) => (
              <Wishlist
                key={i}
                product={product}
                handleRemoved={handleWishlistRemoved}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default Dashboard;
