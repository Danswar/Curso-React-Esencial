import React from 'react';
import './styles/App.css';

import Header from './components/header';
import Dish, * as D from './components/dish';


function App() {
   
  var dish= "tacos";
  var dishes = ["tacos","ceviche","Paella"];

  return (
    <div className="App">
      <Header></Header>
      <Dish name={dish} qty='3'></Dish>
      yo como {dish}
      <ul>
        {
          dishes.map(
              dish=>(<li>{dish}</li>)
          )
        }
      </ul>
      <D.Flag></D.Flag>
    </div>
  );
}

export default App;
