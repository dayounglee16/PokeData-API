import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { flexStyles } from "../../../styles/layoutStyles";
import { useRecoilState } from "recoil";
import { SearchInputState } from "../../../recoil/atom";

const SearchInput = () => {
  const [searchInput, setSearchInput] = useRecoilState(SearchInputState);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={onSubmit}>
      <input
        className="search-input"
        type="text"
        value={searchInput}
        placeholder="포켓몬 아이디를 입력해주세요"
        onChange={handleSearchInputChange}
      />
      <button className="search-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </Form>
  );
};

export default SearchInput;

const Form = styled.form`
  ${flexStyles()}
  position: relative;

  .search-input {
    width: 80%;
    padding: 17px 20px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    border: 2px solid #eee;
    outline: none;
  }

  .search-input::placeholder {
    color: #999;
  }

  .search-button {
    position: absolute;
    top: 12%;
    right: 9.5%;
    font-size: 16px;
    padding: 10px;
    border: none;
    background-color: #fff;
  }
`;
