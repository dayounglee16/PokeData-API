import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import HomePage from "../pages/Home/HomePage";
import Detail from "../pages/Detail/DetailPage";
import styled from "styled-components";
import { flexStyles } from "../styles/layoutStyles";

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
  ${flexStyles()}
  width: 100%;
  height: 100%;
  background-color: #f2f4f6;
`;
