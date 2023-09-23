/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Navbar = ({ items }) => {
  return (
    <nav className="bg-slate-800 h-14">
      <div className="flex px-28 items-center justify-between h-full">
        <h3 className="text-white font-bold text-3xl">IJL.</h3>
        <ul className="flex items-center justify-between gap-10 text-white">
          <li className="group">
            <Link to={"/"} className="group-hover:text-red-200">
              Home
            </Link>
          </li>
          <li className="group">
            <Link to={"/about"} className="group-hover:text-red-200">
              About Us
            </Link>
          </li>
          <li className="group">
            <Link to={"/products"} className="group-hover:text-red-200">
              Products
            </Link>
          </li>
          <li>
            <Link to={"/cart"} className="px-4 py-2 bg-red-500 text-xs">
              Cart ({items.reduce((acumm, item) => acumm + item.qty, 0)})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
