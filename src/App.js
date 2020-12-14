import React from "react";
import NavBar from "./Containers/NavBar/NavBar";
import Home from "./Containers/Home/Home";
import ItemDetailContainer from "./Containers/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {CartProvider} from '../src/Components/Context/CartContext'
import "./App.scss";
import { AppContext, AppProvider } from "./Components/Context/AppContext";

function App() {

  return (
    <AppProvider>
    <CartProvider>  
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

            <Route exact path="/Cart">
              <Cart />
            </Route>

            {/* End Containers */}
          </div>
        </Switch>
        {/* Footer */}
      </BrowserRouter>
    </CartProvider>  
    </AppProvider>
  );
}

export default App;
