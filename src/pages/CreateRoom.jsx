import React, { useEffect, useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import { AppState } from "../context";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import axios from "axios";


function CreateRoom() {
  const { roomId } = useParams();
  const navigate = useNavigate()
  console.log(roomId);



  const meeting = async (element) => {
    const serverSecret = "40cb03afd419473cd1c727489f2fc1e7";
    const appId = 1197690876;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Your Name"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
      // onLeaveRoom: () => {
      //   if ("caches" in window) {
      //     caches.keys().then((names) => {
      //       // Delete all the cache files
      //       names.forEach((name) => {
      //         caches.delete(name);
      //       });
      //     });

      //     // Makes sure the page reloads. Changes are only visible after you refresh.
      //     // window.location.href = '/dashboard'
      //   }
      // },
      
    });

    
  };

  const [pageLoad, setPageLoad] = useState(false)
  // const [name, setName] = useState("")
  // const [createRoomState, setCreateRoomState] = useState(false)

  if (pageLoad === true) {
    let create = document.getElementsByClassName('VsTVUAD89KWleD0YRVsD')[0]
    create.addEventListener('click',()=>{
      // setCreateRoomState(true)
      let name = document.getElementsByClassName('TYiiRFB3EhYJGVPE4k4q')[0].value
      let data = axios.post('http://127.0.0.1:8000/api/create-room/',{
        
          "user":name,
          "room_id":roomId
        
      }).then((response)=>{
        console.log(response)
      })
    })

    


    
  }

  // if (createRoomState === true ) {
  //   let destroy = document.getElementsByClassName('QeMJj1LEulq1ApqLHxuM')[0]
  //   destroy.addEventListener('click',()=>{alert('Destroyed')})
  // }

  useEffect(() => {
    document.body.style.background = "";
    document.body.style.backgroundSize = "";
    document.getElementById("root").style.maxWidth = "100%";
    document.getElementById("root").style.margin = "0px";
    document.getElementById("root").style.padding = "0px";
  });

  useEffect(() => {
    const onPageLoad = () =>{
      setPageLoad(true)
    }
    if (document.readyState === 'complete'){
      onPageLoad()
    }
    else {
      window.addEventListener('load',onPageLoad)
      return () => window.removeEventListener('load', onPageLoad)
    }
  }, [])
  

  const appData = useContext(AppState);

  const active = appData.active;
  const setActive = appData.setActive;
  return (
    <>
      <div className="flex w-full bg-gray-200">
        <div>
          <Sidebar active={active} setActive={setActive} />
        </div>

        {/* ------------------------------------------  */}
        <div className="p-10 flex-grow bg-gray-900 flex justify-center items-center h-[100vh]">
          {/* <div className="glass-bg-2 p-10 space-y-7">
            <h3 className="text-5xl font-bold text-blue-600">
              Start Your Mock Interview
            </h3>
            <div className="space-x-5">
              <button className="bg-blue-600 px-10 py-3 rounded-full shadow-xl text-white hover:bg-blue-700">
                Create Room
              </button>
              <button className="bg-blue-600 px-10 py-3 rounded-full shadow-xl text-white hover:bg-blue-700">
                Join Room
              </button>
            </div>
          </div> */}
          <div
            ref={meeting}
            className="z-50 h-[80vh] w-[80vw]"
            // style={{ width: "80vw !important", height: "80vh !important"}}
          ></div>
        </div>

        {/* ------------------------------------------  */}

        {/* <div className="">
          <h2>Profile</h2>
        </div> */}
      </div>
    </>
  );
}

export default CreateRoom;
