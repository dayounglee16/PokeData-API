import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/Home/HomePage";
import Detail from "../pages/Detail";
import styled from "styled-components";

const AppRouter = () => {
  return (
    <AppRouterContainer>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </AppRouterContainer>
  );
};

export default AppRouter;

const AppRouterContainer = styled.div`
  width: 100%;
  background-color: #f2f4f6;
`;
