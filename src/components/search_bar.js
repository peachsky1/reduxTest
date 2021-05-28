import React, { Component } from "react";
//const Component = React.Component;
// input type bar on top of the page.
//const SearchBar = () => {
//    return <input />
//};
//class SearchBar extends React.Component {
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: "HEREIS INPUT BOX",
    };
  }
  // render function acts like function method. This also will return JSX
  render() {
    // conecpt of props. property = onChange(react defined proected property)
    //      return <input onChange={this.onInputChange} />;
    //        return <input onChange={event => console.log(event.target.value)}/>;
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(event) =>
            this.setState({
              term: event.target.value,
            })
          }
        />{" "}
      </div>
    );
  }
  //    e or eventıå
  // handleInputChange
  //    onInputChange(event){
  //        console.log(event.target.value);
  ////    console.log(event);
  //    }
}
//new SearchBar
export default SearchBar;
