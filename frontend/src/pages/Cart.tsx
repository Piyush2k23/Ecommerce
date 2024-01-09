import { MdDeleteForever } from "react-icons/md";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeToCart } from "../features/cartSlice";
import { useState } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import CartTotal from "../components/CartTotal";
import Footer from "../components/Footer";
import CartInfo from "../components/CartInfo";

const Cart: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);
  const cartTotalQuantity = useSelector(
    (state: any) => state.cart.cartTotalQuantity
  );
  const dispatch = useDispatch();

  const [cart, setCart] = useState<boolean>(true);

  const handleRemoveToCart = (itemId: string) => {
    dispatch(removeToCart({ id: itemId }));
  };

  return (
    <>
      <div className="pt-12 md:pt-16 overflow-x-hidden select-none">
        <div className="bg-black flex items-center justify-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold h-20 md:h-32 w-full text-slate-200 mb-10 md:mb-20">
          Your Shopping Cart
        </div>
        {cartTotalQuantity !== 0 ? (
          <>
            <div>
            <h1 className="text-bold text-slate-600 text-2xl pl-2 italic block md:hidden">
                  Order Summary
            </h1>
            {cartItems.map((cartItem: any) => (
              <div className=" block md:hidden">
                
                <div className="flex justify-between items-center mx-2 my-2 mb-8 mt-4">
                  <div className="w-16 h-16 object-contain border-2 border-slate-200 rounded-sm">
                    <img
                      src={cartItem.image}
                      alt=""
                      className="w-full h-full p-1"
                    />
                  </div>
                  <div>
                    <span className="text-lg font-semibold">My Title</span>
                    <div className="flex  gap-2">
                      <span>Qty: </span>
                      <div className="flex justify-center items-center  text-white gap-2">
                        <button className="bg-slate-300 text-black px-2 pb-1 text-center rounded-md">
                          -
                        </button>
                        <span className="bg-slate-300 text-black px-2 py-1 font-semibold text-sm rounded-md">
                          10
                        </span>
                        <button className="bg-slate-300 text-black px-2 pb-1 text-center rounded-md">
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                  <span>₹&nbsp;{cartItem.price}</span>
                  <button
                    onClick={() => handleRemoveToCart(cartItem.id)}
                    className=" text-xl text-slate-600 hover:text-red-600"
                  >
                    <MdDeleteForever />
                  </button>
                </div>
                <div className="border-[1px] border-slate-300 w-auto mx-2 mt-3" />

              </div>
            ))}
            </div>
            <div className=" mx-1 lg:mx-24 hidden md:block">
              <table className="w-full">
                <thead className="">
                  <tr className="bg-slate-900 text-white h-12">
                    <th className="">Image</th>
                    <th className="">Product</th>
                    <th className="">Price</th>
                    <th className="">Quantity</th>
                    <th className="">Total</th>
                    <th className="">Remove</th>
                  </tr>
                </thead>
                {cartItems.map((cartItem: any) => (
                  <tbody key={cartItem.id}>
                    <tr className="border-b-2 border-slate-200">
                      <th className="w-44 px-8 py-6 text-center">
                        <div className="border-2 border-gray-100  rounded-md flex justify-center items-center">
                          <img
                            src={cartItem.image}
                            alt="cart image"
                            className=" lg:w-28 lg:h-32 p-2 hover:scale-105"
                          />
                        </div>
                      </th>
                      <th className="w-44">
                        <h1 className="text-md font-semibold ">
                          {cartItem.title}
                        </h1>
                      </th>
                      <th className="w-44">
                        <span className="font-semibold text-lg">
                          ₹&nbsp;{cartItem.price}
                        </span>
                      </th>
                      <th className="w-44">
                        <div className="flex justify-center items-center text-white gap-2">
                          <button className="bg-black  h-8 w-6">-</button>
                          <span className="bg-black px-6 py-1 font-semibold">
                            {cartItem.price}
                          </span>
                          <button className="bg-black  h-8 w-6">+</button>
                        </div>
                      </th>
                      <th className="w-44">
                        <span className="font-semibold text-lg">
                          ₹&nbsp;{cartItem.price}
                        </span>
                      </th>
                      <th className="w-44">
                        <button
                          onClick={() => handleRemoveToCart(cartItem.id)}
                          className=" text-xl text-slate-600 hover:text-red-600 hover:scale-125"
                        >
                          <MdDeleteForever />
                        </button>
                      </th>
                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
            <div className="sm:mx-24 md:mx-2 lg:mx-10 xl:mx-44 mt-12"> <CartTotal /></div>

          </>
        ) : (
          <div className="flex flex-col gap-2 items-center justify-center mb-16">
            <HiOutlineShoppingCart className="text-3xl" />
            <div className="text-xl sm:text-2xl text-center font-semibold">
              Your Cart is Empty.
            </div>
          </div>
        )}
        <CartInfo />
        <Footer />
      </div>
    </>
  );
};

export default Cart;
