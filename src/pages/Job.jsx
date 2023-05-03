import React, { useEffect, useContext } from "react";
import JobCard from "../components/JobCard";
import Sidebar from "../components/Sidebar";
import { AppState } from "../context";

function Job() {
  useEffect(() => {
    document.body.style.background = "";
    document.body.style.backgroundSize = "";
    document.getElementById("root").style.maxWidth = "100%";
    document.getElementById("root").style.margin = "0px";
    document.getElementById("root").style.padding = "0px";
  });

  const appData = useContext(AppState);

  const active = appData.active;
  const setActive = appData.setActive;
  return (
    <>
      <div className="flex w-full bg-gray-900">
        <div>
          <Sidebar active={active} setActive={setActive} />
        </div>

        {/* ------------------------------------------  */}
        <div className="p-10 flex grow max-w-7xl justify-between">
          <div className="container  rounded-l-lg mx-auto bg-gray-800 px-10 py-5">
            <h3 className="text-white text-xl bg-violety py-2 rounded-full  mb-5 font-bold">
              Recently Listed Jobs For You
            </h3>
            <div className="Job Listing Section max-h-[700px] space-y-3 overflow-y-scroll">
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          </div>
          <div className="container py-5 px-10 rounded-r-lg  bg-gray-700">
            <div className="space-y-5 max-w-[400px] text-white">
              <p className="text-2xl text-start font-bold">
                Senior HTML Developer
              </p>
              <p className="text-start mb-10 max-w-[400px]">
                razrtech Mumbai, Maharashtra, India (Remote).{" "}
                <span>67 applicants</span>
              </p>
              <p className="flex space-x-3 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellowy"
                  // style={{ color: "t" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                  />
                </svg>
                <span className="text-start">Full-time . Entry Level</span>
              </p>
              <p className="flex space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellowy"
                  // style={{ color: "gray" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                  />
                </svg>

                <span className="text-start">
                  51-200 employees · IT Services and IT Consulting
                </span>
              </p>
              <p className="flex  space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-yellowy"
                  // style={{ color: "gray" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                  />
                </svg>

                <span className="text-start">
                  Skills: JavaScript, Responsive Web Design, +8 more
                </span>
              </p>
              <div className="flex justify-start mt-5">
                <button className="bg-violety hover:bg-violet-900 w-full flex items-center justify-center space-x-3 text-white px-5 py-2 rounded-full">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"
                      />
                    </svg>
                  </span>{" "}
                  Apply
                </button>
              </div>
            </div>
          </div>
          <div className="w-full pl-5">
            <div className="min-w-[300px]  py-5 space-y-3">
              <p className="text-2xl text-start text-white font-bold">Search Jobs</p>
              <input
                type="text"
                placeholder="Search For Jobs"
                className="px-10 py-3 w-full bg-white rounded-xl shadow-xl"
              />
            </div>
            <div className="Listing space-y-5 max-h-[500px] overflow-y-scroll">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />

            </div>
          </div>
        </div>

        {/* ------------------------------------------  */}

        {/* <div className="">
          <h2>Profile</h2>
        </div> */}
      </div>
    </>
  );
}

export default Job;
