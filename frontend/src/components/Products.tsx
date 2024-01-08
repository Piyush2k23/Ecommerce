import { popularProducts } from "../data";
import Product from "./Product";

const Products: React.FC = () => {
    return (
      <div className="mt-10  mx-6 flex flex-col  justify-center items-center">
        <h1 className="text-center text-2xl font-bold mb-3">NEW ARRIVALS</h1>
      <p className="text-center mb-8">All the latest picked from designer of our store</p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8">
        {
            popularProducts.map((item)=>( 
                <Product key={item.id} item={item} />
            ))
        }
        </div>
        
      </div>
    )
  }
  
  export default Products;