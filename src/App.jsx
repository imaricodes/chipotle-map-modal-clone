import { SearchContextProvider } from "./Contexts/SearchAreaContexts";
import SiteWrapper from "./components/SiteWrapper";

function App() {

  return (
    <div>
      <SearchContextProvider>
        <SiteWrapper />
      </SearchContextProvider>
    </div>
  );
}

export default App;
