import Header from "./components/Header/index"

import { AppRoutes }  from "./Routes";

import GlobalStyle from "./styles/Global"

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <AppRoutes />
    </>
  );
}

export default App
