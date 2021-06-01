//ES6
import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_details";
//Create a new component. This component should prduce some HTML
//const is ES6 syntex. const = final value
//JSX : subset of dialect from JS which looks like HTML
//plain JS that returns JSX
//webpack and babel transform JSX into vanilla JS so that the browser can understand
//Vanilla JS : pure JS without framework or library
//rendering: post the component into HTML page.
//This component should be instantiated to render using ReactDOM
//const App = function(){
//return <div>HI!</div>;
//}

//const vs let vs var
//https://dev.to/anuradhasivasubramanian/5-things-to-remember-when-using-an-env-file-to-store-you-api-key-in-a-react-app-4f2o
// const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
// const { REACT_APP_API_KEY } = process.env;
// console.log(process.env.REACT_APP_MY_API_KEY);
const API_KEY = "AIzaSyCBP24YKawTjT-_H_tbP7IIs3wFkiWXoIY";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch("surfboards");
  }
  // defind callback for video search
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, (videos) => {
      // console.log(data);
      this.setState({
        videos: videos,
        selectedVideo: videos[0],
      });

      // same as -> this.setState({ videos });
      // same as -> this.setState({ videos: videos });
    });
  }

  render() {
    // debounce
    const videoSearch = _.debounce((term) => {
      this.videoSearch(term);
    }, 1000);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
//Take this compoenent's generated HTML and put it on the page(in the DOM)

//ReactDOM.render(App);
//App is class. to make it instance, use <App />. wrap up with JSX tag
ReactDOM.render(<App />, document.querySelector(".container"));
