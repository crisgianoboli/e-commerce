import React from 'react';
import NavBar from './Containers/NavBar/NavBar';
import Home from './Containers/Home/Home';
import ItemDetailContainer from './Containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';




function App() {
  return (
    <BrowserRouter>

      {/* NavBar */}
      <NavBar />

      <Switch>
        <div className="App">   

        {/* // Star Containers // */}
        <Route exact path="/">
          <Home />
        </Route>  

        <Route exact path="/detail/:id">
          <ItemDetailContainer />
        </Route>

        <Route exact path="/cart">
          <Cart />
        </Route>

     
      {/* End Containers */}
      </div>
    </Switch>
    {/* Footer */}

    </BrowserRouter>
  );
}

export default App;
