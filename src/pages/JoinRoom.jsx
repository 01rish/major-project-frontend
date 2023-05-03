import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { AppState } from "../context";
import axios from "axios";
import Loader from "../components/Loader";

function JoinRoom() {
  const appData = useContext(AppState);
  const [roomCode, setRoomCode] = useState("");
  const [fetching, setFetching] = useState(true)
  const navigate = useNavigate();
  const active = appData.active;
  const setActive = appData.setActive;
  useEffect(() => {
    setRoomCode(Math.floor(Math.random() * 100000));
  }, [])
  const [room, setRoom] = useState()
  

  useEffect(() => {
    document.body.style.background = "";
    document.body.style.backgroundSize = "";
    document.getElementById("root").style.maxWidth = "100%";
    document.getElementById("root").style.margin = "0px";
    document.getElementById("root").style.padding = "0px";
    

    async function fetchRoom(){
      const data = await axios.get(`http://127.0.0.1:8000/api/create-room/`);
      setTimeout(() => {
        setFetching(false)
      }, 3000);
      setRoom(data.data)
    }
    fetchRoom()

  });

  // function createRoom() {
  //   navigate(`/create-room/${roomCode}`);
  // }

  return (
    <>
      <div className="flex w-full bg-gray-900 max-h-[100vh]">
        <div>
          <Sidebar active={active} setActive={setActive} />
        </div>

        {/* ------------------------------------------  */}
        <div className="p-10 flex-grow  bg-gray-900">
          
          {fetching ?  
          <div className="flex justify-center items-center h-[100%]">
            <Loader />
          </div>
          : <>
          {room ? <h3 className="text-start text-3xl text-yellowy ">Available Rooms</h3> :  <h3 className="text-start text-3xl text-yellowy ">No Rooms Available At This Moment!!</h3> }
          
              <div className=" grid grid-cols-4 gap-4 items-center justify-center mt-5 max-h-[90%] Listing overflow-y-scroll">
              {
                room?.map((e)=>{
                  return(
                    // <div>
                        <div className=" h-[203px] pt-2 bg-gray-800 shadow-lg flex flex-col items-center justify-center w-[303px] rounded-lg ">
                          <div style={{cursor:'pointer',background:'linear-gradient(0deg, rgba(62, 61, 62, 0.3), rgba(35, 35, 35, 0.3)),url(https://media.istockphoto.com/id/1146472948/photo/millennial-black-businesswoman-addressing-colleagues-at-a-corporate-business-meeting-close-up.jpg?s=612x612&w=0&k=20&c=pRFt-m6Af60XAp2saRz4LtFjB6qBfRFki3Tf3c-4xtw=)',backgroundPosition:'center center',backgroundSize:'cover'}} key={e.id} className="h-[200px] w-[300px] p-5 rounded-tl-lg rounded-tr-lg">                         
                          </div>
                          <div className="bg-gray-800 w-[100%] py-2 flex items-center justify-between px-3 rounded-bl-lg rounded-br-lg">
                            <div className="flex flex-col justify-start items-start">
                              <p className="flex space-x-3 items-center"><span>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 rounded-full text-violety bg-yellowy p-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>

                                </span> <span className="text-violety">{e.user}</span></p>
                              {/* <p>Room Id : {e.room_id}</p> */}
                            </div>
                            <button onClick={()=>{navigate(`/create-room/${e.room_id}/`)}} className="px-8 py-2 rounded-lg bg-violety text-white hover:bg-violet-900">Join</button>
                          </div>
                        </div>
                    // </div>

              
                  )
                })

              
              }


              </div>
          </>}


        </div>

        {/* ------------------------------------------  */}

        {/* <div className="">
          <h2>Profile</h2>
        </div> */}
      </div>
    </>
  );
}

export default JoinRoom;
