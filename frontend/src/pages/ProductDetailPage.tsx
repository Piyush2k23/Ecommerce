import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { products } from "../data.ts";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";


const ProductPage: React.FC = () => {
  const dispatch = useDispatch();

  const [size, setSize] = useState<string>("M");
  const [active, setActive] = useState<boolean>(false);


  const handleAddToCart = (product: any) => {
    dispatch(addToCart(product));
  };

  return (
    <>
      {products.map((product: any) => (
        <div key={product.id}>
          <div className="w-full pt-16 md:pt-20 lg:pt-24 gap-24 md:gap-12 lg:gap-24  md:flex px-2 md:px-8 lg:px-20 xl:px-44 overflow-x-hidden">
          <h1 className="text-lg sm:text-xl sm:text-center font-bold w-full block md:hidden">{product.title}</h1>
            <div className=" md:border-2 md:border-gray-200 flex flex-col items-center justify-center p-2 md:p-6 lg:p-2 rounded-md  md:w-[45%]">
              <div className="w-72 sm:w-80  md:w-80 xl:w-96 p-4 lg:pb-12 select-none">
                <img src={product.image} alt="product image" />
              </div>
            </div>
            <div className=" flex flex-col gap-4 md:w-[55%]">
              <h1 className="text-2xl font-bold hidden md:block">{product.title}</h1>
              <div className="flex justify-between">
              <span className="text-2xl font-bold ">
                ₹&nbsp;{product.price}
              </span>
              <span className="text-md">
                &#9733;{product.rating.rate} ({product.rating.count})
              </span>
              </div>
             
              <p className=" text-justify text-lg leading-8 text-slate-600">
                {product.description}
              </p>
              <div>
                <h3>SIZE:
                  <span className="font-medium ml-1"> {size}</span>
                </h3>
                <div className="flex gap-6 text-md  mt-4 ">
                  <button className={`border-2 border-slate-400  rounded-full w-8 h-8  hover:text-white hover:bg-slate-700 pb-[2px] ${size==='S' ? 'bg-slate-700 text-white' : ''}`} onClick={() => setSize("S")}>S</button>
                  <button className={`border-2 border-slate-400  rounded-full w-8 h-8  hover:text-white hover:bg-slate-700 pb-[2px] ${size==='M' ? 'bg-slate-700 text-white' : ''}`} onClick={() => setSize("M")}>M</button>
                  <button className={`border-2 border-slate-400  rounded-full w-8 h-8  hover:text-white hover:bg-slate-700 pb-[2px] ${size==='L' ? 'bg-slate-700 text-white' : ''}`} onClick={() => setSize("L")}>L</button>
                  <button className={`border-2 border-slate-400  rounded-full w-8 h-8  hover:text-white hover:bg-slate-700 pb-[2px] ${size==='XL' ? 'bg-slate-700 text-white' : ''}`} onClick={() => setSize("XL")}>XL</button>
                </div>
                <div>
                  <div className="flex items-center gap-4 mt-6 ">
                  <div className="flex gap-6 rounded-2xl border-2 w-28 p-2 justify-between border-slate-600">
                    <button className="text-xl"><FiMinus /></button>
                    <span className="font-semibold">1</span>
                    <button className="text-xl"><FiPlus /></button>
                   </div>
                   <button className="rounded-full hidden md:block bg-blue-500 py-3 px-8 lg:px-8 xl:px-24 text-sm md:text-md lg:text-lg font-bold text-white transition-all hover:bg-blue-600"  onClick={() => handleAddToCart(product)}>
                  ADD TO CART
                </button>
                <div className="border-2 border-slate-400 w-10 h-10 rounded-full flex items-center justify-center text-xl hover:border-pink-500 " ><button className={` ${active ? 'text-pink-600' : 'text-black'}`} onClick={() => setActive(!active)}><FiHeart/></button></div>
                  </div>
                  <button className="rounded-full mt-6 w-full block md:hidden bg-blue-500 py-3 px-10 text-sm lg:text-md font-bold text-white transition-all hover:bg-blue-600"  onClick={() => handleAddToCart(product)}>
                  ADD TO CART
                </button>
                </div>
              </div>
              <div className="flex gap-6 justify-center">
                <button
                  onClick={() => handleAddToCart(product)}
                  className="middle none center rounded-lg bg-transparent  py-3 px-6 font-sans text-sm font-bold uppercase text-black transition-all hover:bg-gray-100 border-2 border-gray-400"
                >
                  BUY NOW
                </button>
                
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductPage;









// return (
//   <>
//     {products.map((product: any) => (
//       <div key={product.id}>
//         <div className="w-full pt-24 gap-24 md:flex mx-auto">
//           <div className="w-[40%] h-[0%] ml-24 border-2 border-gray-200 flex flex-col items-center justify-center p-12 rounded-md">
//             <div className="w-48 md:w-56 lg:w-72 pb-12 select-none">
//               <img src={product.image} alt="product image" />
//             </div>
//           </div>
//           <div className="w-[40%]  flex flex-col gap-4 ">
//             <h1 className="text-3xl font-bold">{product.title}</h1>
//             <span className="text-md">
//               &#9733;{product.rating.rate} ({product.rating.count})
//             </span>
//             <span className="text-2xl font-bold ">
//               ₹&nbsp;{product.price}
//             </span>
           
//             <p className=" text-justify text-lg leading-8">
//               {product.description}
//             </p>
//             <div className="flex gap-6 justify-center">
//               <button
//                 onClick={() => handleAddToCart(product)}
//                 className="middle none center rounded-lg bg-transparent  py-3 px-6 font-sans text-sm font-bold uppercase text-black transition-all hover:bg-gray-100 border-2 border-gray-400"
//               >
//                 SAVE TO WISHLIST
//               </button>
//               <button className="rounded-lg bg-blue-500 py-3 px-24 text-md font-bold text-white transition-all hover:bg-blue-600">
//                 ADD TO CART
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </>
// );
// };








{
  /* <div className="w-full pt-24 md:flex ">
        <div className="w-[40%] h-[40%] ml-24 border-2 border-gray-200 flex flex-col items-center justify-center p-12 rounded-md">
          <div className="w-48 md:w-56 lg:w-72 pb-12 select-none">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
              alt=""
            />
          </div>
          <div className="flex gap-6">
            <button onClick={()=> handleAddToCart(product)} className="middle none center rounded-lg bg-transparent  py-3 px-6 font-sans text-sm font-bold uppercase text-black transition-all hover:bg-gray-100 border-2 border-gray-400">
              Add To Cart
            </button>
            <button className="middle none center rounded-lg bg-blue-500 py-3 px-9 font-sans text-sm font-bold uppercase text-white transition-all hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        </div>
        <div className="w-[60%]  md:mr-24 p-6 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">
            Mens Casual Premium Slim Fit T-Shirts
          </h1>
          <span className="text-xl font-semibold">₹&nbsp;22.3</span>
          <span className="text-lg">&#9733;4.1 (259)</span>
          <p className=" text-justify text-lg leading-8">
            Slim-fitting style, contrast raglan long sleeve, three-button henley
            placket, light weight & soft fabric for breathable and comfortable
            wearing. And Solid stitched shirts with round neck made for
            durability and a great fit for casual fashion wear and diehard
            baseball fans. The Henley style round neckline includes a
            three-button placket.
          </p>
        </div>
      </div> */
}
