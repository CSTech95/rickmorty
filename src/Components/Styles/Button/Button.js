import React from "react";
import ButtonBase from "../../Base/Button";

class Button extends ButtonBase {}

Button.Big = Button.extend`
  &&& {
    padding: 10px;
  }
`;

Button.Custom = Button.extend.attrs({
  padding: props => props.padding || "1em"
})`
  &&& {
    padding: ${props => props.padding};
    width: 5em;
    margin: 0 auto;
  }
`;

// Button.Custom = Button.extend.attrs({
//   padding: props => props.padding || "1em"
// })`
//   &&& {
//     padding: ${props => props.padding};
//   }
// `;

Button.Loading = props => <Button loading {...props} />;
Button.Active = props => <Button active {...props} />;
Button.Disabled = props => <Button disabled {...props} />;
Button.Color = props => <Button color {...props} />;
Button.Content = props => <Button content {...props} />;

export default Button;
