import { useEffect, useLayoutEffect, useRef, useContext } from "react";
import { SearchContextProvider } from "./components/User/Contexts/SearchAreaContexts";
import SiteWrapper from "./components/User/SiteWrapper";


function App() {




  // useLayoutEffect(() => {
  //   modalRef.current.classList.add("hidden");
  // });

  return (
    <div>
      <SearchContextProvider>
       <SiteWrapper />
      </SearchContextProvider>
    </div>
  );
}

export default App;
