import styled from "styled-components";
import { flexStyles, mediaQueries } from "../../../styles/layoutStyles";
import { useNavigate } from "react-router-dom";
const CardItem = ({ pokemonItem, pokemonTypes }) => {
  const navigate = useNavigate();

  return (
    <CardItemContainer onClick={() => navigate(`/detail/${pokemonItem.id}`)}>
      <div className="pokemon-id-box">
        <span className="pokemon-id"># {pokemonItem.id} </span>
      </div>
      <img
        className="pokemon-image"
        src={pokemonItem.imgURL}
        alt={pokemonItem.name}
      />
      <h3 className="pokemon-name">{pokemonItem.name}</h3>
      <div className="pokemon-ability-box">
        {pokemonTypes.map((typeItem) => {
          return (
            <div key={typeItem} className="pokemon-ability-item">
              {typeItem}
            </div>
          );
        })}
      </div>
    </CardItemContainer>
  );
};

export default CardItem;

const CardItemContainer = styled.div`
  ${flexStyles("column", "space-between", "center", "wrap")}
  width: 100%;
  max-width: 29%;
  aspect-ratio: 4/3;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  padding: 15px;
  cursor: pointer;

  &:hover {
    translate: 0 -5px;
    transition: all 0.4s;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);

    .pokemon-image {
      scale: calc(1.1);
      transition: all 0.3s;
    }
  }

  .pokemon-id-box {
    ${flexStyles("row", "flex-start", "center")}
    width: 100%;

    .pokemon-id {
      font-weight: bold;
      color: #666;
    }
  }

  .pokemon-image {
    ${flexStyles()}
    width: 32%;
    height: 40%;
    text-align: center;
  }
  .pokemon-image:hover {
  }

  .pokemon-name {
    font-weight: bold;
  }

  .pokemon-ability-box {
    ${flexStyles("row", "space-between", "center", "wrap", 5)}
    width: 100%;
    text-align: center;
    margin: 5px 0;
  }

  .pokemon-ability-item {
    width: 44.5%;
    background-color: #ccc;
    padding: 5px 0;
    border-radius: 5px;
    font-size: 0.8rem;
  }

  ${mediaQueries.tablet} {
    max-width: 45%;
  }

  ${mediaQueries.mobile} {
    max-width: 100%;
  }
`;
