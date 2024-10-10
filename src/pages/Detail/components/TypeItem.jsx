import styled from "styled-components";
import { flexStyles } from "../../../styles/layoutStyles";

const TypeItem = ({ typeItem }) => {
  return (
    <TypeItemContainer>
      <li className="type-item">{typeItem}</li>
    </TypeItemContainer>
  );
};

export default TypeItem;

const TypeItemContainer = styled.ul`
  ${flexStyles()}
  .type-item {
    padding: 12px 30px;
    background-color: #333;
    border-radius: 20px;
    color: #fff;
  }
`;
