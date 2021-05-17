import React, { Component } from 'react';
//const Component = React.Component;
// input type bar on top of the page.
//const SearchBar = () => {
//    return <input />
//};

//class SearchBar extends React.Component {
class SearchBar extends Component{
// render function acts like function method. This also will return JSX
    render() {
      return <input onChange={this.onInputChange} />;
    }

    onInputChange(event){
        console.log(event.target.value);
    }
}
//new SearchBar

export default SearchBar;