import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAU1KqD8X5589IU-i7lLbX0cAwsuiib6tU';



// create a new component
// product some html that will later be placed in the body
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}


// take the html generated by the component and place in page
ReactDOM.render(<App />, document.querySelector('.container')); 
// return instance by wrapping in jsx tag
// dictage where to rendor the dom: inside id container
