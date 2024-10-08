import styled from "styled-components";
import logo from "../assets/images/logos/main_logo.png";
import { flexStyles, mediaQueries } from "../styles/layoutStyles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div className="header-inner">
        <img
          className="main-logo"
          src={logo}
          alt="pokemon-logo"
          onClick={() => navigate("/")}
        />
      </div>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  background-color: #dc3545;
  border-bottom: 5px solid rgba(0, 0, 0, 0.09);

  .header-inner {
    ${flexStyles("row", "flex-start", "center")}
    max-width: 1240px;
    max-height: 70px;
    height: 100%;
    margin: 0 auto;
    padding: 0 20px;

    .main-logo {
      cursor: pointer;
      width: 140px;
    }
  }

  ${mediaQueries.tablet} {
    .header-inner {
      ${flexStyles("row", "center", "center")}
    }
  }
  ${mediaQueries.mobile} {
    .header-inner {
      ${flexStyles("row", "center", "center")}
    }
  }
`;
