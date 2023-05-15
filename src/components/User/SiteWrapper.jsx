import React from "react";
import { useEffect, useLayoutEffect, useRef, useContext } from "react";
import ModalContainer from "./ModalContainer/ModalContainer";
import { SearchAreaContext } from "./Contexts/SearchAreaContexts";
import bagSVG from "../../assets/bag.svg";
import PepperSmallBrown from "../../assets/pepper-small-brown.svg";
import ChipotleMedallionLogo from "../../assets/chipotle-medallion-logo.svg";
import UserOutline from "../../assets/user-outline.svg";
import MenuHamburger from "../../assets/menu-hamburger.svg";

const SiteWrapper = () => {
  const modalRef = useRef(null);
  const mainRef = useRef(null);

  const {
    locationModalActive,
    setLocationModalActive,
    setNearbyResults,
    setDeliveryLocation,
  } = useContext(SearchAreaContext);

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
      <main ref={mainRef} className="">
        {/* <header className="border-b-4 border-b-red-500 border-solid flex  w-full "> */}
        <header className="border-b-[1px] h-[99px] border-b-[#d4cbc7] border-solid inline-flex relative  items-center w-full ">
          <div className="left-container ml-4  items-center flex  lg-header:mr-10 flex-[1_2_100%]">

              <div className=" lg-header:hidden h-[16px] w-[24px] mr-3">
                <img src={MenuHamburger} alt="menu-hamburger" />
              </div>
      
            <div className=" h-[58px] w-[58px] lg:h-[81px] lg:w-[81px]">
              <img src={ChipotleMedallionLogo} />
            </div>

            <div className="sign-in-container flex items-center ml-5 flex-nowrap w-full  ">
              <img src={UserOutline} />
              <span className="text-xs lg:text-sm font-bold text-[#786259] uppercase ">
                Sign in
              </span>
            </div>
          </div>

          <nav className=" hidden lg-header:block">
            <ul className="flex font-tradeGothicBold font-bold text-[#451400] justify-around pr-[16px] text-xl uppercase">
              <li>Order</li>
              <li>Catering</li>
              <li>Rewards</li>
              <li>Our Values</li>
              <li>Nutrition</li>
            </ul>
          </nav>

          <div className="right-container flex items-center w-full lg-header:flex lg-header:w-[500px] lg-header:ml-20 lg-header:gap-8  lg-header:justify-end   bg-pink-100">
            {/* pickuu button */}
            <div className="border-[1px] h-[40px] w-[200px] rounded-full border-[#d4cbc7] border-solid  flex justify-center  ">
              <button className="flex  gap-3 items-center" onClick={showModal}>
                <img src={PepperSmallBrown} alt="pepper logo" />
                <span className="text-xl font-extralight text-[#451400]">
                  |
                </span>
                <p className="text-sm uppercase py-2 text-[#786259] ">
                  Pickup / Deliver
                </p>
              </button>
            </div>

            {/* cart bag */}
            <span className="inline-block ml-auto mr-3">
              <img src={bagSVG} alt="cart bag" />
            </span>
          </div>
        </header>
      </main>

      <div ref={modalRef} className="">
        <ModalContainer />
      </div>
    </div>
  );
};

export default SiteWrapper;
