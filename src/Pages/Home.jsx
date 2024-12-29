import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../Components/Categories";
import bannerImg from "../assets/banner.jpg"
const Home = () => {
  const categories = useLoaderData();
  return (
    <>
      <div className="bg-[rgba(247,247,247,255)] mt-0">
        <div className="bg-[#9538E2]">
          <div className="flex flex-col gap-4 items-center justify-center w-1/2 text-center mx-auto p-24">
            <h1 className="font-bold text-4xl text-white">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-white">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
            <button className="btn bg-white text-[#9538E2] rounded-3xl">
              Shop Now
            </button>
          </div>
        </div>
        <div className="relative -top-20 left-[500px] ">
          <img className="w-1/2 border rounded-xl p-3" src={bannerImg} alt="" />
        </div>

        <h1 className="text-center font-bold text-5xl mt-12 mb-4">
          Explore Cutting-Edge Gadgets
        </h1>
        <section className="flex gap-6 max-w-7xl mx-auto bg-[rgba(247,247,247,255)]  py-12">
          <div className=" p-5 rounded-lg">
            <div className="bg-[rgb(255,255,255)] p-6 rounded-lgde">
              <Categories categories={categories}></Categories>
            </div>
          </div>
          <div>
            <Outlet></Outlet>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;