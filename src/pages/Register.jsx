import React, { useEffect, useState, useContext } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AppState } from "../context";

const Register = () => {
  const appData = useContext(AppState);
  let navigate = useNavigate();
  useEffect(() => {
    console.log(appData.login);
    document.body.style.background = "url(/bg.jpg) blue no-repeat";
    document.body.style.backgroundSize = "cover";
    if (localStorage.getItem("access") !== null) {
      appData.setLogin(true);
    } else {
      appData.setLogin(false);
    }
    if (appData.login == true) {
      return navigate("/dashboard");
    }

    // console.log(appData.login)
    // if (appData.login === true) {
    // }
  });

  const [emr, setEmr] = useState();
  const [nm, setNm] = useState();
  const [pas, setPas] = useState();
  const [pas2, setPas2] = useState();
  const [tc, setTc] = useState();
  const [cpp, setCpp] = useState();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const csrfToken = "{% csrf_token %}";
    console.log(data);
    console.log(data.password2);

    {
      data.password != data.password2
        ? setCpp("Password and Confirm Password Doesn't Matches")
        : setCpp();
    }

    try {
      const res = await axios({
        method: "post",
        url: "http://127.0.0.1:8000/api/register/",
        data,
        headers: { "X-CSRFToken": csrfToken }, // Here you pass the token
      });
      console.log(res.data);
      localStorage.setItem("access", res.data.token.access);
      localStorage.setItem("refresh", res.data.token.refresh);
    } catch (error) {
      const e = error.response.data.errors.email;
      const n = error.response.data.errors.name;
      const p = error.response.data.errors.password;
      const p2 = error.response.data.errors.password2;
      const t = error.response.data.errors.tc;

      setEmr(e);
      setNm(n);
      setPas(p);
      setPas2(p2);
      setTc(t);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-4 h-[90vh] items-center">
        <div className="space-y-7 justify-center glass-bg-2 py-10 max-w-3xl mx-auto">
          {emr && (
            <>
              <p className="text-red-600 font-bold rounded-lg px-5 py-3  border-2 border-red-400 bg-red-200 text-start">
                {emr}
              </p>
            </>
          )}

          {cpp && (
            <>
              <p className="text-red-600 font-bold rounded-lg px-5 py-3  border-2 border-red-400 bg-red-200 text-start">
                {cpp}
              </p>
            </>
          )}

          <div className="space-y-4 px-10">
            <div className="flex space-x-4 items-center">
              {" "}
              <p className="text-start text-xl font-bold text-gray-400">
                START FOR FREE
              </p>
            </div>
            <div>
              <p className="text-5xl  max-xl:text-6xl font-bold text-start text-heading leading-tight">
                Create new account{" "}
              </p>
            </div>
            <p className="text-start text-lg text-gray-400">
              Already A Member?{" "}
              <span className="text-theme-blue">
                <Link to="/login">Log In</Link>
              </span>
            </p>
          </div>
          <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6 flex flex-col justify-center items-center">
              {errors.name && (
                <p className="text-red-600 text-start text-[15px] font-bold">
                  This field is required
                </p>
              )}
              <input
                type="text"
                {...register("name", { required: true })}
                style={{ borderRadius: "20px" }}
                name="name"
                placeholder="Name"
                className={`px-5 rounded-lg focus:outline-none bg-slate-100 w-[80%] py-4 focus:ring focus:ring-blue-300 shadow-sm mt-6`}
              />

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
                className={`px-5 rounded-lg focus:outline-none bg-slate-100 w-[80%] py-4 focus:ring focus:ring-blue-300 shadow-sm mt-6`}
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
                className={`px-5 rounded-lg focus:outline-none bg-slate-100 w-[80%] py-4 focus:ring focus:ring-blue-300 shadow-sm mt-6`}
              />

              {errors.password && (
                <p className="text-red-600 text-start text-[15px] font-bold">
                  This field is required
                </p>
              )}
              <input
                type="password"
                {...register("password2", { required: true })}
                style={{ borderRadius: "20px" }}
                name="password2"
                placeholder="Confirm Password"
                className={`px-5 rounded-lg focus:outline-none bg-slate-100 w-[80%] py-4 focus:ring focus:ring-blue-300 shadow-sm mt-6`}
              />

              <div className="flex justify-start items-start mb-4">
                {errors.password && (
                  <p className="text-red-600 text-start text-[15px] font-bold">
                    This field is required
                  </p>
                )}
                <input
                  {...register("tc", { required: true })}
                  name="tc"
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-checkbox"
                  className="ml-2 text-sm font-medium  text-gray-500 dark:text-gray-300"
                >
                  I Agree To The Terms And Conditions
                </label>
              </div>
            </div>
            <div className="flex  justify-center">
              <button
                type="submit"
                style={{ background: "#4461f2", borderRadius: "30px" }}
                className={`px-10  font-bold rounded-lg w-[80%] text-white shadow-xl py-4 mt-6`}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>

        {/* ---------------------------  */}

        {/* <div></div> */}
      </div>
    </>
  );
};

export default Register;
