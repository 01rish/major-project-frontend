import React from "react";
import { CircularProgressbarWithChildren,buildStyles  } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ProgressCard({color}) {

  const value = 0.66;
  return (
    <div className="flex justify-between space-x-5 bg-white p-5 shadow-lg items-center rounded-xl max-w-[280px]">
      <div className="space-y-3 text-start">
        <p className="text-lg text-gray-400">Total Applications</p>
        <p className="text-xl font-bold text-black">567</p>
        <p style={{color:`${color}`}} className={` text-sm font-bold`}>+14% Inc</p>
      </div>
      <div>
        <div style={{ width: 70 }}>
          <CircularProgressbarWithChildren value={66}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,
        
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: 'butt',
        
            // Text size
            textSize: '16px',
        
            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            pathColor: `${color}`,
            textColor: 'white',
            trailColor: `red`,
            backgroundColor: 'bg-violety',
          })}
          >
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
           
            <div style={{ fontSize: 12, marginTop: -5 }}>
              <strong>+66%</strong> 
            </div>
          </CircularProgressbarWithChildren>

        </div>
      </div>
    </div>
  );
}

export default ProgressCard;
