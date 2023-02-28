import React, { useState } from "react";
import { SearchBar } from "..//index";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { logoIcon } from "../../assets";
import { useNavigate, Link } from "react-router-dom";
import { MdArrowDropDown, MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../reduxKit/reducer";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [showUserMenu, setshowUserMenu] = useState(false);
  const { cart, user } = useSelector((state) => state.app);

  const navigation = useNavigate();
  const dispatch = useDispatch();

  const handleNav = () => {
    setNav(!nav);
  };

  const goToCart = () => {
    if (!user) return navigation("/login");
    navigation("/cart");
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center px-3">
        <img
          src={logoIcon}
          className="h-16 object-contain"
          alt="le-cheneIcon"
        />

        <ul className="hidden font-semibold md:flex mx-12 flex-grow space-x-8">
          <Link className="NavLink" to="/">
            Home
          </Link>
          <Link className="NavLink" to="/products">
            Product
          </Link>
          <Link className="NavLink">Category</Link>
        </ul>

        <div className="space-x-4 flex items-center">
          <div
            onClick={goToCart}
            className="relative w-7 h-7 flex cursor-pointer hover:text-green-700"
          >
            <MdOutlineShoppingCart className="w-full h-full" />
            <span className="absolute left-[65%] bottom-[65%] text-white bg-rose-700 rounded-full text-[10px] px-1">
              {cart.length}
            </span>
          </div>

          {user ? (
            <div className="flex relative items-center space-x-3">
              <div
                onClick={() => setshowUserMenu(!showUserMenu)}
                className="flex items-center space-x-1 bg-white rounded-lg cursor-pointer p-1"
              >
                <img
                  src={
                    "https://images.unsplash.com/flagged/photo-1578905326519-3aa98aa6a728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWZyaWNhbiUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  }
                  alt="user profile"
                  className="w-8 h-8 object-cover rounded-full"
                />
                <h3 className="font-medium text-gray-800 text-[12px]">
                  James Author
                </h3>
                <MdArrowDropDown />
              </div>

              <button
                onClick={() => dispatch(logout())}
                className="bg-[#3A998E] py-2 px-4 shadow-xs shadow-cyan-700 text-sm text-white rounded-md"
              >
                Logout
              </button>

              {showUserMenu && (
                <div className="bg-white top-12 w-full transition-all duration-700 ease-out left-[-10px] z-40 shadow-lg rounded-xl p-2 border border-green-600 absolute">
                  <p className="menuItems">Profile</p>
                  <p className="menuItems">WishList</p>
                  <p className="menuItems">My Orders</p>
                  <p className="menuItems">Custom Orders</p>
                  <p className="menuItems">Request Support</p>
                  <p className="menuItems">Help</p>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigation("/login")}
              className="bg-[#3A998E] py-2 px-5 shadow-sm shadow-cyan-700 text-sm text-white rounded-md"
            >
              Login
            </button>
          )}
        </div>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div className="w-full flex justify-end px-3">
        <SearchBar />
      </div>
    </div>
  );
};

export default Header;

//  <div
//    className={
//      nav
//        ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#3A998E] ease-in-out duration-700 text-white"
//        : "fixed ease-in-out duration-700 left-[-100%]"
//    }
//  >
//    {/* <h1 className="w-full text-3xl font-bold m-4"> {logo} </h1> */}

//    <ul className="p-4 uppercase text-[#fff]">
//      <li className="p-4 border-b border-gray-600">
//        <Link to="/">Home</Link>
//      </li>
//      <li className="p-4 border-b border-gray-600">
//        <Link to="/products">Product</Link>
//      </li>
//      <li className="p-4 border-b border-gray-600">
//        <Link to="/category">Category</Link>
//      </li>
//      <li className="p-4 border-b border-gray-600">
//        <Link to="/blog">Blog</Link>
//      </li>
//      <li className="p-4">
//        <Link to="/contact">Contact</Link>
//      </li>
//    </ul>
//  </div>;
