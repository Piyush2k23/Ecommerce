import axios from "axios";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLock } from "react-icons/ai";
import { RxPerson } from "react-icons/rx";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  showToastMessage,
  showToastMessageConfirmPasswordEmpty,
  showToastMessageEmailFieldEmpty,
  showToastMessageFirstNameEmpty,
  showToastMessageInputFieldEmpty,
  showToastMessageLastNameEmpty,
  showToastMessagePasswordConfirmPasswordNotSame,
  showToastMessagePasswordFieldEmpty,
} from "../message";
import Footer from "../components/Footer";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState<FormData>();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm: any = (data: any) => {
    let errors: any = {};

    // Check if the username is empty
    if (!data.firstName.trim()) {
      errors.firstName = "First Name is required";
    }

    if (!data.lastName.trim()) {
      errors.lastName = "Last Name is required";
    }

    // Check if the email is empty and has a valid format
    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is not valid";
    }

    // Check if the password is empty
    if (!data.password.trim()) {
      errors.password = "Password is required";
    }

    // Check if the confirm password is empty
    if (!data.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm Password is required";
    }

    return errors;
  };

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = formData;

    // if (
    //   firstName === "" &&
    //   lastName === "" &&
    //   email === "" &&
    //   password === "" &&
    //   confirmPassword === ""
    // ) {
    //   showToastMessageInputFieldEmpty();
    // } else if (firstName === "") {
    //   showToastMessageFirstNameEmpty();
    // } else if (lastName === "") {
    //   showToastMessageLastNameEmpty();
    // } else if (email === "") {
    //   showToastMessageEmailFieldEmpty();
    // } else if (password === "") {
    //   showToastMessagePasswordFieldEmpty();
    // } else if (confirmPassword === "") {
    //   showToastMessageConfirmPasswordEmpty();
    // } else if (password !== confirmPassword) {
    //     showToastMessagePasswordConfirmPasswordNotSame();
    // }

    const validationErrors: any = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:4000/api/user/register",
          { firstName, lastName, email, password }
        );
        if (response.status === 200) {
          navigate("/login");
          // showToastMessage();
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center pt-16 md:overflow-y-hidden">
        <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24">
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-md shadow-2xl p-5"
            >
              <div className="flex flex-col items-center">
                <h1 className="text-gray-800 font-bold text-2xl mb-1">
                  REGISTER
                </h1>
                <p className="text-sm font-normal text-gray-600 mb-8">
                  Enter your information to register
                </p>
              </div>
              {errors?.firstName && (
                <p className="text-red-600 mt-[-16px]">{errors.firstName}</p>
              )}
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <RxPerson />
                <input
                  id="firstName"
                  className=" pl-2 w-full outline-none border-none"
                  type="firstName"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              {errors?.lastName && (
                <p className="text-red-600 mt-[-16px]">{errors.lastName}</p>
              )}
              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <RxPerson />
                <input
                  id="lastName"
                  className=" pl-2 w-full outline-none border-none"
                  type="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
              {errors?.email && <p className="text-red-600  mt-[-16px]">{errors.email}</p>}

              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <AiOutlineMail />
                <input
                  id="email"
                  className=" pl-2 w-full outline-none border-none"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              {errors?.password && (
                <p className=" text-red-600  mt-[-16px]">{errors.password}</p>
              )}

              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl ">
                <AiOutlineLock className="text-xl" />
                <input
                  className="pl-2 w-full outline-none border-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              {errors?.confirmPassword && (
                <p className="text-red-600 mt-[-16px]">{errors.confirmPassword}</p>
              )}

              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl ">
                <AiOutlineLock className="text-xl" />
                <input
                  className="pl-2 w-full outline-none border-none"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>

              <button
                type="submit"
                className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Register Now
              </button>
              <div className="flex justify-between mt-4">
                <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
                  Forgot Password ?
                </span>

                <NavLink
                  to="/login"
                  className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                >
                  If you have already account please login
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

export default Register;
