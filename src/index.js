//ES6
import React from 'react';
import ReactDOM from 'react-dom';


import SearchBar from './components/search_bar';
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
const API_KEY = process.env.API_KEY;
const App = ()=>{
return (<div>
            <SearchBar />
        </div>);
}
//Take this compoenent's generated HTML and put it on the page(in the DOM)

//ReactDOM.render(App);
//App is class. to make it instance, use <App />. wrap up with JSX tag
ReactDOM.render(<App />, document.querySelector('.container'));



