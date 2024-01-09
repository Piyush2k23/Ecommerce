
const ShoppingInformation: React.FC = () => {
  return (
    <div className="pt-16 mb-12 flex gap-10">
        <div className="container mt-8 bg-slate-200 p-2 text-justify">
      <h1 className="text-3xl font-semibold mb-4">How to Order</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Browse Our Products</h2>
        <p>Explore our collection of high-quality products. Click on product categories to find what you're looking for.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Add Items to Your Cart</h2>
        <p>Click on the product you want to purchase, select the desired options (size, color, quantity), and click the "Add to Cart" button.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Review Your Cart</h2>
        <p>Review the items in your cart to ensure you have the correct products and quantities. You can update quantities or remove items if needed.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Proceed to Checkout</h2>
        <p>Click the "Proceed to Checkout" button when you're ready to complete your order. You'll be prompted to provide shipping and payment information.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Enter Shipping Information</h2>
        <p>Enter your shipping address and any additional required information. Ensure that the details are accurate to avoid shipping delays.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Choose Payment Method</h2>
        <p>Select your preferred payment method (credit card, PayPal, etc.) and enter the necessary payment details to complete the transaction.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Confirm Your Order</h2>
        <p>Review your order one last time, including the items, shipping address, and payment details. Confirm that everything is correct before finalizing your purchase.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Receive Order Confirmation</h2>
        <p>Once your order is successfully placed, you'll receive an order confirmation email with details about your purchase and estimated delivery times.</p>
      </div>

      {/* Add more sections as needed */}

    </div>
    <div className="container mx-auto mt-8 bg-slate-200 p-2 text-justify">
      <h1 className="text-3xl font-semibold mb-4">Shipping Information</h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Shipping Options</h2>
        <p>We offer various shipping options to cater to your needs. Choose the option that best suits your timeline and budget.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Delivery Times</h2>
        <p>Delivery times may vary based on your location and the chosen shipping method. We strive to process and ship orders promptly to ensure timely delivery.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Shipping Costs</h2>
        <p>Shipping costs are calculated based on the selected shipping method and your delivery address. You can view the shipping costs during the checkout process.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Tracking Your Order</h2>
        <p>Once your order is shipped, you will receive a confirmation email with a tracking number. You can use this number to track the status and location of your shipment.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. International Shipping</h2>
        <p>We offer international shipping to select countries. Please check our international shipping policy and rates before placing your order.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Shipping Address</h2>
        <p>Ensure that your shipping address is accurate and complete to avoid any delays or delivery issues. You can update your shipping address during the checkout process.</p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Shipping Restrictions</h2>
        <p>Certain products may be subject to shipping restrictions based on your location. Please review our shipping restrictions to ensure compliance with local regulations.</p>
      </div>

      {/* Add more sections as needed */}

    </div>
    </div>
  );
};

export default ShoppingInformation;