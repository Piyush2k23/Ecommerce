import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { BiLogInCircle } from "react-icons/bi";
import { useState } from "react";
import { useSelector } from "react-redux";

const Navbar: React.FC = () => {
 
   const cartQuantity = useSelector((state:any)=>state.cart.cartTotalQuantity)

  const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(true);

  const handleSearch = (e: React.MouseEvent<HTMLElement>): void => {
    setOpenSearch(!openSearch);
  };
  return (
    <>
      <div className="w-full fixed select-none z-50">
        <div className="hidden md:flex justify-between bg-gray-900 h-16 text-white items-center px-10 text-xl w-full">
          <div className="text-2xl"><Link to='/'>Logo</Link></div>
          <div className="flex w-full mx-auto justify-center items-center">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-lg rounded-r-none py-1.5 px-4 w-[70%] bg-slate-800 text-slate-200 text-xl outline-none"
            />
            <button className="bg-slate-800 p-[0.3rem] rounded-r-lg">
              <BiSearch className="text-3xl  text-red-700" />
            </button>
          </div>
          <nav className="flex gap-10">
            {login ? (
              <NavLink to="/login">
                <button className="middle none center rounded-lg bg-blue-500 py-3 px-6 font-sans text-sm font-bold uppercase text-white transition-all hover:bg-blue-600">
                  Login
                </button>
              </NavLink>
            ) : (
              <NavLink to="/" className=" flex items-center gap-2">
                <CgProfile className="text-2xl" />
                <span className="">Profile</span>
              </NavLink>
            )}
            <NavLink to="/cart" className="flex items-center gap-2 justify-center">
              <div className="relative"><AiOutlineShoppingCart className="text-3xl mr-2" />
              <div className="absolute text-base top-[-8px] right-0 bg-blue-600  rounded-full w-5 h-5 flex items-center justify-center pb-[2px]" >{cartQuantity}</div>
              </div>
              <span>Cart</span>
            </NavLink>
          </nav>
        </div>
        <div className="md:hidden flex flex-col  gap-4 bg-gray-900  text-white px-4 pt-2 py-2 ">
          <div className="flex justify-between items-center pt-2">
            <div className="text-2xl"><NavLink to="/">Logo</NavLink></div>
            <nav className="flex items-center gap-6">
              <NavLink to="/" className="text-2xl">
                <BiSearch onClick={handleSearch} />
              </NavLink>
              <NavLink to="/cart" className="text-2xl">
              <div className="relative"><AiOutlineShoppingCart className="text-2xl " />
              <div className="absolute text-sm top-[-6px] mr-[-6px] right-0 bg-blue-600  rounded-full w-4 h-4 flex items-center justify-center" >{cartQuantity}</div>
              </div>
              </NavLink>
              {login ? (
                <NavLink to="/login" className="text-2xl">
                  <BiLogInCircle />
                </NavLink>
              ) : (
                <NavLink to="/" className="text-2xl">
                  <CgProfile />
                </NavLink>
              )}
            </nav>
          </div>
          {openSearch && (
            <div className="md:hidden flex justify-center items-center w-full px-6 sm:px-16">
              <input
                type="text"
                placeholder="Search..."
                className="relative rounded-lg py-2 px-4 w-full bg-slate-100 text-black text-xl"
              />
              <div>
                <RxCross2
                  onClick={handleSearch}
                  className="text-2xl absolute text-gray-700  bottom-[1.1rem] right-12 sm:right-[5.4rem]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
