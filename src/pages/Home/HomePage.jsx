import styled from "styled-components";
import SearchInput from "./components/SearchInput";
import CardList from "./components/CardList";

const HomePage = () => {
  return (
    <HomePageContainer>
      <div className="homePage-inner">
        <SearchInput />
        <CardList />
      </div>
    </HomePageContainer>
  );
};

export default HomePage;

const HomePageContainer = styled.div`
  width: 100%;
  height: 100%;

  .homePage-inner {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 60px;
  }
`;
