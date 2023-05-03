import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { AppState } from "../context";

function MockInterview() {
  const appData = useContext(AppState);
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();
  const active = appData.active;
  const setActive = appData.setActive;
  useEffect(() => {
    setRoomCode(Math.floor(Math.random() * 100000));
  }, [])
  


  useEffect(() => {
    document.body.style.background = "";
    document.body.style.backgroundSize = "";
    document.getElementById("root").style.maxWidth = "100%";
    document.getElementById("root").style.margin = "0px";
    document.getElementById("root").style.padding = "0px";
    

  });

  function createRoom() {
    navigate(`/create-room/${roomCode}`);
  }

  function joinRoom() {
    navigate(`/join-room`);
  }

  // console.log(document.getElementsByClassName('TYiiRFB3EhYJGVPE4k4q').value)

  return (
    <>
      <div className="flex w-full bg-gray-200">
        <div>
          <Sidebar active={active} setActive={setActive} />
        </div>

        {/* ------------------------------------------  */}
        <div className="p-10 flex-grow bg-gray-500 mock-interview-bg flex items-center justify-center ">
          <div className="glass-bg-2 p-10 space-y-7">
            <h3 className="text-5xl font-bold text-blue-600">
              Start Your Mock Interview
            </h3>
            <div className="space-x-5">
              <button
                onClick={createRoom}
                className="bg-blue-600 px-10 py-3 rounded-full shadow-xl text-white hover:bg-blue-700"
              >
                Create Room
              </button>
              <button
              onClick={joinRoom}
              className="bg-blue-600 px-10 py-3 rounded-full shadow-xl text-white hover:bg-blue-700">
                Join Room
              </button>
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

export default MockInterview;
