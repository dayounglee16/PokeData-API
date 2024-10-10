import styled from "styled-components";
import { flexStyles, mediaQueries } from "../../styles/layoutStyles";
import PokemonInfo from "./components/PokemonInfo";
import { useRecoilState } from "recoil";
import { PokemonDataState } from "../../recoil/atom";
import { useEffect, useState } from "react";
import instance from "../../instance";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [pokemonData, setPokemonData] = useRecoilState(PokemonDataState);
  const [speciesData, setSpeciesData] = useState([]);
  const [typesData, setTypesData] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const detailgetData = async () => {
      try {
        const mainRes = await instance.get(`/pokemon/${id}`);
        const speciesRes = await instance.get(mainRes.data.species.url);

        const typeResult = await Promise.all(
          mainRes.data.types.map(async (typeItem) => {
            const typesRes = await instance.get(typeItem.type.url);
            return typesRes.data;
          })
        );

        setPokemonData(mainRes.data);
        setSpeciesData(speciesRes.data);
        setTypesData(typeResult);
        console.log("typeResult", typeResult);
      } catch (err) {
        console.error(`error ${err}`);
      }
    };

    detailgetData();
  }, [id, setPokemonData]);

  //포켓몬 한국어 이름 추출
  const koreanName =
    speciesData?.names?.find(
      (pokemonName) => pokemonName.language.name === "ko"
    )?.name || "이름을 불러오는 중 ...";

  //포켓몬 타입 한국어 이름 추출
  const typeskoreanName =
    typesData.map(
      (type) =>
        type.names?.find((typeName) => typeName.language.name === "ko")?.name ||
        "타입을 불러오는 중 ..."
    ) || [];
  console.log("typeskoreanName", typeskoreanName);

  return (
    <DetailContainer>
      <div className="detail-inner">
        <div className="pokemon-image-box">
          <img
            className="pokemon-image"
            src={pokemonData?.sprites?.other["dream_world"]["front_default"]}
          />
        </div>

        <PokemonInfo
          pokemonData={pokemonData}
          koreanName={koreanName}
          typeskoreanName={typeskoreanName}
        />
      </div>
    </DetailContainer>
  );
};

export default DetailPage;

const DetailContainer = styled.div`
  ${flexStyles("row", "center", "flex-start")}
  width: 100%;
  min-height: calc(100dvh - 70px);
  padding: 20px;

  .detail-inner {
    ${flexStyles("row", "space-between")}
    width: 100%;
    max-width: 1000px;
    aspect-ratio: 16/9;
    margin: 0 auto;
    margin-top: 90px;
    padding: 30px;
    border-radius: 20px;
    border: 2px solid #da343c54;
    background-color: #f9f8f8;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

    .pokemon-image-box {
      ${flexStyles()}
      width: 48%;

      .pokemon-image {
        width: 380px;
        height: 100%;
      }
    }
  }

  ${mediaQueries.tablet} {
    ${flexStyles("row", "center", "flex-start")}

    .detail-inner {
      ${flexStyles("row", "center", "center", "wrap", 60)}
      width: 90%;
      margin-top: 60px;

      .pokemon-image-box {
        padding: 30px 0;
      }
    }
  }

  ${mediaQueries.mobile} {
    ${flexStyles("row", "center", "flex-start")}

    .detail-inner {
      ${flexStyles("row", "center", "center", "wrap", 60)}
      width: 90%;
      margin-top: 60px;

      .pokemon-image-box {
        padding: 15px 0;
      }
    }
  }
`;
