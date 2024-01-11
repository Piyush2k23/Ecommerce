import React, { useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from '../features/cartSlice';
import { Link } from 'react-router-dom';


interface ItemsProps {
  id: number;
  image: string;
  category: string;
  title: string;
  price: number;
}

interface ProductProps {
  item: ItemsProps;
}

const Product: React.FC<ProductProps> = ({ item }) => {


  const dispatch = useDispatch();

  const handleAddToCart = (product:any) => {
      dispatch(addToCart(product));
  }
 
  const [truncatedText, setTruncatedText] = useState<string>(item.title);

  const [isHovering, setIsHovering] = useState<boolean>(false);


   useEffect(()=>{
    if(item.title.length > 20 )  
    { 
      setTruncatedText(item.title.substring(0, 40) + '...')
    };
   },[truncatedText]);

   


    
   return (
    <div className="flex flex-col items-center mb-8 relative">
      <Link to="">
        <div
          className="border-solid border-2 w-56 h-64 rounded-md overflow-hidden mt-3"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img src={item.image} alt="" className="w-full h-full p-7 object-fit hover:scale-105" />
          {isHovering && (
            <div className="text-4xl absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%]  gap-3 flex transition ease-in">
              <FaRegHeart className="bg-white rounded-sm p-1 cursor-pointer hover:bg-slate-400" />
              <Link to={`product/${item.id}`}><IoSearch className="bg-white rounded-sm text-black p-1 cursor-pointer hover:bg-slate-400" / ></Link>
              <MdOutlineShoppingCart
                className="bg-white rounded-sm p-1 cursor-pointer hover:bg-slate-400"
                onClick={() => handleAddToCart(item)}
              />
            </div>
          )}
        </div>
      </Link>
      <div className="flex flex-col gap-2 text-center mt-2 w-60">
        <span className="text-md text-gray-500">{item.category}</span>
        <Link to="">
          <h2 className="text-lg font-semibold">{truncatedText}</h2>
        </Link>
        <span className="font-bold mt-2">Price: ${item.price}</span>
      </div>
    </div>
  );
};

export default Product;


