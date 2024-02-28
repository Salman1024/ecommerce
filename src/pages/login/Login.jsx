import React from "react";
import ContentWrapper from "../../component/contentWrapper/ContentWrapper";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Login = () => {
  return (
    <div className="py-24">
      <ContentWrapper>
        <div className="section flex items-center justify-center h-[80vh] ">
          <div className="box bg-white w-[500px] max-sm:p-3 p-8 leading-normal shadow-lg max-sm:w-full">
            <div className="login-title flex items-center justify-center ">
              <p className="text-2xl font-semibold mb-2 overflow-hidden text-ellipsis whitespace-nowrap">Sign In to MegaMart</p>
            </div>
            <div className="input-section w-full">
              <div className="input-field flex flex-col mb-3">
                <label htmlFor="email " className="font-medium">
                  Email:{" "}
                </label>
                <input
                  type="email"
                  className="border border-slate-300 rounded outline-none py-1 px-1"
                />
              </div>
              <div className="input-field flex flex-col mb-4">
                <label htmlFor="password" className="font-medium">
                  Password:{" "}
                </label>
                <input
                  type="password"
                  className="border border-slate-300 rounded outline-none py-1 px-1"
                />
                
              </div>
              <div className="flex justify-between max-sm:flex-col gap-2">
                <a href="#" className=" text-blue-700">
                  {" "}
                  Forget Password?
                </a>
                
                <a href="#" className=" text-blue-700">
                  {" "}
                  Create Account
                </a>
              </div>
              <div className="sign-btn my-2">
                <button className="bg-green-500 w-full py-2 px-2 text-white rounded-lg">Sign In</button>
              </div>
              <div className="line flex items-center  justify-center mb-2">
                <div className="w-1/2 border-t-2 mr-1 border-black"></div>
                OR
                <div className="w-1/2 border-t-2 ml-1 border-black"></div>
              </div>

              <div className="login-other flex flex-col items-center justify-center gap-3">

                <button className="google-btn flex items-center justify-center border border-gray-300 w-full overflow-x-hidden p-2 rounded-md">
                  <GoogleIcon />
                  <span className="ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
                    Continue with Google
                  </span>
                </button>
                <button className="google-btn flex items-center justify-center border border-gray-300 w-full overflow-x-hidden p-2 rounded-md">
                  <FacebookOutlinedIcon />
                  <span className="ml-2 overflow-hidden whitespace-nowrap overflow-ellipsis">
                    Continue with Facebook
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Login;
