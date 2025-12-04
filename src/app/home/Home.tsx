import React from "react";
import "./Home.css";
import l0a06401 from "./6l0a0640-1.png";
import DSZ21491 from "./DSZ-2149-1.png";
import IMG69941 from "./IMG-6994-1.png";
import image4 from "./image-4.png";
import TOPIMAGE from "./rectangle-10.svg";

// function Home() {
//     return (
//       <div>
//       home 
//       </div>
//     )
//   }
  
export default function Home() {
  return (
    <div className="bg-[#202033] overflow-hidden w-full min-w-[1440px] min-h-[3646px] relative">
      <div className="top-[74px] w-[1440px] h-[852px] bg-[#d9d9d9] absolute left-0" />

      <img
        className="top-[2271px] w-[1440px] h-[609px] absolute left-0"
        alt="Rectangle"
        src={TOPIMAGE}
      />

      <div className="top-0 w-[1460px] h-[74px] bg-[#020221] absolute left-0" />

      <p className="absolute top-[2400px] left-[134px] w-[1177px] [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal]">
        Title Placeholder (Mission Statement) <br />
        <br />
        Text Placeholder
      </p>

      <img
        className="absolute top-[1040px] left-20 w-[603px] h-[412px] aspect-[1.47] object-cover"
        alt="Img"
        src={IMG69941}
      />

      <img
        className="absolute top-[1479px] left-20 w-[469px] h-[313px] aspect-[1.5] object-cover"
        alt="Element"
        src={l0a06401}
      />

      <img
        className="absolute top-[1479px] left-[580px] w-[429px] h-[313px] aspect-[1.37] object-cover"
        alt="Dsz"
        src={DSZ21491}
      />

      <img
        className="absolute top-[1819px] left-[569px] w-[451px] h-[301px] aspect-[1.5] object-cover"
        alt="Image"
        src={image4}
      />
    </div>
  );
};