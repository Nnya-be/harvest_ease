import React from "react";
import MissionText from "./MissionText";

const img_link = 'https://media.istockphoto.com/id/1397417789/photo/businessman-looking-out-of-window.webp?b=1&s=170667a&w=0&k=20&c=5Cj2bMhjzSe24tpzjdXMDCqHJJGClq2VtZrIq0651ko='

const img_link_2 = 'https://images.unsplash.com/photo-1495539406979-bf61750d38ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhcm1lcnxlbnwwfHwwfHx8MA%3D%3D'
function Mission() {
  return (
    <div className="lg:h-[58rem] bg-gray-200">
      <div className="md:px-12 h-5/6 grid  lg:grid-cols-2 grid-cols-1 grid-rows-2  mt-5 lg:grid-rows-1 justify-between px-5 gap-40 lg:gap-2 lg:px-2 items-center pb-20 pt-20 pt-40">
      <div className="lg:h-4/6 w-5/6 lg:w-5/6  relative w-1/2 flex md:w-1/2">
        <img src={img_link} className=" lg:w-full block h-full rounded-3xl"></img>
        <div className="w-full bg-gradient-to-tr from-lime-500/50 to-green-700/80 absolute top-0 left-0 h-full rounded-3xl"></div>
        <img src={img_link_2} className="absolute rounded-3xl h-full w-full top-20 left-20"></img>
      </div>
      <MissionText></MissionText>
    </div>
    </div>
    );
}

export default Mission;
