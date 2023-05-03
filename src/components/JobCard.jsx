import React from "react";

function JobCard() {
  return (
    <>
      <div className="flex justify-between bg-white rounded-xl p-3 shadow-lg space-x-5 cursor-pointer" onClick={()=>{alert('Hi Applied For Job')}}>
        <div className="flex justify-between  space-x-2  ">
          <img
            className="h-16"
            src="https://media.licdn.com/dms/image/C4D0BAQE-noNlZn-pqg/company-logo_100_100/0/1650559781911?e=1685577600&v=beta&t=Pphzxh2DQ4Lp1wYNU5V7J0o2B6zJaQ3_SexB01zYln4"
            alt=""
          />
          <div className="flex flex-col justify-start max-w-[250px]">
            <p className="text-start text-blue-600">React JS Developer</p>
            <p className="text-start text-sm">
              Redian Software Global Noida, Uttar Pradesh, India
            </p>
            <p className="text-start text-gray-600 text-sm">(Remote)</p>
          </div>
        </div>
        <div className="flex flex-col relative">
          <p className="uppercase bg-[#f6ac0f] text-white px-3 py-1 rounded-[3px] text-sm font-medium tracking-wider">Featured</p>
          <p className="text-gray-500 text-sm absolute self-end bottom-0">July 20, 2023</p>
        </div>
      </div>
    </>
  );
}

export default JobCard;
