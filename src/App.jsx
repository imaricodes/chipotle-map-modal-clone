import { MainModalContextProvider } from "./Contexts/MainModalContext";
import SiteWrapper from "./components/SiteWrapper";

function App() {
  return (
    <div>
      <MainModalContextProvider>
        <SiteWrapper />
      </MainModalContextProvider>
    </div>
  );
}

export default App;
