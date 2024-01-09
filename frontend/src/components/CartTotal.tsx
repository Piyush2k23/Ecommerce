

const CartTotal: React.FC = () => {
  return (
    <div className="bg-slate-300 pt-6 flex  justify-center rounded-lg">
          <div className="flex flex-col md:flex-row gap-4 md:gap-24 lg:gap-56 xl:gap-96  justify-center md:justify-evenly ">
            <div className="flex flex-col gap-4">
            <span>If you have a promo code Enter it here</span>
            <div className="flex gap-4">
              <input type="text" placeholder="promo code" className="border-2 pl-2 border-slate-500 rounded-md"/>
              <button className="bg-slate-900 text-white px-8 py-2 rounded-md hover:bg-slate-700 hover:scale-105">Submit</button>
            </div>
            </div>
            <div className="flex flex-col gap-2 mt-6 md:mt-1 md:w-80">
              <h1 className="font-bold text-xl md:text-2xl lg:text-3xl pb-4">Cart Totals</h1>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{1000}</span>
                </div>
              <br className="border-2 border-black h-6 w-6"/>
              <div>
                <div className="flex justify-between">
                  <span>Shipping Fee</span>
                  <span>₹0.0</span>
                </div>
              </div>
              <br className="border-2 border-black h-6 w-6"/>
              <div>
                <div className="flex justify-between text-lg">
                  <span className="font-semibold">Subtotal</span>
                  <span className="font-semibold">₹{1000}</span>
                </div>
              </div>
              <button className="bg-green-600 p-2 my-4 font-bold rounded-lg hover:scale-105 hover:bg-green-500 transition hover:translate-y-1">PROCEED TO CHECKOUT</button>
            </div>
            </div>
        </div>
  )
}

export default CartTotal