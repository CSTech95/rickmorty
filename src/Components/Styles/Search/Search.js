import React from "react";
import SearchBase from "../../Base/Search";

class Search extends SearchBase {}

// Button.Big = Button.extend`
//   &&& {
//     padding: 50px;
//   }
// `;

// Button.Custom = Button.extend.attrs({
//   padding: props => props.padding || "1em"
// })`
//   &&& {
//     padding: ${props => props.padding};
//   }
// `;

// Button.Loading = props => <Button loading {...props} />;
// Button.Active = props => <Button active {...props} />;
// Button.Disabled = props => <Button disabled {...props} />;
Search = props => <Search {...props} />;

export default Search;
