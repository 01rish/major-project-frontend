import React, { useContext, useEffect,useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { AppState } from "../context";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const appData = useContext(AppState);
  let navigate = useNavigate();

  const [er, setEr] = useState()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    document.body.style.background = "url(/bg.jpg) blue no-repeat";
    document.body.style.backgroundSize = "cover";

    console.log(appData.login)
    if (localStorage.getItem("access") !== null) {
      appData.setLogin(true);
    } else {
      appData.setLogin(false);
    }
    if (appData.login == true) {
      return navigate("/dashboard");
    }

  });

  const onSubmit = async (data) => {
    const csrfToken = "{% csrf_token %}";

    console.log(data);
    localStorage.setItem("email",data.email)
    try {
      const res = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/login/",
        data,
        headers: { "X-CSRFToken": csrfToken }, // Here you pass the token
      });
      console.log(res.data);
      localStorage.setItem("access", res.data.token.access);
      localStorage.setItem("refresh", res.data.token.refresh);
    } catch (error) {
      setEr(error.response.data.errors.non_field_errors)
      console.log(error.response.data.errors.non_field_errors);
    }
  };

  return (
    <>
      <div className="grid grid-cols-3  gap-4 justify-center items-center h-[90vh]">
      
        <div className="col-span-2 flex flex-col justify-center space-y-16 p-20  h-[500px]">
          <p className="text-6xl font-bold text-start text-heading leading-tight">
            Sign in to <br /> Shape your career
          </p>
          <p className="text-start text-xl">
            If you dont have an account <br /> You can{" "}
            <span className="font-bold text-blue-600">
              <Link to="/register">register here!</Link>
            </span>
          </p>
        </div>
        {/* ---------------------------- */}
        
        <div className="glass-bg-2 h-[500px] justify-center space-y-10 p-10 flex flex-col">
          <form action="" onSubmit={handleSubmit(onSubmit)}>
          {er && (
              <>
                <p className="text-red-600 font-bold rounded-lg px-5 py-3 text-sm  border-2 border-red-400 bg-red-200 text-start">
                  {er}
                </p>
              </>
            )}
            <div className="space-y-5">
                {errors.email && (
                    <p className="text-red-600 text-start text-[15px] font-bold">
                      This field is required
                    </p>
                  )}
              <input
                type="email"
                {...register("email", { required: true })}
                style={{ borderRadius: "20px" }}
                name="email"
                placeholder="Email"
                className={`px-5 rounded-lg focus:outline-none bg-slate-100 w-[100%] py-4 focus:ring focus:ring-blue-300 shadow-sm mt-6`}
              />
              {errors.password && (
                <p className="text-red-600 text-start text-[15px] font-bold">
                  This field is required
                </p>
              )}
              <input
                type="password"
                {...register("password", { required: true })}
                style={{ borderRadius: "20px" }}
                name="password"
                placeholder="Password"
                className={`px-5 rounded-lg focus:outline-none bg-slate-100 w-[100%] py-4 focus:ring focus:ring-blue-300 shadow-sm mt-6`}
              />
              <p className="text-end text-gray-500">forgot password</p>
            </div>
            <div>
              <button
                type="submit"
                style={{ background: "#4461f2", borderRadius: "30px" }}
                className={`px-10  font-bold rounded-lg w-[100%] text-white shadow-xl py-4 mt-6`}
              >
                Sign In
              </button>
              {/* <Button
                title="Sign In"
                onClick={() => {
                  console.log("clicked");
                }}
                design="w-full text-white shadow-xl py-4 mt-3"
                styles={{ background: "#4461f2" }}
              /> */}
            </div>
          </form>
          <div className="relative flex pt-2 items-center">
            <div className="flex-grow border-t border-gray-400" />
            <span className="flex-shrink mx-4 text-gray-400 tracking-wide">
              Connect With Us
            </span>
            <div className="flex-grow border-t border-gray-400" />
          </div>

          <div
            className="flex items-center justify-center  space-x-6"
            style={{ marginTop: "15px" }}
          >
            <img
              src="data:image/png;base64,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"
              alt=""
              className="h-14 border-2 border-gray-300 px-5 rounded-lg py-3 shadow-xl"
            />
            <img
              className="h-14 border-2 shadow-xl border-gray-300 px-5 rounded-lg py-3"
              src="data:image/png;base64,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"
              alt=""
            />
            <img
              src="data:image/png;base64,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"
              className="h-14 border-2 border-gray-300 px-5 rounded-lg py-3 shadow-xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
