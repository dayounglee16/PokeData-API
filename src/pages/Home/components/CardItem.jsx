import styled from "styled-components";
import { flexStyles } from "../../../styles/layoutStyles";

const CardItem = () => {
  return (
    <CardItemContainer>
      <div className="pokemon-id-box">
        <span>#아이디</span>
      </div>
      <div className="pokemon-image">이미지</div>
      <h3 className="pokemon-name">이름</h3>
      <ul className="pokemon-ability-box">
        <li className="pokemon-ability-item">능력</li>
        <li className="pokemon-ability-item">능력</li>
      </ul>
    </CardItemContainer>
  );
};

export default CardItem;

const CardItemContainer = styled.div`
  ${flexStyles("column", "space-between", "center", "wrap")}
  width: 100%;
  max-width: 29%;
  aspect-ratio: 3/2;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  padding: 15px;

  .pokemon-id-box {
    ${flexStyles("row", "flex-start", "center")}
    width: 100%;
  }

  .pokemon-image {
    ${flexStyles()}
    width: 40%;
    height: 50%;
    text-align: center;
    background-color: #ccc;
  }

  .pokemon-ability-box {
    ${flexStyles("row", "space-between", "center", "wrap", 5)}
    width: 100%;
    text-align: center;
  }

  .pokemon-ability-item {
    width: 44.5%;
    background-color: #ccc;
    padding: 5px 0;
    border-radius: 5px;
    font-size: 0.8rem;
  }
`;
