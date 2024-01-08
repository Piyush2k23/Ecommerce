import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChangeEvent, useState } from "react";
import { showToastMessageEmailFieldEmpty, showToastMessagePasswordFieldEmpty, showToastMessageEmailNotFound, showToastMessageInputFieldEmpty } from "../message";
import Footer from "../components/Footer";

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const { email, password } = formData;

    if (email === "" && password === "") {
      return showToastMessageInputFieldEmpty();
    } else if (email === "") {
      return showToastMessageEmailFieldEmpty();
    } else if (password === "") {
      return showToastMessagePasswordFieldEmpty();
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/user/login",
        { email, password }
      );
      if(response.status === 200) {
        // navigate("/dashboard");
        console.log("successfully login");
      }
      else showToastMessageEmailNotFound();
    } catch (error) {
      console.log(error);
      showToastMessageEmailNotFound();
 
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <form
              className="bg-white rounded-md shadow-2xl p-5"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col items-center">
                <h1 className="text-gray-800 font-bold text-2xl mb-1">LOGIN</h1>
                <p className="text-sm font-normal text-gray-600 mb-8">
                  Welcome Back
                </p>
              </div>
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <AiOutlineMail />
                <input
                  id="email"
                  className=" pl-2 w-full outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <AiOutlineLock className="text-xl" />
                <input
                  className="pl-2 w-full outline-none border-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChangeInput}
                />
              </div>
              <button
                type="submit"
                className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Login
              </button>
              <div className="flex justify-between mt-4">
                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                  Forgot Password ?
                </span>

                <NavLink
                  to="/register"
                  className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                >
                  Don't have an account yet?
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Login;
