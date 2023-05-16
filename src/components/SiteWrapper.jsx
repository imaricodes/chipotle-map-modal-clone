import React from "react";
import { useLayoutEffect, useRef, useContext } from "react";
import MainModalContainer from "./MainModalContainer/MainModalContainer";
import { MainModalContext } from "../Contexts/MainModalContext";
import bagSVG from "../assets/bag.svg";
import PepperSmallBrown from "../assets/pepper-small-brown.svg";
import ChipotleMedallionLogo from "../assets/chipotle-medallion-logo.svg";
import UserOutline from "../assets/user-outline.svg";
import MenuHamburger from "../assets/menu-hamburger.svg";
import { Header } from "./ComponentsIndex.js";

const SiteWrapper = () => {
  const modalRef = useRef(null);
  const mainRef = useRef(null);

  const { locationModalActive, setLocationModalActive } =
    useContext(MainModalContext);

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
        <Header />
      </main>
      <div ref={modalRef} className="location-modal ">
        <MainModalContainer />
      </div>
    </div>
  );
};

export default SiteWrapper;
