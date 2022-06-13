import React from "react";
import "Styles/reset.scss";
import "Styles/common.scss";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "Pages/Main/Main";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
