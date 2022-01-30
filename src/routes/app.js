import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import ListWomen from "../pages/ListWomen";
import ListMen from "../pages/ListMen";
import Layout from "../container/Layout";
import LayoutMen from "../container/LayoutMen";
import OrderItemWomen from "../pages/OrderItemWomen";
import OrderItemMen from "../pages/OrderItemMen.jsx";
import useInitialState from "../hooks/useInitialCart";
import CartContext from "../contex/CartContext";
import MyOrderClothes from "../pages/MyOrderClothes";
//import Navbar from '../components/Navbar'

const App = () => {
  const initialState = useInitialState();

  return (
    <CartContext.Provider value={initialState}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />

          <Route path="/men-top-list/:path?">
            <LayoutMen>
              <Switch>
                <Route exact path="/men-top-list" component={ListMen} />
                <Route path="/men-top-list/:id" component={OrderItemMen} />
              </Switch>
            </LayoutMen>
          </Route>

          <Layout>
            <Switch>
              <Route exact path="/women-top-list" component={ListWomen} />
              <Route path="/women-top-list/:id" component={OrderItemWomen} />
              <Route path="/cola-de-compras" component={MyOrderClothes} />
            </Switch>
          </Layout>
        </Switch>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
