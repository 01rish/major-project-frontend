import React, { useEffect, useContext } from "react";
import JobCard from "../components/JobCard";
import Sidebar from "../components/Sidebar";
import { AppState } from "../context";

function Profile() {
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
        <div className="p-10 grow  ">
          <div className="w-full h-[90vh] overflow-y-scroll lg:w-full bg-gray-700 rounded-xl pb-5">
            <div className="max-w-7xl mx-auto">
              <div
                className="h-[350px] rounded-b-lg shadow-lg border-2 border-white"
                style={{
                  background:
                    "url(https://marketplace.canva.com/EAE3FHHSxIM/1/0/1600w/canva-white-minimalist-profile-linkedin-banner-om3WfNn3sfY.jpg)",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="max-w-6xl space-x-3 mx-auto flex justify-start items-center -mt-8">
              <img
                style={{
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
                className="h-[200px] shadow-lg w-[200px]  border-[4px] border-white rounded-full"
                src="https://media.licdn.com/dms/image/D4D03AQGXhN7UH5mO2A/profile-displayphoto-shrink_200_200/0/1681206889136?e=1688601600&v=beta&t=z2wnHz_Vc24DkdjMXcXirdwdA-WTYv07gPZq57piHzU"
                alt=""
              />
              <div className="flex flex-col  space-y-2 lg:mt-5">
                <p className="text-start text-4xl font-bold text-white">Biswarup Das</p>
                <p className="text-start text-lg text-gray-200">
                  biswarupdaslyf@gmail.com
                </p>
                <p className="text-start text-sm text-white">
                  Sonapur, Baruah-Bari, Kamrup(M), Assam.
                </p>
                <p className="text-start text-lg font-bold flex justify-between space-x-5 text-blue-500">
                  <span>Software Developer at Libkart Technologies.</span>
                  <span><svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg></span>
                </p>
              </div>
            </div>
            <div className="max-w-6xl bg-gray-100 border-[1px] border-gray-300 p-5 rounded-lg space-x-3 mx-auto flex flex-col justify-start  mt-10 shadow-lg">
              <div className="mt-4 flex  justify-between items-center space-y-5 p-5">
                <p className="text-2xl  text-black font-bold">Skills</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex space-x-5">
                <p className="px-5 py-2 rounded-full border-blue-500 border-2 hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer">
                  React.js
                </p>
                <p className="px-5 py-2 rounded-full border-blue-500 border-2 hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer">
                  Django
                </p>
                <p className="px-5 py-2 rounded-full border-blue-500 border-2 hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer">
                  Python
                </p>
                <p className="px-5 py-2 rounded-full border-blue-500 border-2 hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer">
                  MySQL
                </p>
                <p className="px-5 py-2 rounded-full border-blue-500 border-2 hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer">
                  Dev Ops
                </p>
              </div>
            </div>

           

            <div className="max-w-6xl bg-gray-100 border-[1px] border-gray-300 p-5 rounded-lg space-x-3 mx-auto flex flex-col justify-start  mt-10 shadow-lg">
              <div className="flex justify-between items-center p-5">
                <p className="text-2xl  text-black font-bold">About</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                  />
                </svg>
              </div>
              <p className="text-start text-gray-500 text-sm">
                <h2>
                  I am a software developer, specializing in the Web development
                  arena. For the last 3 years, I have been developing software's
                  and web applications using Python, Django,React and many more.
                  <br />
                  <br />
                  I’m currently employed as software developer at Libkart
                  Technologies. I’m hands on in all stages of the software
                  development cycle, from planning and design to testing and
                  deployment. No two days are the same for me, my tasks may
                  involve analyzing algorithms, altering code, fixing bugs,
                  brainstorming ideas or integrating new systems.
                  <br />
                  <br />
                  Something that I love about software development is the
                  opportunity to work with people from a wide range of
                  disciplines. The software development lifecycle involves
                  working with so many different people and departments and, as
                  a people person and someone who loves to build new
                  relationships, it’s great to be able to come together with
                  other professionals who are striving towards the same goal and
                  same vision.
                  <br />
                  <br />
                  If you want to talk about software development, coding or
                  anything else, drop me a line. I am available.
                  <br />
                  <br />
                  Skills: C++, C, Java, JavaScript, software development, data
                  structures, coding, SQL, Visual Studio Code, Python, Django,
                  React.Js, Next.Js.
                </h2>
              </p>
            </div>

            <div className="max-w-6xl bg-gray-100 border-[1px] border-gray-300 p-5 rounded-lg space-x-3 mx-auto flex flex-col justify-start  mt-10 shadow-lg">
              <div className="mt-4 flex  justify-between items-center space-y-5 p-5">
                <p className="text-2xl  text-black font-bold">Languages</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-600 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex space-x-5">
                <p className="px-5 py-2 rounded-full border-blue-500 border-2 hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer">
                  English
                </p>
                <p className="px-5 py-2 rounded-full border-blue-500 border-2 hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer">
                  Hindi
                </p>
                <p className="px-5 py-2 rounded-full border-blue-500 border-2 hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer">
                  Bengali
                </p>
                <p className="px-5 py-2 rounded-full border-blue-500 border-2 hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer">
                  Assamese
                </p>
                <p className="px-5 py-2 rounded-full border-blue-500 border-2 hover:bg-blue-600 hover:shadow-lg hover:text-white cursor-pointer">
                  Punjabi
                </p>
              </div>
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

export default Profile;
