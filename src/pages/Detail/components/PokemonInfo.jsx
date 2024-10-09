import styled from "styled-components";
import { flexStyles, mediaQueries } from "../../../styles/layoutStyles";

const PokemonInfo = ({ selectedPokemon }) => {
  console.log(selectedPokemon);
  return (
    <PokemonInfoContainer>
      <div className="pokemon-profile">
        <span className="pokemon-id">{selectedPokemon}</span>
        <h2 className="pokemon-name">이상해씨</h2>
      </div>
      <div className="pokemon-ability-box">
        <ul className="pokemon-ability">
          <li className="ability-title">능력1</li>
          <li className="ability-title">능력2</li>
        </ul>
        <p className="pokemon-ability-text">
          내리쪼이는 태양 빛을 에너지로 변환할 수 있기 때문에 여름에 더욱
          강해진다.
        </p>
      </div>
      <div className="pokemon-size">
        <dl className="pokemon-weight-box">
          <dt className="pokemon-weight">신장</dt>
          <dd className="pokemon-weight-value">0.7m</dd>
        </dl>
        <dl className="pokemon-height-box">
          <dt className="pokemon-height">무게</dt>
          <dd className="pokemon-height-value">0.7m</dd>
        </dl>
      </div>
    </PokemonInfoContainer>
  );
};

export default PokemonInfo;

const PokemonInfoContainer = styled.div`
  ${flexStyles("column", "space-between", "flex-start", "wrap", 30)}
  width: 48%;

  .pokemon-profile {
    ${flexStyles("column", "flex-start", "flex-start", "wrap", 10)}

    .pokemon-id {
      font-size: 1.2rem;
    }

    .pokemon-name {
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  .pokemon-ability-box {
    ${flexStyles("column", "flex-start", "flex-start", "wrap", 25)}
    width: 100%;

    .pokemon-ability {
      ${flexStyles("row", "space-between", "center", "wrap", 20)}
      width: 100%;

      .ability-title {
        ${flexStyles("row", "center", "center", "wrap", 10, 1)}
        padding: 2% 0;
        border-radius: 25px;
        background-color: #ccc;
        color: #fff;
      }
    }
    .pokemon-ability-text {
      font-size: 1.1rem;
      font-weight: 600;
      line-height: 24px;
    }
  }

  .pokemon-size {
    ${flexStyles("row", "center", "center", "wrap", 10, 1)}
    width: 100%;

    .pokemon-weight-box {
      ${flexStyles("column", "center", "center", "wrap", 20, 1)}
      aspect-ratio: 2 /1;
      border: 1px solid #eee;

      .pokemon-weight {
        padding: 5px 20px;
        border-radius: 20px;
        background-color: #da343c;
        color: #fff;
        font-size: 0.8rem;
      }
    }

    .pokemon-height-box {
      ${flexStyles("column", "center", "center", "wrap", 20, 1)}
      aspect-ratio:2/1;
      border: 1px solid #eee;

      .pokemon-height {
        padding: 5px 20px;
        border-radius: 20px;
        background-color: #da343c;
        color: #fff;
        font-size: 0.8rem;
      }
    }
  }

  ${mediaQueries.tablet} {
    ${flexStyles("column", "space-between", "flex-start", "wrap", 40)}
    width: 100%;

    .pokemon-size {
      .pokemon-weight-box {
        ${flexStyles("row", "center", "center", "wrap", 20, 1)}
        aspect-ratio: 8/1;
      }

      .pokemon-height-box {
        ${flexStyles("row", "center", "center", "wrap", 20, 1)}
        aspect-ratio:8/1;
      }
    }
  }

  ${mediaQueries.mobile} {
    ${flexStyles("column", "space-between", "flex-start", "wrap", 40)}
    width: 100%;

    .pokemon-size {
      ${flexStyles("column", "center", "center", "wrap", 20, 1)}

      .pokemon-weight-box {
        ${flexStyles("row", "center", "center", "wrap", 30, 1)}
        width: 100%;
        aspect-ratio: 8/1;
      }

      .pokemon-height-box {
        ${flexStyles("row", "center", "center", "wrap", 30, 1)}
        width: 100%;
        aspect-ratio: 8/1;
      }
    }
  }
`;
