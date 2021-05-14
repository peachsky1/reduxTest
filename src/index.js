//ES6
import React from 'react';
import ReactDOM from 'react-dom'
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


const App = ()=>{
return <div>HI!</div>;
}
//Take this compoenent's generated HTML and put it on the page(in the DOM)

//ReactDOM.render(App);
//App is class. to make it instance, use <App />. wrap up with JSX tag
ReactDOM.render(<App />, document.querySelector('.container'));



