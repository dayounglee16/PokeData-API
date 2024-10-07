import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { RecoilRoot } from "recoil";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <GlobalStyles />
        <AppRouter />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
