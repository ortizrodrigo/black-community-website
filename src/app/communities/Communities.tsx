import React from "react";
import image from "./image.svg";
import polygon12 from "./polygon-1-2.svg";
import polygon1 from "./polygon-1.svg";
import polygon22 from "./polygon-2-2.svg";
import polygon23 from "./polygon-2-3.svg";
import polygon2 from "./polygon-2.svg";

// function Communities() {
//   return (
//     <div>
//     communities
//     </div>
//   )
// }

export default function Communities() {
  return (
    <div className="bg-[#000024] overflow-hidden w-full min-w-[1440px] min-h-[3242px] flex flex-col">
      <div className="w-[1460px] h-[74px] bg-[#010133]" />

      <div className="-ml-2.5 w-[1450px] h-[852px] bg-[#d9d9d9]" />

      <div className="ml-[203px] w-[1057px] h-[535px] relative mt-[109px]">
        <div className="absolute top-0 left-0 w-[1053px] h-[535px]">
          <div className="absolute top-0 left-0 w-[1053px] h-[473px] bg-[#fdbd22]" />

          <div className="absolute top-[90px] left-0 w-[1053px] h-[445px] bg-[#9d7039]" />

          <img
            className="top-[33px] absolute left-[38px] w-[52px] h-[22px]"
            alt="Polygon"
            src={polygon1}
          />
        </div>

        <p className="absolute top-[130px] left-[49px] [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal]">
          Alpha Phi Alpha Fraternity, Incorporated , Alpha Epsilon Chapter
          <br />
          Alpha Kappa Alpha Sorority, Incorporated, Rho Chapter 
          <br />
          Kappa Alpha Psi Fraternity, Incorporated, Gamma Alpha Chapter
          <br />
          Delta Sigma Theta Sorority, Incorporated, Kappa Chapter
          <br />
          Omega Psi Phi Fraternity, Incorporated, Epsilon Mu Chapter
          <br />
          Phi Beta Sigma Fraternity, Incorporated, Omicron Psi Chapter
          <br />
          Sigma Gamma Rho Sorority, Incorporated, Beta Psi Chapter
          <br />
          Zeta Phi Beta Sorority, Incorporated, Gamma Beta Chapter
          <br />
          National Pan-Hellenic Council
        </p>

        <div className="absolute top-[21px] left-[132px] [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal]">
          Greek Life
        </div>
      </div>

      <div className="ml-[203px] w-[1057px] h-[405px] relative mt-14">
        <div className="absolute top-0 left-0 w-[1053px] h-[405px] bg-[#b68142]" />

        <div className="absolute top-[90px] left-0 w-[1053px] h-[315px] bg-[#9d7039]" />

        <img
          className="top-[33px] absolute left-[38px] w-[52px] h-[22px]"
          alt="Polygon"
          src={polygon12}
        />

        <p className="absolute top-[125px] left-[49px] [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-white text-3xl tracking-[0] leading-[normal]">
          Black Engineering and Science Student Association (BESSA)
          <br />
          Black Pre-Law Student Association (BPLA)
          <br />
          Haas Undergraduate Black Business Association
          <br />
          Black Students in Health Association
          <br />
          Black Student Athlete Coalition
          <br />
          Cal Black Alumni Association
        </p>

        <div className="absolute top-4 left-36 [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal]">
          Professional and Career
        </div>
      </div>

      <div className="ml-[203px] w-[1055px] h-[88px] relative mt-14">
        <div className="absolute top-0 left-0 w-[1053px] h-[88px] bg-[#b68142]" />

        <img
          className="top-9 absolute left-[38px] w-[52px] h-[22px]"
          alt="Polygon"
          src={polygon2}
        />

        <div className="absolute top-[17px] left-36 [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal]">
          Arts
        </div>
      </div>

      <div className="ml-[203px] w-[1055px] h-[88px] relative mt-[67px]">
        <div className="absolute top-0 left-0 w-[1053px] h-[88px] bg-[#b68142]" />

        <img
          className="top-9 absolute left-[38px] w-[52px] h-[22px]"
          alt="Polygon"
          src={image}
        />

        <div className="absolute top-[17px] left-36 [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal]">
          Faith
        </div>
      </div>

      <div className="ml-[203px] w-[1055px] h-[88px] relative mt-14">
        <div className="absolute top-0 left-0 w-[1053px] h-[88px] bg-[#b68142]" />

        <img
          className="top-9 absolute left-[38px] w-[52px] h-[22px]"
          alt="Polygon"
          src={polygon22}
        />

        <div className="absolute top-[17px] left-36 [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal]">
          LGBTQ+
        </div>
      </div>

      <div className="ml-[203px] w-[1055px] h-[88px] relative mt-[67px]">
        <div className="absolute top-0 left-0 w-[1053px] h-[88px] bg-[#b68142]" />

        <img
          className="top-9 absolute left-[38px] w-[52px] h-[22px]"
          alt="Polygon"
          src={polygon23}
        />

        <div className="absolute top-[17px] left-36 [font-family:'Playfair_Display-Regular',Helvetica] font-normal text-white text-[40px] tracking-[0] leading-[normal]">
          Cultural
        </div>
      </div>
    </div>
  );
};


