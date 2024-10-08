import styled from "styled-components";
import { flexStyles, mediaQueries } from "../../styles/layoutStyles";
import PokemonInfo from "./components/PokemonInfo";

const DetailPage = () => {
  return (
    <DetailContainer>
      <div className="detail-inner">
        <div className="pokemon-image">이미지</div>
        <PokemonInfo />
      </div>
    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = styled.div`
  ${flexStyles("row", "center", "flex-start")}
  width: 100%;
  height: calc(100dvh - 130px);
  padding: 30px;

  .detail-inner {
    ${flexStyles("row", "space-between")}
    width: 100%;
    max-width: 1000px;
    aspect-ratio: 16/9;
    margin: 0 auto;
    margin-top: 60px;
    padding: 30px;
    border-radius: 20px;
    border: 2px solid #da343c54;
    background-color: #f9f8f8;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    .pokemon-image {
      ${flexStyles()}
      width: 48%;
      aspect-ratio: 5/4;
      background-color: #ccc;
    }
  }

  ${mediaQueries.tablet} {
    ${flexStyles("row", "center", "flex-start")}

    .detail-inner {
      ${flexStyles("row", "center", "center", "wrap", 60)}

      .pokemon-image {
        ${flexStyles()}
        width: 60%;
      }
    }
  }

  ${mediaQueries.mobile} {
    ${flexStyles("row", "center", "flex-start")}

    .detail-inner {
      ${flexStyles("row", "center", "center", "wrap", 60)}
      margin-top: 20px;

      .pokemon-image {
        ${flexStyles()}
        width: 60%;
      }
    }
  }
`;
