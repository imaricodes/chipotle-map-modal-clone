import React from "react";
import { useLayoutEffect, useRef, useContext } from "react";
import MainModalContainer from "./MainModalContainer/MainModalContainer";
import { MainModalContext } from "../Contexts/MainModalContext";
import bagSVG from "../assets/bag.svg";
import PepperSmallBrown from "../assets/pepper-small-brown.svg";
import ChipotleMedallionLogo from "../assets/chipotle-medallion-logo.svg";
import UserOutline from "../assets/user-outline.svg";
import MenuHamburger from "../assets/menu-hamburger.svg";

const SiteWrapper = () => {
  const modalRef = useRef(null);
  const mainRef = useRef(null);

  const {
    locationModalActive,
    setLocationModalActive,
    setNearbyResults,
    setDeliveryLocation,
  } = useContext(MainModalContext);

  const showModal = () => {
    setLocationModalActive(true);
    
    // modalRef.current.classList.toggle("hidden");
    // mainRef.current.classList.toggle("hidden");
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
        <header className="border-b-[1px] h-[99px] border-b-[#d4cbc7] border-solid flex relative  items-center w-full">
          <div className="left-container header__left-container--mobile ml-4 min-w-fit items-center flex mr-3 lg-header:flex-1">
            <div className="block lg-header:hidden">
              <img className="h-[16px] w-[24px] mr-3 " src={MenuHamburger} />
            </div>
            <div className="h-[58px] w-[58px] lg:h-[81px] lg:w-[81px]">
              <img
                className="h-[58px] w-[58px] lg:h-[81px] lg:w-[81px]"
                src={ChipotleMedallionLogo}
              />
            </div>
            <div className="sm:flex items-center hidden">
              <img
                className="h-[48px] w-[48px] lg:h-[48px] lg:w-[48px] ml-9"
                src={UserOutline}
              />
              <div className="whitespace-nowrap text-base text-[#786259] font-bold uppercase">
                Sign In
              </div>
            </div>
          </div>
          <div className="nav">
            <nav className=" hidden lg-header:flex w-full px-4 ">
              <ul className="flex font-tradeGothicBold font-bold text-[#451400] justify-around pr-[16px] text-xl uppercase">
                <li>Order</li>
                <li>Catering</li>
                <li>Rewards</li>
                <li>Our Values</li>
                <li>Nutrition</li>
              </ul>
            </nav>
          </div>
          <div className="pickup-button-container-mobile   lg-header:hidden">
            <div className="  border-[1px] h-[40px] w-[200px] m-auto rounded-full border-[#d4cbc7] border-solid  flex justify-center">
              <button className="flex  gap-3 items-center" onClick={showModal}>
                <img src={PepperSmallBrown} alt="pepper logo" />
                <span className="text-xl font-extralight text-[#451400]">
                  |
                </span>
                <p className="text-sm uppercase py-2 text-[#786259]">
                  Pickup / Deliver
                </p>
              </button>
            </div>
          </div>

          <div className="right-container flex w-full lg-header:w-auto ml-0 lg-header:ml-10 pr-6 gap-7x justify-end">
            <div className="pickup-button-container hidden lg-header:flex">
              <div className=" border-[1px] h-[40px] w-[200px] rounded-full border-[#d4cbc7] border-solid  justify-center">
                <button
                  className="flex  gap-3 items-center"
                  onClick={showModal}
                >
                  <img src={PepperSmallBrown} alt="pepper logo" />
                  <span className="text-xl font-extralight text-[#451400]">
                    |
                  </span>
                  <p className="text-sm uppercase py-2 text-[#786259] ">
                    Pickup / Deliver
                  </p>
                </button>
              </div>
            </div>

            <img src={bagSVG} alt="cart bag" />
          </div>
        </header>
      </main>

      <div ref={modalRef} className="location-modal ">
        <MainModalContainer />
      </div>
    </div>
  );
};

export default SiteWrapper;
