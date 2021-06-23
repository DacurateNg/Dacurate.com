import React from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/Home";
import GovernmentArms from "../pages/GovernmentArms";
import DataPage from "../pages/InteractiveData";
import LgaPage from "../pages/LGA";
import PartiesInfoPage from "../pages/PartiesInfo";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/government-arms" component={GovernmentArms} />
      <Route exact path="/interactive-data/:index" component={DataPage} />
      <Route exact path="/parties-info" component={PartiesInfoPage} />
      <Route exact path="/lga-info" component={LgaPage} />
    </Switch>
  );
}
