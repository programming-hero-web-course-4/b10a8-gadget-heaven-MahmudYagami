import { toast } from "react-hot-toast";

const getFromCart = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const addToCartStorage = (item) => {
  const carts = getFromCart();
  const isExist = carts.find(
    (product) => product.product_id === item.product_id
  );

  if (isExist) {
    toast.error("Can't add any more!");
    return;
  }

  carts.push(item);
  localStorage.setItem("cart", JSON.stringify(carts));
  toast.success("Item added to cart!");
};

const removeCart = (id) => {
  const carts = getFromCart();
  const remaining = carts.filter((product) => product.product_id !== id);
  localStorage.setItem("cart", JSON.stringify(remaining));
  toast.success("Removed from Cart");
};

// Wishlist
const removeWishlist = (id) => {
  const wishlist = getFromWishlist();
  const remaining = wishlist.filter((product) => product.product_id !== id);
  localStorage.setItem("wishlist", JSON.stringify(remaining));
  toast.success("Removed from Wishlist");
};

const getFromWishlist = () => {
  const wishlist = localStorage.getItem("wishlist");
  return wishlist ? JSON.parse(wishlist) : [];
};

const addToWishlistStorage = (item) => {
  const wishlist = getFromWishlist();
  const isExist = wishlist.find(
    (product) => product.product_id === item.product_id
  );

  if (isExist) {
    toast.error("Item is already in your wishlist!");
    return;
  }

  wishlist.push(item);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  toast.success("Item added to wishlist!");
};

export {
  addToCartStorage,
  getFromCart,
  removeCart,
  addToWishlistStorage,
  getFromWishlist,
  removeWishlist,
};
