
const ContactUs: React.FC = () => {
  return (
    <div className=" w-full pt-16 md:pt-20 p-2 md:p-4  bg-slate-200 pb-1 text-justify">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>

      <div className="mb-6">
        <p>
          Have a question or need assistance? We're here to help! Please feel free to reach out to us through the following channels:
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Customer Support</h2>
        <p>
          Email: <a href="mailto:support@sales24.com" className="text-blue-500">support@sales24.com</a>
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Business Inquiries</h2>
        <p>
          Email: <a href="mailto:info@sales24.com" className="text-blue-500">info@sales24.com</a>
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Address</h2>
        <p>
          Sales24<br />
          A-42, Pratap Nagar<br />
          Jaipur, Rajasthan, 305001<br />
          India
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Connect With Us</h2>
        <p>
          Follow us on social media for updates, promotions, and more:
        </p>
        <div className="flex mt-2">
          <a href="#" className="text-blue-500 mr-4">Facebook</a>
          <a href="#" className="text-blue-500 mr-4">Twitter</a>
          <a href="#" className="text-blue-500">Instagram</a>
        </div>
      </div>


    </div>
  );
};

export default ContactUs;
