import styled from "styled-components";
import CardItem from "./CardItem";
import { flexStyles } from "../../../styles/layoutStyles";
const mockData = [
  {
    id: 1,
    title: "포켓몬",
  },
  {
    id: 2,
    title: "포켓몬",
  },
  {
    id: 3,
    title: "포켓몬",
  },
  {
    id: 4,
    title: "포켓몬",
  },
  {
    id: 5,
    title: "포켓몬",
  },
  {
    id: 6,
    title: "포켓몬",
  },
];

const CardList = () => {
  return (
    <CardListContainer>
      {mockData.map((pokemonItem) => {
        return <CardItem key={pokemonItem.id} />;
      })}
    </CardListContainer>
  );
};

export default CardList;

const CardListContainer = styled.div`
  ${flexStyles("row", "space-between")}
  max-width: 100%;
  margin-top: 80px;
  padding: 0 30px;
`;
