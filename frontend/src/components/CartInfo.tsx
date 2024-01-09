

const CartInfo: React.FC = () => {
  return (
      <div className="w-full p-8  bg-slate-100 mt-12 select-none">
        <div className="grid gap-y-6 grid-cols-1 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 ">
          <div className="">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/free-shipping.png"
              alt="free-shipping"
            />
            <div className="">
              <h3 className="text-xl md:text-2xl font-semibold pb-2">
                Free home delivery
              </h3>
              <p className="text-sm md:text-lg">
                Provide free home delivery for all product over ₹500
              </p>
            </div>
          </div>
          <div className="">
            <img
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/guarantee--v1.png"
              alt="guarantee--v1"
            />
            <div className="content">
              <h3 className="text-xl md:text-2xl font-semibold pb-2">
                Quality Products
              </h3>
              <p className="text-sm md:text-lg">
                We ensure the product quality that is our main goal
              </p>
            </div>
          </div>
          <div className="">
            <img
              width="42"
              height="42"
              src="https://img.icons8.com/ios/50/return-purchase.png"
              alt="return-purchase"
            />
            <div className="content">
              <h3 className="text-xl md:text-2xl font-semibold pb-2">
                7 Days Return
              </h3>
              <p className="text-sm md:text-lg">
                Return product within 7 days for any product you buy
              </p>
            </div>
          </div>
          <div className="">
            <img
              width="42"
              height="42"
              src="https://img.icons8.com/ios/50/headset--v1.png"
              alt="headset--v1"
            />
            <div>
              <h3 className="text-xl md:text-2xl font-semibold pb-2">
                Online Support
              </h3>
              <p className="text-sm md:text-lg">
                We ensure the product quality that you can trust easily
              </p>
            </div>
          </div>
        </div>
        </div>
  )
}

export default CartInfo