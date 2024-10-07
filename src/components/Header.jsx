import styled from "styled-components";
import logo from "../assets/images/logos/main_logo.png";
import { flexStyles } from "../styles/layoutStyles";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-inner">
        <img className="main-logo" src={logo} alt="pokemon-logo" />
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #dc3545;
  border-bottom: 5px solid rgba(0, 0, 0, 0.08);

  .header-inner {
    ${flexStyles("row", "flex-start", "center")}
    max-width: 1240px;
    height: 70px;
    margin: 0 auto;

    .main-logo {
      cursor: pointer;
      width: 140px;
    }
  }
`;
