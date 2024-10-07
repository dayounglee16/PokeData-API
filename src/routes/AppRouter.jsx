import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/Home/HomePage";
import Detail from "../pages/Detail";

const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
};

export default AppRouter;
