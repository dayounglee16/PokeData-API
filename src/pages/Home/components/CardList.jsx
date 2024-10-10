import styled from "styled-components";
import CardItem from "./CardItem";
import { flexStyles } from "../../../styles/layoutStyles";
import { useEffect } from "react";
import instance from "../../../instance";
import { useRecoilState } from "recoil";
import { PokemonDataState } from "../../../recoil/atom";

const CardList = () => {
  const [pokemonData, setPokemonData] = useRecoilState(PokemonDataState);
  // const [searchInput] = useRecoilValue(SearchInputState);
  // const [filteredPokemon, setFilteredPokemon] = useState(pokemonData);

  useEffect(() => {
    const getData = async () => {
      try {
        //포켓몬 전체 데이터 요청
        const mainRes = await instance.get("/pokemon", {
          params: {
            limit: 100,
          },
        });

        const result = await Promise.all(
          mainRes.data.results.map(async (pokemonItem) => {
            // 포켓몬 개별 데이터 요청 (이미지, 아이디 추출용)
            const detailRes = await instance.get(pokemonItem.url);

            // 포켓몬 개별 데이터 요청 (이름 추출용)
            const speciesRes = await instance.get(detailRes.data.species.url);

            const pokemonImage =
              detailRes.data.sprites.versions["generation-v"]["black-white"]
                .animated["front_default"];

            const koreanName = speciesRes.data.names.find(
              (pokemonItem) => pokemonItem.language.name === "ko"
            );

            return {
              id: detailRes.data.id,
              imgURL: pokemonImage,
              name: koreanName.name,
            };
          })
        );
        setPokemonData(result);
        // setFilteredPokemon(result);
      } catch (err) {
        console.error(`error, ${err}`);
        alert("오류가 발생했습니다.");
      }
    };

    getData();
  }, [setPokemonData]);

  // useEffect(() => {
  //   if (searchInput === "") return;

  //   // const filtered = pokemonData.filter((pokemonItem) => {
  //   //   return pokemonItem.id === Number(searchInput);
  //   // });

  //   // setFilteredPokemon(filtered);
  //   console.log(searchInput);
  // }, [searchInput, pokemonData]);

  return (
    <CardListContainer>
      {Array.isArray(pokemonData) &&
        pokemonData.map((pokemonItem) => {
          return <CardItem key={pokemonItem.id} pokemonItem={pokemonItem} />;
        })}
    </CardListContainer>
  );
};

export default CardList;

const CardListContainer = styled.div`
  ${flexStyles("row", "flex-start", "center", "wrap", 16)}
  max-width: 100%;
  margin-top: 80px;
  padding: 0 30px;
`;

//pokemonItem.id랑searchInput
