import styled from "styled-components";
import InputBase from "../../Base/Input";
import { colors } from "../../Colors";
const { red, blue, darkblue, lightblue } = colors;

const Input = styled.input.attrs({
  type: "text",
  //   name: "searchC",
  //   placeholder: "Searches",
  size: props => props.huge
})`
  border-radius: 3px;
  border: 1px solid #1678c1;
  display: block;
  margin: 0px;
  padding: ${props => props.padding};
  /* background: ${darkblue}; */
  color: #1678c1;
  font-weight: bolder;
  font-size: 16px;
`;
export default Input;
