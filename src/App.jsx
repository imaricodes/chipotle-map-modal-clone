import { SearchContextProvider } from "./components/User/Contexts/SearchAreaContexts";

import ModalContainer from "./components/User/ModalContainer/ModalContainer";



function App() {
  return (
    <SearchContextProvider>
      <ModalContainer />
    </SearchContextProvider>
  );
}

export default App;
