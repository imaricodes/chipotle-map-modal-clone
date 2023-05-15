import { SearchContextProvider } from "./Contexts/SearchAreaContexts";
import SiteWrapper from "./components/SiteWrapper";

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
