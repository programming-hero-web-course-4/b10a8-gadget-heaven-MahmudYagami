import { NavLink} from "react-router-dom";

const Categories = ({categories}) => {
  const baseButtonStyle = "btn rounded-3xl px-8 py-4";
  return (
    <div className="flex flex-col gap-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseButtonStyle}  ${
            isActive
              ? "bg-[rgb(149,56,226)] text-white"
              : "bg-[rgba(9,8,15,0.05)]"
          }`
        }
      >
        All Product
      </NavLink>

      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`/categories/${category.category}`}
          className={({ isActive }) =>
            `btn rounded-3xl px-6 py-4 ${
              isActive
                ? "bg-[rgb(149,56,226)] text-white"
                : "bg-[rgba(9,8,15,0.05)]"
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;