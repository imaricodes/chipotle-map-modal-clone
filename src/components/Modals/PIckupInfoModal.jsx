import React, { useRef, useContext, useEffect } from "react";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";
import closeIcon from "../../../assets/close-icon-restaurant-details.svg";
import pickupIcon from "../../../assets/pickup.svg";

const PIckupInfoModal = () => {
  const { pickupInfoModalActive, setPickupInfoModalActive } =
    useContext(SearchAreaContext);

  const dialogRef = useRef(null);

  const closeModal = () => {
    dialogRef.current.close();
    setPickupInfoModalActive(false);
    console.log("close modal nnn clicked");
  };

  useEffect(() => {
    pickupInfoModalActive && dialogRef.current.showModal();
  }, [pickupInfoModalActive]);

  return (
    <dialog className="h-[100%] pt-16  w-full absolute top-0" ref={dialogRef}>
      <img
        className="h-[21px] w-[21px] absolute top-2 right-2 cursor-pointer"
        src={closeIcon}
        onClick={closeModal}
      />
      <div className="modal-contents relative flex flex-col items-center max-w-[440px]  h-full ml-auto mr-auto">
        <p className="font-tradeGothicBold uppercase text-2xl font-bold text-[#59382B] mb-10">
          Pickup Options
        </p>
        <div className="flex justify-center gap-4">
          <img src={pickupIcon} className="h-[78px] w=[68px]" />
          <div className="flex flex-col text-[#786259] text-base">
            <p className="font-bold">Pickup</p>
            <p>
              Grab your order on the pickup shelf. If you need help, ask a crew
              member.
            </p>
          </div>
        </div>
        <button className="button absolute bottom-0 bg-[#451400] border-[#451400] text-white w-full cursor-pointer" onClick={closeModal}>
          OKAY
        </button>
      </div>
    </dialog>
  );
};

export default PIckupInfoModal;
