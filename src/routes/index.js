import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import HomePage from "../pages/Home";
import GovernmentArms from "../pages/GovernmentArms";
import DataPage from "../pages/InteractiveData";
import LgaPage from "../pages/LGA";
import PartiesInfoPage from "../pages/PartiesInfo";
import ReactGA from "react-ga";

// ********************************************
// **track the pages that are visited the most (Start)
// ********************************************
const TRACKING_ID = "UA-185663476-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

export default function Routes() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  // ********************************************
  // **track the pages that are visited the most (End)
  // ********************************************
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
