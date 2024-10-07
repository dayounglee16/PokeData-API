import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
