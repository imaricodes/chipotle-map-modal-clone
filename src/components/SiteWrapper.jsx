import React from "react";
import { useLayoutEffect, useRef, useContext } from "react";
import MainModalContainer from "./MainModalContainer/MainModalContainer";
import { MainModalContext } from "../Contexts/MainModalContext";
import Burrito from "../assets/burrito.png";


import { Header } from "./ComponentsIndex.js";

const SiteWrapper = () => {
  const modalRef = useRef(null);
  const mainRef = useRef(null);

  const { locationModalActive, setLocationModalActive } =
    useContext(MainModalContext);

  const showModal = () => {
    setLocationModalActive(true);
  };

  useLayoutEffect(() => {
    if (locationModalActive) {
      if (mainRef.current.classList.contains("hidden")) {
        return;
      } else mainRef.current.classList.toggle("hidden");
    }

    if (!locationModalActive) {
      if (mainRef.current.classList.contains("hidden")) {
        mainRef.current.classList.toggle("hidden");
      } else return;
    }
  }, [locationModalActive]);
  return (
    <div>
      <main ref={mainRef}>
        <Header />
        <div className="w-full h-full   text-lg leading-10 font-tradeGothicBold flex flex-col items-center justify-center px-10">
          <div className="text-center bg-[#faf4e3] px-6 py-4 mt-[5%] rounded-md">
          <p>
            This is <strong>NOT</strong> Chipotle! <p>This is a demo clone of the Chipotle website to demonstrate the location finder behavior.</p>  To launch the map, click the Pickup/Deliver button above or the burrito below.
          </p>
          </div>
          <div>
            <img className="cursor-pointer" src={Burrito} onClick={showModal}/>
          </div>
          
        </div>
      </main>
      <div ref={modalRef} className="location-modal ">
        <MainModalContainer />
      </div>
    </div>
  );
};

export default SiteWrapper;
