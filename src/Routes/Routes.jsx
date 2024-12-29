import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Products from "../Components/Products";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Components/Cart";
import Contact from "../Components/Contact";
import FAQ from "../Components/FAQ"; 

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: (
      <div className="flex flex-col gap-4 items-center justify-center">
        <p className="text-5xl font-thin text-center">Error 404</p>
        <p className="text-xl font-thin">Page not found</p>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <Products />,
            loader: () => fetch("/data.json"),
          },
          {
            path: "/categories/:category",
            element: <Products />,
            loader: () => fetch("/data.json"),
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/:cart",
            element: <Cart />,
          },
        ],
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
        loader: () => fetch("/data.json"),
      },
    ],
  },
]);

export default routes;
