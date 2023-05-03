import React, { useEffect, useContext, useState } from "react";
import { AppState } from "../context";

import { CircularProgressbar } from "react-circular-progressbar";
import Pie from "../components/Pie";
import ProgressCard from "../components/ProgressCard";
import SearchBar from "../components/SearchBar";
import Sidebar from "../components/Sidebar";
import Bar from "../components/Bar";
import LineChart from "../components/LineChart";
import Video from "../components/Video";
import BarChart from "../components/BarChart";
import ProfileIcon from "../components/ProfileIcon";

const Dashboard = () => {
  useEffect(() => {
    document.body.style.background = "";
    document.body.style.backgroundSize = "";
    document.getElementById("root").style.maxWidth = "100%";
    document.getElementById("root").style.margin = "0px";
    document.getElementById("root").style.padding = "0px";
  });
  const [toggle, setToggle] = useState(false);

  const appData = useContext(AppState);

  // console.log(appData.login)

  const active = appData.active;
  const setActive = appData.setActive;

  return (
    <>
      <div className="flex w-full bg-gray-900">
        <div>
          <Sidebar setLogin={appData.setLogin} active={active} setActive={setActive} />
        </div>

        {/* ------------------------------------------  */}
        <div className="p-10">
          <div className="flex justify-between mb-10 mt-3 relative">
            <h3 className="text-3xl font-bold text-white">Dashboard</h3>
            <div className="flex space-x-3">
              <SearchBar />
              <ProfileIcon />

              
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 justify-start max-w-4xl">
            <ProgressCard color="#692dff" />
            <ProgressCard color="rgb(255 186 0)" />
            <ProgressCard color="#ff7b50" />
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10">
            <Bar />
            <LineChart />
            {/* <Video /> */}
            <BarChart />
          </div>
        </div>

        {/* ------------------------------------------  */}

        {/* <div className="">
          <h2>Profile</h2>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
