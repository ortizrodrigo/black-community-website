// function About() {
//   return (
//     <div>
//     about  
//     </div>
//   )
// }

import "./About.css";
import download11 from "./assets/download-1-1.png";
import download1 from "./download-1.png";
import download31 from "./download-3-1.png";
import download41 from "./download-4-1.png";
import download51 from "./download-5-1.png";
import download61 from "./download-6-1.png";
import images11 from "./images-1-1.png";
import owenKnapper1 from "./owen-knapper-1.png";

export default function About() {
  return (
    <div className="bg-[#010125] overflow-hidden w-full min-w-[1340px] min-h-[2600px] relative">
      <div className="absolute top-0 -left-5 w-[1460px] h-[74px] bg-[#010133]" />

      <div className="absolute top-[1015px] left-0 w-[1450px] h-[640px] bg-[#d2811f]" />

      <div className="absolute top-[74px] -left-2.5 w-[1450px] h-[852px] bg-[#d9d9d9]" />

      <div className="absolute top-[1140px] left-[772px] w-[285px] h-[380px] bg-[#d9d9d9]" />

      <div className="absolute top-[1731px] left-[146px] w-[285px] h-[380px] bg-[#d9d9d9]" />

      <div className="absolute top-[1731px] left-[527px] w-[285px] h-[380px] bg-[#d9d9d9]" />

      <div className="absolute top-[2220px] left-[527px] w-[285px] h-[380px] bg-[#d9d9d9]" />

      <div className="absolute top-[2220px] left-[912px] w-[285px] h-[380px] bg-[#d9d9d9]" />

      <div className="absolute top-[2220px] left-[142px] w-[285px] h-[380px] bg-[#d9d9d9]" />

      <img
        className="absolute top-[2335px] left-[915px] w-[273px] h-[185px] aspect-[1.48] object-cover"
        alt="Download"
        src={download11}
      />

      <img
        className="absolute top-[2297px] left-[557px] w-[223px] h-[226px] aspect-[0.99] object-cover"
        alt="Download"
        src={download61}
      />

      <div className="absolute top-[1731px] left-[908px] w-[285px] h-[380px] bg-[#d9d9d9]" />

      <img
        className="absolute top-[1140px] left-[713px] w-[389px] h-[389px] aspect-[1] object-cover"
        alt="Download"
        src={download1}
      />

      <img
        className="absolute top-[1813px] left-[560px] w-[220px] h-[220px] aspect-[1] object-cover"
        alt="Download"
        src={download41}
      />

      <img
        className="absolute top-[1835px] left-[905px] w-72 h-[175px] aspect-[1.65] object-cover"
        alt="Download"
        src={download31}
      />

      <img
        className="absolute top-[2335px] left-[179px] w-[220px] h-[169px] aspect-[1.3] object-cover"
        alt="Download"
        src={download51}
      />

      <img
        className="absolute top-[74px] left-0 w-[1340px] h-[852px] aspect-[2.01] object-cover"
        alt="Images"
        src={images11}
      />

      <img
        className="absolute top-[1801px] left-[170px] w-[232px] h-[232px] aspect-[1] object-cover"
        alt="Owen knapper"
        src={owenKnapper1}
      />
    </div>
  );
};