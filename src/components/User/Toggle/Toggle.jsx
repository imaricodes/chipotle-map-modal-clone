import React,{useContext, useEffect,useRef} from "react";
import { SearchAreaContext } from "../Contexts/SearchAreaContexts";
import * as Icon from "../../../assets/Icons";

const Toggle = () => {

  const {deliveryModeActive, setDeliveryModeActive} = useContext(SearchAreaContext)
  const pickupToggleRef = useRef(null)
  const deliveryToggleRef = useRef(null)

  const handlePickupToggle = (e) => {  
    e.stopPropagation()
    if (deliveryModeActive) {
      setDeliveryModeActive(prev => !prev)
    } else return
  }
  const handleDeliveryToggle = (e) => {  
    e.stopPropagation()
    if (!deliveryModeActive) {
      setDeliveryModeActive(prev => !prev)
    } else return
  }

  useEffect(() => {
    if (!deliveryModeActive && !pickupToggleRef.current.classList.contains("active")) {
      pickupToggleRef.current.classList.add("active")
      deliveryToggleRef.current.classList.remove("active")
    } 
      

    if (deliveryModeActive && pickupToggleRef.current.classList.contains("active")) {
      pickupToggleRef.current.classList.remove("active")
      deliveryToggleRef.current.classList.add("active")
    }
    console.log("delivery mode active", deliveryModeActive)
  }, [deliveryModeActive])


  return (
    <div className="flex justify-between flex-[1_1_100%] max-w-[260px] h-[40px] rounded-[2em] shadow-md cursor-pointer" >
      <div ref={pickupToggleRef} className="toggle-find-chipotle toggle-find-chipotle-pickup " onClick={handlePickupToggle} >
        {!deliveryModeActive ? <img src={Icon.PepperSmallWhite} alt="pepper icon"/> : <img src={Icon.PepperSmallBrown} alt="pepper icon"/>}
        <span>pickup</span>
      </div>

      <div ref={deliveryToggleRef} className="toggle-find-chipotle toggle-find-chipotle-delivery" onClick={handleDeliveryToggle}>
        {!deliveryModeActive ? <img src={CarBrown} alt="car icon" /> : <img src={CarWhite} alt="car icon" />}
        <span>delivery</span>
      </div>
    </div>
  );
};

export default Toggle;
