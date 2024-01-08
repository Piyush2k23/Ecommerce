import { MdMailOutline } from "react-icons/md";
import { NavLink } from "react-router-dom";

const NewsLetter: React.FC = () => {
  return (
    <section className="bg-slate-600 ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-4 lg:px-6">
        <div className="mx-auto max-w-screen-md sm:text-center">
          <h2 className="mb-4 text-3xl tracking-tight font-extrabold sm:text-4xl text-white">
            Sign up for our newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-2xl font-light md:mb-2 sm:text-xl text-gray-300">
            Stay up to date with the products announcements and
            exclusive discounts feel free to sign up with your email.
          </p>
          <form action="#">
            <div className="items-center mx-auto mb-3  max-w-screen-sm flex flex-col sm:flex sm:flex-row gap-4 sm:gap-0 sm:space-y-0">
              <div className="relative w-full">
                <label className="hidden mb-2 text-sm font-medium text-gray-300">
                  Email address
                </label>
                <div className="flex absolute top-[32%] text-lg left-0 items-center pl-3 text-slate-400">
                <MdMailOutline />
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                />
              </div>
              <div className="w-full sm:w-auto">
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-green-400 rounded-lg border cursor-pointer bg-primary-700 border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:bg-slate-800 "
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mx-auto max-w-screen-sm text-sm text-center text-gray-500 newsletter-form-footer dark:text-gray-300">
              We care about the protection of your data.{" "}
              <NavLink
                to="#"
                className="font-medium text-blue-400 hover:underline"
              >
                 Read our Privacy Policy
              </NavLink>
              .
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
