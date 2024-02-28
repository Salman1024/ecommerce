import React from "react";
import ContentWrapper from "../../component/contentWrapper/ContentWrapper";
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  return (
    <div className="py-24">
      <ContentWrapper>
        <div className="section flex items-center justify-center h-[80vh] ">
          <div className="box bg-white w-[500px] p-8  leading-normal shadow-lg max-sm:w-full">
            <div className="login-title flex items-center justify-center">
              <p className="text-2xl font-semibold">Login</p>
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
              <div className="input-field flex flex-col ">
                <label htmlFor="password" className="font-medium">
                  Password:{" "}
                </label>
                <input
                  type="password"
                  className="border border-slate-300 rounded outline-none py-1 px-1"
                />
                <a href="#" className="mt-2 text-blue-700">
                  {" "}
                  Forget Password?
                </a>
              </div>
              <div className="line flex items-center  justify-center mb-2">
                <div className="w-1/2 border-t-2 mr-1 border-black"></div>
                OR
                <div className="w-1/2 border-t-2 ml-1 border-black"></div>
              </div>
              <div className="login-other">
                <div className="google-login">
                  <button className="flex items-center gap-1 bg-yellow-400 w-full justify-center rounded-lg p-3">
                      <GoogleIcon/>
                      <div></div>
                      <span>Continue With Google</span>
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Login;
