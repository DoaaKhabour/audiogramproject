import React from 'react';
import './App.css';
import View from './Views/View' ;
import {BrowserRouter} from 'react-router-dom' ;

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <View />
      </div>
      </BrowserRouter>
  );
}

export default App;
