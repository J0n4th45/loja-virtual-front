import React from "react";
import { Switch, Route } from "react-router-dom";

import ProductList from "./ProductList/ProductList";
import ProductEdit from "./ProductEdit/ProductEdit";
import Error from "./Error/Error";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={ProductList}></Route>
    <Route path="/lista-protudo" exact component={ProductList}></Route>
    <Route path="/edita-protudo" exact component={ProductEdit}></Route>
    <Route path="/*" exact component={Error}></Route>
  </Switch>
);

export default Routes;
