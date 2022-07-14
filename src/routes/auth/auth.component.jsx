import BlankLayout from "../../components/layout/blank-layout.component";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth0 } from "@auth0/auth0-react";
import { toastMaker } from "../../utils/toastMaker";

const Auth = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { loginWithRedirect } = useAuth0();

  const onSubmit = (data) => {
    console.log(data);
    loginWithRedirect();
  };

  return (
    <BlankLayout>
      <div className="w-full h-full bg-white flex justify-center items-start">
        <div className="text-black">
          <ToastContainer />
          <h2 className="font-bold text-2xl pt-[50px] pb-[30px]">
            Sign in or create an account
          </h2>
          <div className="w-[500px] h-[200px]  ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col pt-[10px] gap-3"
            >
              <label>Email address</label>
              <input
                type="text"
                {...register("email", {
                  required: "Email Address is required",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Invalid Email, please make sure your input.",
                  },
                })}
                className={`border border-solid border-gray-700 h-[50px] px-[10px] focus:outline-none focus:ring focus:border-main-blue-light
                ${
                  errors.email?.message &&
                  "focus:ring-red-500 focus:border-red-600"
                }
                `}
              />
              <p className="text-red-600 text-center">
                {errors.email?.message}
              </p>

              <button
                type="submit"
                className="border border-solid border-blue-700 h-[50px] px-[10px] bg-button-blue hover:bg-button-blue-dark text-white"
              >
                Continue with email
              </button>
            </form>
          </div>
        </div>
      </div>
    </BlankLayout>
  );
};

export default Auth;
