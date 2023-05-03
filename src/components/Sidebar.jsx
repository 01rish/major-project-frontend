import React,{useContext, useEffect} from "react";
import { AppState } from "../Context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Sidebar({active, setActive, setLogin}) {
  const appData = useContext(AppState)
  const navigate = useNavigate();

  // console.log(appData.login)

  function handleLogOut(){
    setLogin(false)
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    localStorage.removeItem("email");

  }
  
  

  return (
    <>
      <div className="bg-gray-700 shadow-lg px-10 py-5 h-screen">
        <div className="flex justify-center items-center mt-5">
          <img src="/banner-logo.png" className="h-12 rounded-full" alt="" />
        </div>

        <div className="space-y-10 mt-10 text-start">
          <p className={`text-xl ${active == 'dashboard'?'text-violety border-r-[3px] pr-8 border-violet-600 font-bold':'text-gray-400'} flex items-center cursor-pointer`}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </span>{" "}
            <span className="ml-5" onClick={()=>{setActive('dashboard');navigate("/dashboard")}}>Dashboard</span>
          </p>
          <p className={`text-xl ${active == 'mockinterview'?'text-violety border-r-[3px] pr-8 border-violet-600 font-bold':'text-gray-400'} flex items-center cursor-pointer`}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
                />
              </svg>
            </span>{" "}
            <Link to="/mock-interview"><span className="ml-5" onClick={()=>{setActive('mockinterview');navigate("/mock-interview")}}>Mock Interview</span></Link>
          </p>
          <p className={`text-xl ${active == 'job'?'text-violety border-r-[3px] pr-8 border-violet-600 font-bold':'text-gray-400'} flex items-center cursor-pointer`}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                />
              </svg>
            </span>{" "}
            <Link to="/job"><span className="ml-5" onClick={()=>{setActive('job');navigate("/job")}}>Job</span></Link>
          </p>

          <p  className={`text-xl ${active == 'profile'?'text-violety border-r-[3px] pr-8 border-violet-600 font-bold':'text-gray-400'} flex items-center cursor-pointer`}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </span>{" "}
            <span className="ml-5" onClick={()=>{setActive('profile');navigate("/profile")}}>Profile</span>
          </p>
          <p className="text-xl text-gray-400 flex items-center cursor-pointer">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg>
            </span>{" "}
            <span onClick={handleLogOut} className="ml-5">Logout</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
